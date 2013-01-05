#!/bin/bash

PATH="${PATH}:~/bin"

dir=$(dirname "${0}")

cd "${dir}"

./monitor.sh > /dev/null
