const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    
    if (event.pathParameters && event.pathParameters.id) {
      const posts = await mysql.query('select id, name, email from logs where id=?', [event.pathParameters.id])
      return util.bind(user.length ? logs[0] : {})
    }

    const logs = await mysql.query('select id, name, email from logs')
    return util.bind(logs)
  } catch (error) {
    return util.bind(error)
  }
}