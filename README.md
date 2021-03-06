## Development

### Prerequisite

- Node 12+, Yarn 1, NPM 6+
- This project using Typescript
- Use whatever ECMAScript (ESNext) you want, this will be compiled to ECMAScript 2017 (ES8) later on

### Steps

- Install all dependencies with command `yarn install` (**Don't use another package manager like Yarn 2 or NPM**)
- Create `.env.local` and follow the `.env.example`
- Run development environment by running command `yarn dev`
- Happy Coding :smiley:

## Production

### Prerequisite

- Docker, Docker Compose

### Steps

- Create `.env.production` and follow the `.env.example`
- Run `docker-compose build` to build
- Run `docker-compose up` to start
