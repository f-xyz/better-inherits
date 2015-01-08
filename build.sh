#!/bin/sh

coffee -cm test/*.coffee
istanbul cover _mocha
