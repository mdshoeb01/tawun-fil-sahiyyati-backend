async function addExpense (body, pool) {
    const {
        date,
        description,
        amount,
        type,
    } = body;
    let res;
    try {
        let [avl] = await pool.execute('select available from amount order by createdAt desc limit 1');
        let available;
        if (avl[0] === undefined) {
            available = type === 'credit' ? +amount : (amount * (-1));
            [res] = await pool.execute('insert into amount (date, description, amount, type, available) values (?, ?, ?, ?, ?)', [date, description, amount, type, available]);
        } else {
            available = type === 'credit' ? (avl[0].available + +amount) : (avl[0].available - +amount);
            res = await pool.execute('insert into amount  (date, description, amount, type, available) values (?, ?, ?, ?, ?)', [date, description, amount, type, available]);
        }
    } catch (err) {
        throw err;
    }
    return res;
}

async function listExpensesByYearAndMonth (year, month, pool) {
    let res;
    try {
        [res] = await pool.execute('select date_format(date, "%Y-%m-%d") as date, amount, description, type, available from amount where month(date) = ? and year(date) = ? and deleted = ? order by createdAt desc', [month, year, false]);
    } catch (err) {
        throw err;
    }
    return res;
}

module.exports = {
    addExpense,
    listExpensesByYearAndMonth,
};