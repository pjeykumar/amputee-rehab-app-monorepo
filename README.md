# Amputee Rehabilitation Application
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!--- These are examples. See https://shields.io for others or to customize this set of shields. You might want to include dependencies, project status and licence info here --->

The Amputee Rehabilitation app is a cross platform application to facilitate and encourage amputees to complete their rehab in a community environment.

The application is a dockerised micro-services project:

| Module     | Technology          | Data Storage  |
| ---------- | ------------------- | ------------- |
| Web Client | React - NextJS      | -             |
| Mobile     | React Native - Expo | Device secure |
| Common     | Node Library        | -             |
| Auth       | Express             | MongoDB       |

## Prerequisites

Before you begin, ensure you have met the following requirements:

<!--- These are just example requirements. Add, duplicate or remove as required --->

- You have installed
  - [Node v12.17.0](https://nodejs.org/en/)
  - [Docker](https://www.docker.com/) with [Kubernetes](https://kubernetes.io/) enabled
  - [Skaffold](https://skaffold.dev/)

## Running

To run the kubernetes cluster, run

```bash
yarn dev
```

This will spin up all the containers with related networking.

## Contributing

<!--- If your README is long or you have some specific process or steps you want contributors to follow, consider creating a separate CONTRIBUTING.md file--->

1. Clone this repository.
2. Create a branch (e.g. `ticket_number-description`): `git checkout -b <branch_name>` -
3. Make your changes using commitizen and commit them: `yarn commit`
4. Push to the original branch: `git push origin <location>`
5. Create the pull request.
6. In the PR include `@all-contributors please add <username> for <contributions>` as appropriate

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thank you to all the Contributors on this project
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/adamjamesturner93"><img src="https://avatars3.githubusercontent.com/u/50718647?v=4" width="100px;" alt=""/><br /><sub><b>Turner</b></sub></a><br /><a href="#infra-adamjamesturner93" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/Imperial-College-AND-Digital/amputee-rehab-app-monorepo/commits?author=adamjamesturner93" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## Contact

If you want to contact me you can reach me at <your_email@address.com>.

## License

<!--- If you're not sure which open license to use see https://choosealicense.com/--->

This project uses the following license: [<license_name>](link).
