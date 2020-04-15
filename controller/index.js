const sql = require('../utils/sql');

module.exports = {
    getall: async (ctx) => {
        let con = { type } = ctx.query
        let models = await sql.QUERY_TABLE(`titlelist`);
        ctx.body = result.success('获取成功',models)
    },

}




