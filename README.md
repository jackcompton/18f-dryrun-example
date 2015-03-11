18f-dryrun-example
====================

This is a starter kit for using Webpack & React from within the Rails Asset Pipeline.

Why? Because having to wrap every NPM module you find in a Ruby Gem is a waste of time. Also better scoping of your JS dependencies!

What do do with this thing? Fork it, copy it, whatever. It's just here to get you started faster.

## Development Workstation Installation

This doc assumes you are on a UNIX like environment (Mac, Linux, BSD) - though you may do alright in Windows as well.


### Dependencies

First install the following dependencies if not already installed

1. Ruby 
2. Bundler
3. Node
4. Foreman (https://github.com/ddollar/foreman)

### Application Setup

After git cloning the repository, cd in to the root of the application directory.

Run the following command to install ruby gem dependencies:

```
$ bundle install
```

Enter admin password when prompted.

Install the front end dependencies:

```
$ npm install --global webpack 
$ npm install
$ webpack
``` 

### Run The Server

This starter kit includes support for hotloading of edits to your Webpack built javascript assets. 

We use foreman to start the webpack development server along with the rails server.

```
$ foreman start
```

The app will run on http://localhost:3000

## Deploying to Amazon Elastic Beanstalk

But wait, there's more: we've also included a handy .ebextensions config directory to make it easier for you to get started running your non-standard Rails+Webpack build process in Amazon Elastic Beanstalk. Just make sure you set RAILS_SKIP_ASSET_COMPILATION=true in your AWS EB Environment Properties, otherwise Rails will attempt to compile assets before the Webpack bundle is complete. 

### Elastic Beanstalk References
* [EB CLI 3 Documentation](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html)
* [Rails Apps on EB](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_Ruby_rails.html)

## TODO:

1. Improve console output for Foreman (Rails process output is currently obscured)
2. Upgrade to Rails 4.2

