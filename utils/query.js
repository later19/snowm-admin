
const mysql = require('mysql')
const MYSQL_CONFIG = require('../config/mysql_config') // 数据库配置


// mysql
const POOL = mysql.createPool(MYSQL_CONFIG)

// query sql语句入口
module.exports = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
      POOL.getConnection(function(err, connection) {
        if (err) {
          reject( err )
        } else {
          connection.query(sql, values, ( err, data) => {
            if ( err ) {
              reject( err )
            } else {
              resolve( data )
            }
            connection.release()
          })
        }
      })
    });
}