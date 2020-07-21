#!/bin/bash

rm -rf docs
hugo

git add .
git commit -m "AUTO UPDATE: $1"
git push
