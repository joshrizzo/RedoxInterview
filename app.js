"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GitHubClient_1 = require("./src/GitHubClient");
// Load ENV variables.
require('dotenv').config();
// HACK: needed to keep the VS debugger window open after running a node console app.
require('readline')
    .createInterface(process.stdin, process.stdout)
    .question('', function () {
    process.exit();
});
(0, GitHubClient_1.default)('request');
//# sourceMappingURL=app.js.map