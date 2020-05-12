# deno-playground

Just some [Deno](https://deno.land/) scripts

## Usage

```
# https://github.com/gr2m/universal-user-agent/
deno run https://raw.githubusercontent.com/gr2m/deno-playground/master/universal-user-agent.ts


# https://github.com/octokit/endpoint.js/
deno run https://raw.githubusercontent.com/gr2m/deno-playground/master/octokit-endpoint.ts

# https://github.com/octokit/request.js/
deno run --allow-net https://raw.githubusercontent.com/gr2m/deno-playground/master/octokit-request.ts

# https://github.com/octokit/graphql.js/
# create token at https://github.com/settings/tokens/new
GITHUB_TOKEN=[your token here] deno run --allow-net --allow-env https://raw.githubusercontent.com/gr2m/deno-playground/master/octokit-graphql.ts
```

## License

[ISC](LICENSE)
