const { db } = require('../config/database');
const util = require('util');

class Portfolio {
  // 获取所有作品
  static getAll() {
    return new Promise((resolve, reject) => {
      db.all(`
        SELECT 
          p.*,
          GROUP_CONCAT(DISTINCT pi.url) as images,
          GROUP_CONCAT(DISTINCT ps.name) as skills,
          GROUP_CONCAT(DISTINCT pn.content) as notes
        FROM portfolios p
        LEFT JOIN portfolio_images pi ON p.id = pi.portfolio_id
        LEFT JOIN portfolio_skills ps ON p.id = ps.portfolio_id
        LEFT JOIN portfolio_notes pn ON p.id = pn.portfolio_id
        GROUP BY p.id
        ORDER BY p.created_at DESC
      `, [], (err, rows) => {
        if (err) reject(err);
        resolve(rows.map(row => this.formatPortfolio(row)));
      });
    });
  }

  // 获取单个作品
  static getById(id) {
    return new Promise((resolve, reject) => {
      db.get(`
        SELECT 
          p.*,
          GROUP_CONCAT(DISTINCT pi.url) as images,
          GROUP_CONCAT(DISTINCT ps.name) as skills,
          GROUP_CONCAT(DISTINCT pn.content) as notes
        FROM portfolios p
        LEFT JOIN portfolio_images pi ON p.id = pi.portfolio_id
        LEFT JOIN portfolio_skills ps ON p.id = ps.portfolio_id
        LEFT JOIN portfolio_notes pn ON p.id = pn.portfolio_id
        WHERE p.id = ?
        GROUP BY p.id
      `, [id], (err, row) => {
        if (err) reject(err);
        if (!row) resolve(null);
        resolve(this.formatPortfolio(row));
      });
    });
  }

  // 创建作品
  static create(data) {
    return new Promise((resolve, reject) => {
      console.log('Creating portfolio with data:', data);

      if (!data.title || !data.description) {
        return reject(new Error('Title and description are required'));
      }

      // 开始事务
      db.serialize(() => {
        db.run('BEGIN TRANSACTION');

        try {
          // 插入作品基本信息
          const stmt = db.prepare(`
            INSERT INTO portfolios (title, description, featured)
            VALUES (?, ?, ?)
          `);

          stmt.run([data.title, data.description, data.featured ? 1 : 0], function(err) {
            if (err) {
              console.error('Error inserting portfolio:', err);
              db.run('ROLLBACK');
              return reject(err);
            }

            const portfolioId = this.lastID;
            console.log('Created portfolio with ID:', portfolioId);

            // 插入图片
            if (data.images && Array.isArray(data.images) && data.images.length > 0) {
              console.log('Inserting images:', data.images);
              const imageStmt = db.prepare(`
                INSERT INTO portfolio_images (portfolio_id, url, sort_order)
                VALUES (?, ?, ?)
              `);

              data.images.forEach((img, index) => {
                try {
                  imageStmt.run([
                    portfolioId,
                    img.url,
                    img.sortOrder || index
                  ]);
                } catch (err) {
                  console.error('Error inserting image:', err);
                  db.run('ROLLBACK');
                  return reject(err);
                }
              });
              imageStmt.finalize();
            }

            // 插入技能
            if (data.skills && Array.isArray(data.skills) && data.skills.length > 0) {
              console.log('Inserting skills:', data.skills);
              const skillStmt = db.prepare(`
                INSERT INTO portfolio_skills (portfolio_id, name)
                VALUES (?, ?)
              `);

              data.skills.forEach(skill => {
                try {
                  skillStmt.run([portfolioId, skill.name]);
                } catch (err) {
                  console.error('Error inserting skill:', err);
                  db.run('ROLLBACK');
                  return reject(err);
                }
              });
              skillStmt.finalize();
            }

            // 提交事务
            db.run('COMMIT', (err) => {
              if (err) {
                console.error('Error committing transaction:', err);
                db.run('ROLLBACK');
                return reject(err);
              }
              console.log('Transaction committed successfully');
              resolve(portfolioId);
            });
          });

          stmt.finalize();
        } catch (err) {
          console.error('Error in create method:', err);
          db.run('ROLLBACK');
          reject(err);
        }
      });
    });
  }

  // 格式化作品数据
  static formatPortfolio(row) {
    if (!row) return null;
    return {
      id: row.id,
      title: row.title,
      description: row.description,
      featured: Boolean(row.featured),
      images: row.images ? row.images.split(',').map((url, index) => ({
        url,
        sortOrder: index
      })) : [],
      skills: row.skills ? row.skills.split(',').map(name => ({ name })) : [],
      notes: row.notes ? row.notes.split(',').map(content => ({ content })) : [],
      createdAt: row.created_at,
      updatedAt: row.updated_at
    };
  }
}

module.exports = Portfolio; 