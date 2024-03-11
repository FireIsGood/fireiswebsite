# FireIsWebsite

[![Netlify Status](https://api.netlify.com/api/v1/badges/3cec1ef1-8d5e-4f7a-a267-0bfd981129bc/deploy-status)](https://app.netlify.com/sites/fireiswebsite/deploys)

My funny website. Currently on [Netlify](https://fireiswebsite.netlify.app/) because I'm lazy.

## Installation

### Prerequisites

Read the [Astro quick start guide's prerequisite list](https://docs.astro.build/en/install/manual/#prerequisites).

This project uses pnpm. You can check that pnpm is installed in the terminal by running:

```bash
pnpm -v
```

### Setup

First, [fork the repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

Once the prerequisites are installed and you are working off the fork, [clone the repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) to your local machine.

This can be done from the command line:

```bash
git clone git@github.com:FireIsGood/fireiswebsite.git ./fireiswebsite
```

### Local Development

You can run the development server through the terminal. The default port is
1625 because I thought it was a funny number, but you can change it with the
`--port` flag.

From the command line:

```bash
# Default port 1625
pnpm dev

# Custom port
pnpm dev --port 1234
```

When Astro is done setting up, you should see a success message.

```bash
┃ Local    http://localhost:1625/
┃ Network  use --host to expose
```

There are additional commands you can run from the terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:1625`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Contributing

No.

## License

[MIT](https://choosealicense.com/licenses/mit/)
