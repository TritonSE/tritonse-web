// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-apply-js": () => import("./../src/pages/apply.js" /* webpackChunkName: "component---src-pages-apply-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-nonprofits-js": () => import("./../src/pages/nonprofits.js" /* webpackChunkName: "component---src-pages-nonprofits-js" */),
  "component---src-pages-projects-js": () => import("./../src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */),
  "component---src-pages-students-js": () => import("./../src/pages/students.js" /* webpackChunkName: "component---src-pages-students-js" */),
  "component---src-templates-project-js": () => import("./../src/templates/project.js" /* webpackChunkName: "component---src-templates-project-js" */)
}

