#!/usr/bin/env node
import runGame from '../src/index.js'
import generateRound from '../src/games/brain-progression.js'
const rule = 'What number is missing in the progression?'
runGame(generateRound, rule)
