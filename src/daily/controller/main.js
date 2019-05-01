async function addDailyUpdate (body, pool) {
    const {
        date,
        clinicId,
        totalPatients,
        amountCollected,
    } = body;
    let res;
    try {
        res = await pool.execute('insert into dailyUpdate (date, clinicId, totalPatients, amountCollected) values(?, ?, ?, ?)', [date, +clinicId, +totalPatients, +amountCollected]);
        let [clinicName] = await pool.execute('select name from clinic where id = ?', [+clinicId]);
        let [avl] = await pool.execute('select available from amount order by createdAt desc limit 1');
        let available = avl[0] === undefined ? +amountCollected : avl[0].available + +amountCollected;
        await pool.execute('insert into amount (date, description, type, amount, available) values (?, ?, ?, ?, ?)', [date, `From ${clinicName[0].name} clinic`, 'credit', amountCollected, available])
    } catch (err) {
        throw err;
    }
    return res;
}

async function listDailyUpdate (year, month, clinicId, pool) {
    let res;
    try {
        [res] = await pool.execute('select date_format(dailyUpdate.date, "%Y-%m-%d") as date, dailyUpdate.totalPatients, dailyUpdate.amountCollected, clinic.name as clinicName from dailyUpdate inner join clinic on dailyUpdate.clinicId = clinic.id where month(dailyUpdate.date) = ? and year(dailyUpdate.date) = ? and dailyUpdate.deleted = ? and clinic.id = ? order by dailyUpdate.createdAt desc', [month, year, false, clinicId]);
    } catch (err) {
        throw err;
    }
    return res;
}

module.exports = {
    addDailyUpdate,
    listDailyUpdate,
}