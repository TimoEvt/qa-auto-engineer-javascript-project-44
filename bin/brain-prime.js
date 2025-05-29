#!/usr/bin/env node
import runGame from '../src/index.js';
import generateRound from '../src/games/brain-prime.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

runGame(generateRound, rule);
