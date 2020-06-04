#!/bin/bash

set -e
CONTENTDIR=`pwd`

set -x
cd $CONTENTDIR
git add .
git commit -m "Commit at $(date "+%Y-%m-%d %T")" || true
git push origin master
