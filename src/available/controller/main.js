async function getAvailable (pool) {
    try {
        const [res] = await pool.execute('select available from amount order by createdAt desc limit 1');
        return res;
    } catch(err) {
        throw err;
    }
}

module.exports = {
    getAvailable,
};
