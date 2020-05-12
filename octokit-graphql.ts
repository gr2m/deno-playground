import { graphql } from "https://cdn.pika.dev/@octokit/graphql";

console.log(
  await graphql(
    `
      query {
        viewer {
          login
        }
      }
    `,
    {
      headers: {
        authorization: `token ${Deno.env.get("GITHUB_TOKEN")}`,
      },
    }
  )
);
