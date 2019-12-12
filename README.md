# herstory

A trivia game about the many influential women of history

## Steps to run this on your local:

    - clone the repo
    - npm i to install all the things
    - Windows users may have to install gulp npm package globally (npm i gulp -g)
    - use command 'gulp' to build the project and start up a server on your local. More details on build process below

Public version hosted using [Netlify](https://infallible-curie-cc5596.netlify.com/ 'Clickey me!')
[![Netlify Status](https://api.netlify.com/api/v1/badges/e6b3d032-9433-479a-ad8e-36c7d81cdbe6/deploy-status)](https://app.netlify.com/sites/infallible-curie-cc5596/deploys)

## Overview of build scripts

_scriptTask_ - Eslint runs through our js code, making sure we follow the same type of best practice or style (using every variable we create, using single quotes, not declaring a variable twice, ie). Webpack takes all our js modules, including select npm packages, packing them into a singular .js file. Babeljs adds js polyfills so we can support older broswers will still writing modern js.

_markupTask_ - We used an HTML templating language (Pug) to create most our views. This task preprocesses the template files into minified/uglified html.

_netlifyTask_ - if we have extra (config) files we want to feed to our site (stuff like redirects and scripts for split testing)

_imgTask_ - Minifies all our images using aggressive compression methods for faster loading

### Import commands to locally build/serve project
_build_ - runs all the tasks above in that order. Exits after completion

_serve_ - starts up a quick server (BrowserSync) and file watcher, you can visit on your local (localhost) or same network (IP address from same wifi)

default (_gulp_) - runs _build_ task then starts up a local server. Use the web addresses provided to see page previews
