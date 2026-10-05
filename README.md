[![CI](https://github.com/cnnrbrn/real-human-devs/actions/workflows/ci.yml/badge.svg)](https://github.com/cnnrbrn/real-human-devs/actions/workflows/ci.yml)

# Real Human Devs

The website for [realhumandevs.com](https://realhumandevs.com). It's built with
[Astro](https://astro.build), React and Tailwind CSS, and hosted on Cloudflare Pages.

## Scripts

| Command                | What it does                               |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Start the dev server at `localhost:4321`   |
| `npm run build`        | Build the site into `dist/`                |
| `npm run preview`      | Serve the built site locally               |
| `npm run format`       | Format every file with Prettier            |
| `npm run format:check` | Check formatting without changing anything |
| `npm run lint`         | Lint with ESLint                           |
| `npm run check`        | Type-check, including `.astro` files       |
| `npm test`             | Run the tests once                         |
| `npm run test:watch`   | Run the tests and re-run on changes        |

## Branches

- `main` is the live site.
- `dev` deploys to [dev.realhumandevs.com](https://dev.realhumandevs.com), which isn't indexed.
- Feature branches are named `type/name` (`feat/`, `fix/`, `ci/`, `test/`, `chore/`,
  `refactor/`) and open their pull requests into `dev`.

## Contact form

The form posts to a Pages Function, `functions/api/contact.ts`, which emails
hello@realhumandevs.com through Zoho SMTP. It needs:

- a `ZOHO_SMTP_PASSWORD` secret, set in the Pages project for both Production and Preview
- the `nodejs_compat` compatibility flag
