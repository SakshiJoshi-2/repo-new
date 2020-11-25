// import jwtDecode from 'jwt-decode'
var cookieparser = require('cookieparser')

export function getUserFromCookie(req) {
  if (process.server && process.static) return
  if (req.headers.cookie) {
    const parsed = cookieparser.parse(req.headers.cookie)
    const accessTokenCookie = parsed.token
    if (!accessTokenCookie) return

    const decodedToken = accessTokenCookie
    if (!decodedToken) return

    console.log('helper', decodedToken)
    return decodedToken
  }
}
