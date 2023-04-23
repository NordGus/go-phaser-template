# Go Phaser Template

> *I have no idea what I'm doing* - NordGus, 2023

This is a simple template created as a starting point to create games using Phaser Game Framework with a Go Backend.

This template is relatively unopinionated. You can do what ever you want with it.

The only choices I made before hand were:

- Use Vite.js for frontend development.
- Use Typescript as frontend language.
- Use `VScode`'s `devcontainer` feature to create a unified and portable development environment using a Docker container.

> Personally, I created this setup because, eventually, I want to create tooling to bundle the entire game in a single Go executable creating my own hacky ROM.

## Setup

### Before Starting

This setup instructions are for the default `VScode` setup with `devcontainer`, this doesn't mean you're force to use it, but you'll need to hack your way around it.

### Pre-requisites

- Docker
- Visual Studio Code

### Before first Startup

Before starting the `devcontainer` for the first time, you should:

1. Open the `devcontainer` setting files `.devcontaier/devcontainer.json` and change the `name` property to reflect your project's name.

    1. *(Optional)* Set the desired Go, Alpine Linux and Node versions in the build args.

2. Open the `package.json` at the root of the repository and change the `name` property to reflect your project's name.

### First Start-up

After starting the `devcontainer` for the first time you must:

1. Install the Go Tools:

    1. Open the command pallet (ctrl + P).
    2. Run the command `> Go: Install/Update Tools`.
    3. Select all tools and click `Ok`.

2. Rename the go module:

    ```bash
    go mod edit -module example.com/you/project-name
    ```

    > I recommend to delete the `go.mod` file at the root of the repository and use instead `go mod init example.com/you/project-name` if you've change the provided Go version in the `devcontaier` build args.

3. Download Go packages:

    ```bash
    go mod download
    ```

4. Download node modules:

    ```bash
    yarn install
    ```

### Start Development Environment

In one terminal instance start the Vite development server by running:

```bash
yarn dev
```

In another terminal instance start the Go backend by running:

```bash
go run backend/cmd/main.go
```

You should be all setup to start hacking away.
