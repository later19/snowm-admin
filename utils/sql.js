const query = require('./query');

module.exports = {
    //查询表
    QUERY_TABLE:function (tablename){
	    return query(`SELECT * FROM ${tablename}`);
    },
}