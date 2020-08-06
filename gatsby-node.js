const IS_HTML = /\.html?$/

exports.onCreatePage = ({ page, actions }) => {
  const { path } = page

  if (!path.endsWith('/') && !IS_HTML.test(path)) {
    actions.createPage({ ...page, path: `${path}.html` })
  }
}
