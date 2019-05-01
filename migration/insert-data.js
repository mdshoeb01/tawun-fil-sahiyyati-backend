const pool = require('../config/pool');
const clinic = require('./clinic');

async function insertClinicData() {
  try {
    const conn = await pool.getConnection();
    const stat = await conn.prepare('insert into clinic(name, address) values (?, ?)');
    await clinic.forEach((entry) => {
      stat.execute([`${entry.name}`, `${entry.address}`]);
    });
    stat.close();
    conn.release();
  } catch (err) {
    throw err;
  }
}

async function insert() {
  await insertClinicData();
  pool.end();
}
insert();
