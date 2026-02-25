import db from '../config/db.js';

export const AdmModel = {
  async getAll() {
    const result = await db.query('SELECT * FROM adm ORDER BY data_criacao DESC');
    return result.rows;
  },

  async findById(id) {
    const result = await db.query('SELECT * FROM adm WHERE id = $1', [id]);
    return result.rows[0];
  },

  async findByUrsId(urs_id) {
    const result = await db.query('SELECT * FROM adm WHERE urs_id = $1', [urs_id]);
    return result.rows[0];
  },

  async create({ urs_id, nivel }) {
    const result = await db.query(`
      INSERT INTO adm (urs_id, nivel)
      VALUES ($1, $2)
      RETURNING *`,
      [urs_id, nivel]
    );
    return result.rows[0];
  },

  async delete(id) {
    const result = await db.query('DELETE FROM adm WHERE id = $1', [id]);
    return result.rowCount;
  }
};