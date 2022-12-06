# Welcome to the Robonomics Academy Repository!

Robonomics Academy is the educational provider to the world of IoT and cyber-physical systems based on web3. The core developers of the Robonomics project, robotics specialists and PhD research scientists offer to pass through compendious experience based on 8 years of work with web 3.0 projects.

## How to Deploy Academy Site Locally

1. Install [Node.js](https://nodejs.org/en/download/package-manager/).

2. Activate [Yarn Package Manager](https://yarnpkg.com/), shipped with Node.js Corepack:

```
corepack enable
```

3. Clone the wiki repository:

```
git clone https://github.com/airalab/robonomics.academy.git
```

4. Go to the directory of the repository and run the following commands:

```
cd robonomics.academy
sudo yarn global add @gridsome/cli
yarn install
```

5. Deploy the wiki locally:

```
gridsome develop
```

> If you have the error `node: --openssl-legacy-provider is not allowed in NODE_OPTIONS`, run the following command:
```
export NODE_OPTIONS=--openssl-legacy-provider
```