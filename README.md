# Our Website 
[![Build Status](https://travis-ci.com/TritonSE/tritonse-web.svg?branch=master)](https://travis-ci.com/TritonSE/tritonse-web)

This repository contains both:
  1. The source code used to build our website 
  2. The results of the build process in a separate branch

## Infrastructure 

We built our site with [GatsbyJS](https://www.gatsbyjs.org/), a static site generator that uses React and GraphQL to compile 
data from external sources into static HTML files. Data is stored in a [Firebase](https://firebase.google.com/) database, 
which is queried during the build process. [Travis CI](https://travis-ci.com/) is used for testing and deployment purposes,
such that commits to `master` are automatically reflected on to our website.

## Installation

Install the Gatsby CLI toolkit on your machine to in order to run `gatsby` commands.

```
npm install -g gatsby-cli 
```

Clone this repository into the directory of your choice and `cd` in.

```
git clone https://github.com/TritonSE/tritonse-web && cd tritonse-web
```

Perform local installation procedures (e.g. install Node dependencies).

```
npm install 
npm install --prefix plugins/tritonse-source-firestore
```

Do note that both commands have to be run: once for the Gatsby project and once 
for our custom Gatsby plugin, which allows us to quickly fetch data from Firebase. 

Finally, using Gatsby's CLI commands, build our files and run a development server.

```
gatsby develop
```
