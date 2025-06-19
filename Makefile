install:
	npm ci

lint:
	npx eslint --no-config-lookup --config eslint.config.js .

test:
	npm test

ci: install lint test
