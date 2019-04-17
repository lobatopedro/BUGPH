const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    
    if (event.pathParameters && event.pathParameters.id) {
      const curtidas = await mysql.query('select id_post from  where id=?', [event.pathParameters.id])
      return util.bind(user.length ? comentarios[0] : {})
    }

    const logs = await mysql.query('select id_post from comentarios')
    return util.bind(comentarios)
  } catch (error) {
    return util.bind(error)
  }
}