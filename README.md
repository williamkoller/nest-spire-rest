# Project Name

A brief description of what this project does and why it's useful.

## Installation

- required `node`, `yarn/npm` and `@nestjs/cli`
- install `nvm`
  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`
  - export in `.bash_rc`
  - ```
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    ```
- install `node`

  - `nvm install v18.16.1`
  - set alias `nvm alias default v18`
  - set default `nvm use default`

- install `@nestjs/cli`
  - `npm i -g @nestjs/cli`
  -
- install `yarn install --frozen-lockfile`

## Usage

Examples of how to use your project, along with any relevant code snippets.

## Dependencies

List any dependencies or requirements needed to run your project.

## Contributing

Thank you for considering contributing to this project! Whether you want to report an issue, suggest an improvement, or submit your own code changes, your help is highly appreciated. Please follow the guidelines below to make the process smooth and efficient.

### Reporting Issues

If you encounter a problem with the project, have a feature request, or noticed a potential improvement, please consider opening an issue. To do so:

1. Go to the [Issues](https://github.com/williamkoller/nest-spire-rest/issues/new) section of this repository.
2. Click the "New Issue" button.
3. Fill out the provided form with detailed information about the issue or request.
4. Click "Submit Issue" to create it.

### Pull Requests

We welcome and encourage contributions from the community. If you want to contribute code or documentation changes, please follow these steps:

- Create a new branch for your changes:

  - `git checkout -b your-feature-branch`

- Make your desired changes, following our coding and style guidelines.
- Commit your changes:

  - `git commit -m "Description of your changes"`

- Push the changes to your fork on GitHub:
  - `git push origin your-feature-branch`
- Create a pull request [PR](https://github.com/williamkoller/nest-spire-rest/compare) by going to the Pull Requests section of this repository.

- Click the "New Pull Request" button.

- Select your branch with the changes from your fork.

- Provide a clear and concise description of your changes in the PR template.

- Click "Create Pull Request."

- A project maintainer will review your PR and provide feedback or merge it if it meets the project's standards.

- Code of Conduct
  Please note that we have a Code of Conduct that all contributors are expected to follow. Make sure you read and adhere to it when participating in this project.

- Thank you for helping make this project better!

## License

Specify how others can use and modify your code, along with any relevant disclaimers or warranties.
