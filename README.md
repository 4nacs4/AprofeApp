# Cricket Media Web App

## Setup instructions:

### Development Environment Setup:

Pre-requisites:
- NodeJS
  + Yeoman
  + Bower
  + JSCS
  + Karma
  + Grunt
- Ruby
  + Compass

Install **Ruby** and **NodeJS** x64 distributions from their websites.

To install Yeoman:

```bash
$ npm install yo -g
```

To install Bower

```bash
$ npm install bower -g
```

To install JSCS

```bash
$ npm install -g jscs
```

To install Grunt Command Line Interface

```bash
$ npm install -g grunt-cli
```

To install Karma Command Line Interface

```bash
$ npm install -g karma-cli
```

To install generator ng-Super

```bash
$ npm install -g generator-ng-super
```

To install Compass

```bash
$ gem install Compass
```

## Installation

Run the following commands from the root

To install node modules

```bash
$ npm install
```

To install bower components

```bash
$ bower install
```

## Styling and Linting
Generated app would contain jshint and jscs configurations. Make sure your editor is configured to take advantage of both styling and linting. 

## Grunt Tasks

##### ```$ grunt server```
Pops up a development environment with HTML, CSS and JS Livereload

##### ```$ grunt test```
Runs all unit tests on Karma

##### ```$ grunt build```
Creates a ```dist``` containing a distribute-able Angular App

##### ```$ grunt bump```
Bump application version and goodies, details at [grunt-bump](https://github.com/vojtajina/grunt-bump)

