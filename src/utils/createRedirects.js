module.exports = async ({ actions }, redirects) => {
  if (!redirects) return
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/license-application-form`,
    toPath: `https://www.tfaforms.com/4978118`,
  })

  // Create redirects from all 301s stored inside the Wordpress Redirection plugin
  redirects.length &&
    redirects.forEach(redirect => {
      createRedirect({ fromPath: redirect.origin, toPath: redirect.target })
    })
}
