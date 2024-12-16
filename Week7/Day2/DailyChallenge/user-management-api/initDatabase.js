const db = require('./server/config/db');

async function createTables() {
  try {
    await db.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('email').notNullable().unique();
      table.string('username').notNullable().unique();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
    });

    await db.schema.createTable('hashpwd', (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.string('password').notNullable();
    });

    console.log('Tables créées avec succès');
  } catch (err) {
    console.error('Erreur lors de la création des tables:', err);
  } finally {
    db.destroy();
  }
}

createTables();
