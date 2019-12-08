publish:
	npm publish --dry-run
install:
	npm install
link:
	npm link
start: 
	npx babel-node src/bin/brain-games.js
lint: 
	npx eslint .