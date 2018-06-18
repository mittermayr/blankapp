# Getting started
Start with a `yarn install` and that should get you close. 

You might have to run `npm install react babel-core babelify browserify-css babel-preset-env` as well, followed by another `yarn install`.

Then make sure you do a `grep -R 'blankapp' .` to see where you will have to change the file and/or app name. Finally, go through `config.xml` as well as `package.json` to modify all necessary details and keys, and same goes for `build.json` which should contain your provisioning profiles and team IDs for iOS.

Also, run `cordova platform add ios android` **AFTER YOU HAVE CHANGED YOUR APP NAMES** to install both platforms and plugins.

# Testing your setup

1. Run `yarn build` and see if that works. A `bundle.js` will be placed in `www/js`
2. Run `yarn build` then `cordova prepare ios` and finally, `cordova emulate ios` to see if it fires off in the iOS Simulator.
