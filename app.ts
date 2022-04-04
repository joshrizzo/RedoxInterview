import GitHubClient from './src/GitHubClient';

// Load ENV variables.
require('dotenv').config();

// HACK: needed to keep the VS debugger window open after running a node console app.
require('readline')
    .createInterface(process.stdin, process.stdout)
    .question('', function () {
        process.exit();
    });



GitHubClient('request');

