#!/bin/bash

cd grunt
npm install
grunt || (npm install -g grunt-cli && grunt)
