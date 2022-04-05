import fetch from 'node-fetch';
import * as fs from 'fs';

export default async function (queryFile: string) {
    console.log('\n---=== Executing: ' + queryFile + ' ===---\n');

    const query = getQueryFile(queryFile);
    console.log('\nQuery:\n' + query);

    let body = await postToAPI(query);
    console.log('\nResults:\n' + jsonFormat(body));
}

async function postToAPI(query: string) {
    let result = await fetch(
        'https://api.github.com/graphql', {
        method: 'POST',
        body: JSON.stringify({ query }),
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        },
    });
    let body = await result.text();
    return body;
}

function getQueryFile(queryFile: string) {
    return fs.readFileSync(`./src/${queryFile}.graphql`, 'utf8');
}

function jsonFormat(body: string) {
    return JSON.stringify(JSON.parse(body), null, 2);
}