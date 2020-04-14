const QUERY_TABLE = (tablename) => `SELECT * FROM ${tablename}`
const DELETE_TABLE = (tablename,{primaryKey,primaryVal}) => `DELETE FROM user WHERE(${primaryKey}=${primaryVal})`

module.exports ={
    QUERY_TABLE,
    DELETE_TABLE
}