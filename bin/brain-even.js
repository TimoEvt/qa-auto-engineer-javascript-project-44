#!/usr/bin/env node

import greetUser from '../src/cli.js';
import playEvenGame from '../src/games/even.js';

const name = greetUser(); // получаем имя
playEvenGame(name); // передаём его в игру

