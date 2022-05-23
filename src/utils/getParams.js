import Cookies from "js-cookie"

export function getParams(cookieName) {
  const data = checkCookie(cookieName)
  let params = []
  if (data) {
    let urlArr = data.split("?")
    if (urlArr.length > 1) {
      let paramStr = urlArr[1]
      let paramArr = paramStr.split("&")
      paramArr.forEach(item => {
        let param = {}
        let paramItem = item.split("=")
        param.name = paramItem[0]
        param.value = paramItem[1]
        params.push(param)
      })
    }
  }
  return params
}

function checkCookie(name) {
  let cookie = Cookies.get(name)
  if (cookie) {
    return cookie
  } else {
    return null
  }
}

function saveFirstUrl(name, expiresIn = 7) {
  const dataAlreadyExists = checkCookie(name)
  if (!dataAlreadyExists) {
    return Cookies.set(name, window.location.href, { expires: expiresIn })
  }
}

export default saveFirstUrl
