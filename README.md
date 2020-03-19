# Personal Web Site

It's built with:

  - JavaScript (ES7)
  - [Vue.js](https://vuejs.org/)
  - [LESS](http://lesscss.org/)
  - [Firebase Hosting](https://firebase.google.com/)
  - [ESLint](https://eslint.org/)
  - [webpack](https://webpack.js.org/)
  - ~~keyboard~~ love


# Install

1. Ensure Node.js and NPM versions meets the engines property in the package.json. For example:

    ```js
    "engines": {
      "node": "8.12.0",
      "npm": "6.4.1"
    }
    ```

    **NOTE:** the project contains `.nvmrc` file, so you can use NVM: `nvm use`

2. Install NPM dependencies

    ```sh
    npm install
    ```

3. Configure environment variables. See [DOC.md](https://bitbucket.org/vovanenok/succeedium-core-backend/src/master/DOC.md#markdown-header-environment-variables).



# Run

Before running make sure that you've configured environment variables.

## Development

##### Compile and run hot-reload server
```sh
npm run dev
# or
npm run serve
```

##### Lint and fixe files
```
npm run lint
```


## Production

##### Build application
```sh
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

##### Run the built production app for tests
```sh
npm run prod
```

## Deploy on Firebase Hosting

1. Login

    ```sh
    npm run firebase:login
    ```

2. Deploy

    ```sh
    npm run deploy
    ```