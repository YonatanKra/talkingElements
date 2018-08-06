npm run buildForElements
cat dist/talkingElements/{runtime,polyfills,scripts,main}.js | gzip > talkingElements.js.gz
