#!/bin/bash

<<com
    This script is to commit and push all files.
    Please use this script only to commit and push all files.
    Usage:
        ./scripts/git-all-commit.sh <commit-message> <branch-name>
        This script takes two mandatory positional parameters
        "$1" => message to commit
        "$2" => remote branch name to push
com

git add .
git commit -m "$1"
git push origin $2