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
// Using a function wrapper so we can use async/await.
CallQueries();
async function CallQueries() {
    await (0, GitHubClient_1.default)('ClosedIssues');
    await (0, GitHubClient_1.default)('GetRepositoryWithIssues');
    await (0, GitHubClient_1.default)('LastOpenPRs');
    await (0, GitHubClient_1.default)('OpenPRsForUser');
}
//# sourceMappingURL=app.js.map