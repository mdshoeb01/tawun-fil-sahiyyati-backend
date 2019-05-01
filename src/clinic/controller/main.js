

async function addClinic(data, pool) {
  const {
    name,
    address
  } = data;
  let res;
  try {
    [res] = await pool.execute('insert into clinic (name, address) values(?, ?)', [name, address]);
  } catch (err) {
    throw err;
  }
  return res;
}


async function getClinicList(pool) {
  let res;
  try {
    [res] = await pool.execute('select id, name, address from clinic where deleted = ?', [false]);
  } catch (err) {
    throw err;
  }
  return res;
}

module.exports = {
  addClinic,
  getClinicList,
};
