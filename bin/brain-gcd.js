#!/usr/bin/env node
import runGame from '../src/index.js';
import generateRound from '../src/games/brain-gcd.js';

const rule = 'Find the greatest common divisor of given numbers.';

runGame(rule, generateRound);
