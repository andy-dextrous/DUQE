module.exports = async ({ actions }, redirects) => {
  if (!redirects) return
  const { createRedirect } = actions

  // Create redirects from all 301s stored inside the Wordpress Redirection plugin
  redirects.length &&
    redirects.forEach(redirect => {
      console.log(redirect)
      createRedirect({ fromPath: redirect.origin, toPath: redirect.target })
    })
}
