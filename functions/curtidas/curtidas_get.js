const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    
    if (event.pathParameters && event.pathParameters.id) {
      const curtidas = await mysql.query('select id_post, id_usuario from  where id=?', [event.pathParameters.id])
      return util.bind(user.length ? logs[0] : {})
    }

    const logs = await mysql.query('select id_post, id_usuario from comentarios')
    return util.bind(curtidas)
  } catch (error) {
    return util.bind(error)
  }
}