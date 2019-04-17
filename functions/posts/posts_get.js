const mysql = require('../../lib/mysql')
const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    
    if (event.pathParameters && event.pathParameters.id) {
      const posts = await mysql.query('select id, name, email from posts where id=?', [event.pathParameters.id])
      return util.bind(user.length ? posts[0] : {})
    }

    const posts = await mysql.query('select id, name, email from posts')
    return util.bind(posts)
  } catch (error) {
    return util.bind(error)
  }
}