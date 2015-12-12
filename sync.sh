#!/bin/bash

sudo easy_install pip

(sudo virtualenv venv) || (sudo pip install virtualenv && sudo easy_install pip)
source venv/bin/activate
sudo pip install -r requirements.txt

cd grunt
npm install
grunt || (npm install -g grunt-cli && grunt)
