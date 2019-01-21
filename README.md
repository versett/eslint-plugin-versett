# eslint-plugin-versett

This is an eslint plugin to be used in our projects. The configs will help us maintain our code base to be cleaner and consistent among different projects.
Please read the guidlines below for both usage and development.

## Usage

Each config file helps you start linting a project by just using the preconfigured configurations. Currently there are 4 types of configurations available as below:
* `jsNode` - for Node project using ES6 js
* `jsReact` - for React project using ES6 js
* `tsNode` - for Node project using Typescript
* `tsReact` - for Node project using Typescript


### Prerequisites

For using one of these configurations you have to add this repository to your `package.json` file which you can do by running the following command:
```
yarn add --dev @versett/eslint-plugin-versett
or
npm install --save-dev @versett/eslint-plugin-versett
```
In order for this command to work you have to login to Versett organization on npm.


### Configuration
Eslint works with a config file which you can obtain more info from [here](https://eslint.org/docs/user-guide/configuring).
In order to setup your project you should create a `.eslintrc.json` file or any other acceptable config file for eslint. but here we use the json format. Here is a confing file:

```
{
  "plugins": [
    "versett"
  ],
  "extends": [
    "plugin:versett/jsReact"
  ],
  "rules": {}
}
```
In `plugins` you can add the plugins you want to use. by default we use these plugins in our configurations:

* eslint
* react
* jest
* jsx-a11y
* import

by using this syntax in `extends` you can import the configuration you need.
```
plugin:versett/configurationName
```

In `rules` section you can override rules and turn them on or off or add new rules from new plugins to activate them. If you want to use additional plugins you have to add them in `plugins` but have to activate their rules.

### Typescript specific instructions

Linting commands in package.json need to be a little different for Typescript so the code works:
by using babel-eslint-typescript the same result can be reached with Typescript.

```
"lint": "eslint --ext .ts --ext .tsx src"
```

## Development

To get started on develpment run these commands:
```
$ nvm install
$ nvm use
$ yarn
```
For testing purposes you can use `yarn link` or `npm link`:
```
$ cd plugin
$ yarn link
```
then
```
$ cd project
$ yarn link eslint-plugin-versett
```

After that, a symbolic link has been added to `node_modules` of the plugin directory that with every change can be tested.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

Versioning is done automatically by `versett-devtools` when a branch is merged with master and our CI/CD runs. 

## Authors

* **Soroush Karimi**
* **Mehran Dabestani**
* **Hanie Gharedaghi**

See also the list of [contributors](https://github.com/versett/elsint-plugin-versett/contributors) who participated in this project.

## License

UNLICENSED

## Acknowledgments

* Thanks to all Versett superheroes!

