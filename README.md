# Lietunet

Lietu.net homepage implementation in Jekyll.

This repository is provided as an example implementation of a Jekyll based homepage, and to allow interested parties to check how my homepage is built.

## Requirements

### Jekyll compilation

* Working Node.js environment with lessc available in your environment (from npm package "less")
* OpenJDK or some other Java for Google Closure Compiler
* Python Pygments
* Imagemagick
* The Ruby gems: jekyll, jekyll-asset-pipeline, jekyll-minimagic jekyll-press closure-compiler

For Node.js check out [https://github.com/creationix/nvm](https://github.com/creationix/nvm).

Run these commands to set up the necessary stuff in Ubuntu, except for node:

* sudo apt-get install rubygems ruby ruby-dev openjdk-7-jre python-pygments imagemagick
* sudo gem install jekyll jekyll-asset-pipeline jekyll-minimagick jekyll-press closure-compiler

In other distributions the package names might differ a bit, but it should be fairly simple to figure it out.

### Running server

* Node.js

## License

The following files and directories and their contents are Copyright Janne Enberg. You may not reuse anything therein without my permission:

/*.html, /_posts/*.html, /img/*/

All other directories and files are MIT Licensed. Feel free to use the HTML and CSS as you please.

