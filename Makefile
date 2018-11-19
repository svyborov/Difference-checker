install:
	npm install
start:
	npx babel-node -- src/bin/gendiff.js
build:
	rm -rf dist
	npm run build
gendiff:
	npx babel-node -- src/bin/gendiff.js
publish:
	npm publish
lint:
	npx eslint .
