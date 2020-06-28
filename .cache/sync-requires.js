const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/home/circleci/website/src/pages/about.js"))),
  "component---src-pages-apply-js": hot(preferDefault(require("/home/circleci/website/src/pages/apply.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/circleci/website/src/pages/index.js"))),
  "component---src-pages-nonprofits-js": hot(preferDefault(require("/home/circleci/website/src/pages/nonprofits.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/circleci/website/src/pages/projects.js"))),
  "component---src-pages-students-js": hot(preferDefault(require("/home/circleci/website/src/pages/students.js"))),
  "component---src-templates-project-js": hot(preferDefault(require("/home/circleci/website/src/templates/project.js")))
}

