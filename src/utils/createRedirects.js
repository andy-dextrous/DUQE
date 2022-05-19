module.exports = async ({ actions }, redirects) => {
  createRedirect({
    fromPath: `/license-application-form`,
    toPath: `https://www.tfaforms.com/4978118`,
  })

  if (!redirects) return
  const { createRedirect } = actions
  // Create redirects from all 301s stored inside the Wordpress Redirection plugin
  redirects.length &&
    redirects.forEach(redirect => {
      createRedirect({ fromPath: redirect.origin, toPath: redirect.target })
    })
}
