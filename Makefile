install:
	 npm ci

lint:
	 npx eslint .

test:
	 npm test

ci: install lint test
