#!/bin/bash

# Function to commit a change for a file or directory
commit_change() {
    git add "$1"
    git commit -m "Committing changes for $1"
}

# Commit changes for each file/directory separately
commit_change "DAY_4_React/eav_kivumu/src/pages/Counter.jsx"
commit_change "DAY_4_React/eav_kivumu/src/pages/Login.jsx"
commit_change "DAY_4_React/eav_kivumu/src/pages/Others.jsx"
commit_change "DAY_4_React/eav_kivumu/src/redux/"
commit_change "DAY_4_React/eav_kivumu/tailwind.config.js"
commit_change "blockChain/balance-dapp/commit.sh"
commit_change "blockChain/intro.txt"
commit_change "commit.sh"
commit_change "machine learning.zip"
commit_change "user-management-systems/"
commit_change "user_backend/"

echo "all change commited "