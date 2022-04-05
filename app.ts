import GitHubClient from './src/GitHubClient';

// Load ENV variables.
require('dotenv').config();

// HACK: needed to keep the VS debugger window open after running a node console app.
require('readline')
    .createInterface(process.stdin, process.stdout)
    .question('', function () {
        process.exit();
    });

// Using a function wrapper so we can use async/await.
CallQueries()


async function CallQueries() {

    //await GitHubClient('ClosedIssues');
    //await GitHubClient('GetRepositoryWithIssues');
    //await GitHubClient('LastOpenPRs');
    //await GitHubClient('OpenPRsForUser');
    await GitHubClient('TotalCountOfPRs');

}
