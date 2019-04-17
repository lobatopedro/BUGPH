const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.name) return util.bind(new Error('Enter your name!'))
    if (!body.email) return util.bind(new Error('Enter your email!'))

    const checkPostExist = await mysql.query('select * from posts where email=?', [body.email])
    if (checkPostExist.length) return util.bind(new Error('An account with this email already exists!'))

    const insert = await mysql.query('insert into posts (name, email) values (?,?)', [body.name, body.email])
    return util.bind(insert)
  } catch (error) {
    return util.bind(error)
  }
}
