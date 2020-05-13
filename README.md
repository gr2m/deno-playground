# deno-playground

Just some [Deno](https://deno.land/) scripts

## Usage

```
# https://github.com/gr2m/universal-user-agent/
deno run https://gr2m.github.io/deno-playground/universal-user-agent.ts


# https://github.com/octokit/endpoint.js/
deno run https://gr2m.github.io/deno-playground/octokit-endpoint.ts

# https://github.com/octokit/request.js/
deno run --allow-net https://gr2m.github.io/deno-playground/octokit-request.ts

# https://github.com/octokit/graphql.js/
# create token at https://github.com/settings/tokens/new
GITHUB_TOKEN=[your token here] deno run --allow-net --allow-env https://gr2m.github.io/deno-playground/octokit-graphql.ts

# https://github.com/octokit/core.js/
deno run --allow-net https://gr2m.github.io/deno-playground/octokit-core.ts
```

## License

[ISC](LICENSE)
