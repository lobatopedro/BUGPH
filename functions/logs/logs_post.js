const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.name) return util.bind(new Error('Enter your name!'))
    if (!body.email) return util.bind(new Error('Enter your email!'))

    const checkLogsExist = await mysql.query('select * from logs where email=?', [body.email])
    if (checkLogsExist.length) return util.bind(new Error('A logs already exists!'))

    const insert = await mysql.query('insert into logs (name, email) values (?,?)', [body.name, body.email])
    return util.bind(insert)
  } catch (error) {
    return util.bind(error)
  }
}