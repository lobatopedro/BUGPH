const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.name) return util.bind(new Error('Enter your name!'))
    if (!body.email) return util.bind(new Error('Enter your email!'))

    const checkComentariosExist = await mysql.query('select * from comentarios where email=?', [body.email])
    if (checkComentariosExist.length) return util.bind(new Error('A comentaraios already exists!'))

    const insert = await mysql.query('insert into comentarios (id_post) values (?,?)', [body.name, body.email])
    return util.bind(checkComentariosExist)
  } catch (error) {
    return util.bind(error)
  }
}