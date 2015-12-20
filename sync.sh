#!/bin/sh

pip --version > /dev/null || sudo easy_install pip
virtualenv --version > /dev/null || sudo pip install virtualenv

grunt --version > /dev/null || npm install -g grunt-cli
bower --version > /dev/null || npm install -g bower

source venv/bin/activate || sudo virtualenv venv && source venv/bin/activate
sudo pip install -r requirements.txt

# Create soft link so that we can require things in browserify
ln -s .. ./app/assets/ui/node_modules/ui

cd grunt
npm install && grunt
