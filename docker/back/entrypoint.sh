#!/bin/bash

pwd
ls -alh

python -m pip install -r requirements.txt

# run flask with all host on port 5000
flask run --host=0.0.0.0 --port=5000