# TSE Website 

[![CircleCI](https://circleci.com/gh/TritonSE/tritonse.github.io/tree/source.svg?style=svg)](https://circleci.com/gh/TritonSE/tritonse.github.io/tree/source)

This repository contains both:
  1. The source code used to build our website 
  2. The results of the build process in a separate branch

We built our site with GatsbyJS, a static site generator based on React.
Most external data is stored in a Firebase database, which is queried 
during the build process. CircleCI is used for testing and deployment 
purposes, such that commits to `source` are automatically reflected on 
our website. You can find autogenerated builds in the `master` branch.

## Node Setup

Dependencies you'll need:
* Node 14+
* NPM 6+

First, install the Gatsby CLI toolkit globally in order to be able 
to run `gatsby` commands.

```
npm install -g gatsby-cli 
```

Clone this repository into the directory of your choice and `cd` in.
Then, install all project dependencies via `npm`.

```
npm install 
```

Finally, using Gatsby's CLI commands, build our files and run a 
development server.

```
gatsby develop
```

## Docker Setup

Dependencies you'll need:
* Docker
* Docker Compose

To build the `tritonse/tritonse.github.io` image, use:

```
docker-compose build
```

To run the website as a standalone container, use:

```
docker-compose up
```

The container will host a development webserver that you can
reach at **localhost:8000**.
