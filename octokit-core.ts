import { Octokit } from "https://cdn.pika.dev/@octokit/core";

const octokit = new Octokit();
console.log(await octokit.request("/"));
