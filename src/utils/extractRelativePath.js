function extractRelativePath(url) {
  if (!url) return
  if (!url.includes(".com")) return url
  const relativePath = url.toString().split(".com")[1]
  return relativePath
}

export default extractRelativePath
