/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/phone\/.+/)) {
    createPage({
      path: "/phone/:id",
      matchPath: "/phone/:id",
      component: path.resolve("src/pages/phone/phone.tsx"),
    })
  }
}
