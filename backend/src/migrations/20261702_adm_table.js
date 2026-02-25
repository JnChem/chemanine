import db from '../config/db.js';

export async function up() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS adm (
        id SERIAL PRIMARY KEY,
        urs_id INTEGER NOT NULL UNIQUE,
        nivel INTEGER DEFAULT 1,
        data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT adm_urs_id_fkey FOREIGN KEY (urs_id) REFERENCES urs(id)
      )
    `);

    console.log('Table adm created successfully.');
  } catch (error) {
    console.log(error);
  }
}

export async function down() {
  try {
    await db.query('DROP TABLE IF EXISTS adm CASCADE');

    console.log('Table urs dropped successfully.');
  } catch (error) {
    console.log(error);
  }
}

up();
