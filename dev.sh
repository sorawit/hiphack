#!/bin/sh

./venv/bin/python ./app/server.py & ./venv/bin/python ./app/static_server.py
