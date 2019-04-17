const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.name) return util.bind(new Error('Enter your name!'))
    if (!body.email) return util.bind(new Error('Enter your email!'))

    const checkCurtidasExist = await mysql.query('select * from curtidas where email=?', [body.email])
    if (checkCurtidasExist.length) return util.bind(new Error('A curtidas already exists!'))

    const insert = await mysql.query('insert into comentarios (id_post, id_usuario) values (?,?)', [body.name, body.email])
    return util.bind(checkCurtidasExist)
  } catch (error) {
    return util.bind(error)
  }
}