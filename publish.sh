#!/bin/bash

npm run build
git commit -m 'small changes'
git push origin master

cd ../demand-manager-web-app

npm uninstall --save angular2-meteor-accounts-ui

npm install --save git+https://git@github.com/epezhman/angular2-meteor-accounts-ui.git
