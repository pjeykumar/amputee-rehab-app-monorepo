# Amputee Rehabilitation Application

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Test Coverage](https://api.codeclimate.com/v1/badges/30403ed73b706a887da2/test_coverage)](https://codeclimate.com/github/Imperial-College-AND-Digital/amputee-rehab-app-monorepo/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/30403ed73b706a887da2/maintainability)](https://codeclimate.com/github/Imperial-College-AND-Digital/amputee-rehab-app-monorepo/maintainability)
![Build](https://github.com/Imperial-College-AND-Digital/amputee-rehab-app-monorepo/workflows/tests/badge.svg)

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

- The following are installed
  - [Node v12.17.0](https://nodejs.org/en/)
  - [Docker](https://www.docker.com/) with [Kubernetes](https://kubernetes.io/) enabled
  - [Skaffold](https://skaffold.dev/)
  - [Yarn] (https://classic.yarnpkg.com/en/docs/install)

Enable Ingress-nginx on your Kubernetes instance

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud/deploy.yaml
```

Setup a local JWT-Secret:

```bash
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=87~A@xXfMw$QuV9XJFu
```

Update your `/etc/hosts` file with the an entry for `127.0.0.1 rehabapp.dev`

## Running

To run the kubernetes cluster, run

```bash
yarn dev
```

This will spin up all the containers with related networking.

## Mobile Prerequisites

Install Expo CLI

```
 yarn global add expo-cli
```

## Running

```
yarn start
```

To run on mobile device:

1. Install 'Expo' app
2. Scan QR code

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
    <td align="center"><a href="https://github.com/lucypeyton"><img src="https://avatars2.githubusercontent.com/u/18162371?v=4" width="100px;" alt=""/><br /><sub><b>Lucy Peyton</b></sub></a><br /><a href="https://github.com/Imperial-College-AND-Digital/amputee-rehab-app-monorepo/commits?author=lucypeyton" title="Documentation">📖</a> <a href="#design-lucypeyton" title="Design">🎨</a> <a href="#ideas-lucypeyton" title="Ideas, Planning, & Feedback">🤔</a></td>
  <td align="center"><a href="https://www.linkedin.com/in/shrutiturner/"><img src="https://avatars2.githubusercontent.com/u/61315354?v=4" width="100px;" alt=""/><br /><sub><b>Shruti Turner</b></sub></a><br /><a href="#ideas-shrutiturner" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/simbaandi"><img src="https://avatars2.githubusercontent.com/u/37182789?v=4" width="100px;" alt=""/><br /><sub><b>Simba Sagwete</b></sub></a><br /><a href="#design-simbaandi" title="Design">🎨</a> <a href="https://github.com/Imperial-College-AND-Digital/amputee-rehab-app-monorepo/commits?author=simbaandi" title="Documentation">📖</a> <a href="#ideas-simbaandi" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center"><a href="https://github.com/adamjamesturner93"><img src="https://avatars3.githubusercontent.com/u/50718647?v=4" width="100px;" alt=""/><br /><sub><b>Adam Turner</b></sub></a><br /><a href="#infra-adamjamesturner93" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/Imperial-College-AND-Digital/amputee-rehab-app-monorepo/commits?author=adamjamesturner93" title="Code">💻</a> <a href="https://github.com/Imperial-College-AND-Digital/amputee-rehab-app-monorepo/commits?author=adamjamesturner93" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/anitaschan"><img src="https://avatars1.githubusercontent.com/u/40230516?v=4" width="100px;" alt=""/><br /><sub><b>Anita Chan</b></sub></a><br /><a href="https://github.com/Imperial-College-AND-Digital/amputee-rehab-app-monorepo/commits?author=anitaschan" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jchiversAND"><img src="https://avatars1.githubusercontent.com/u/43601980?v=4" width="100px;" alt=""/><br /><sub><b>Jordan Chivers</b></sub></a><br /><a href="https://github.com/Imperial-College-AND-Digital/amputee-rehab-app-monorepo/commits?author=jchiversAND" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Ehuf"><img src="https://avatars3.githubusercontent.com/u/32965598?v=4" width="100px;" alt=""/><br /><sub><b>Mark Shaw</b></sub></a><br /><a href="https://github.com/Imperial-College-AND-Digital/amputee-rehab-app-monorepo/commits?author=Ehuf" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Contact

If you want to contact me you can reach me at [adamjamesturner93@gmail.com](mailto:adamjamesturner93@gmail.com).

## License

<!--- If you're not sure which open license to use see https://choosealicense.com/--->

This project uses the following license: [<license_name>](link).
