# eslint-plugin-versett

[![Build Status](https://travis-ci.com/versett/eslint-plugin-versett.svg?token=RyZnHpAxmkfPjEq48bkB&branch=master)](https://travis-ci.com/versett/eslint-plugin-versett)

This plugin will help us maintain our code base to be cleaner and consistent among different projects.
Please read the guidlines below for both usage and development.
You can find more info on eslint [here](https://eslint.org/).

## Usage

Each config file helps you start linting a project by just using the preconfigured configurations. Currently there are 4 types of configurations available as below:
* `jsNode` - for Node projects using Javascript
* `jsReact` - for React projects using Javascript
* `tsNode` - for Node projects using Typescript
* `tsReact` - for React projects using Typescript


### Installation

For using one of these configurations you have to add this repository to your `package.json` file which you can do by running the following command:
```
yarn add --dev @versett/eslint-plugin-versett
```
or
```
npm install --save-dev @versett/eslint-plugin-versett
```
In order for this command to work you have to login to Versett organization on npm using `npm login`.


####Peer Dependecies
You have to install peer dependencies directly in your project for now by this command:
```
yarn add --dev eslint babel-eslint eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-import
```
This command will no longer be needed after the issue with `eslint shareable config plugins` is resolved.(You can refer to this [RFC](https://github.com/eslint/rfcs/pull/7) for more information) 

### Configuration

Eslint works with [a config file](https://eslint.org/docs/user-guide/configuring).
Here is a sample config file (`.eslintrc.json`):

```
{
  "plugins": [
    "@versett/eslint-plugin-versett"
  ],
  "extends": [
    "plugin:@versett/eslint-plugin-versett/jsReact"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {}
}
```
In `plugins` you can add the plugins you want to use. by default we use these plugins in our configurations:

* eslint
* jest
* jsx-a11y
* import

by using this syntax in `extends` you can import the configuration you need.
```
plugin:versett/configurationName
```

In `rules` section, overriding them is advised against. But for overriding some of the rules, you can create an issue and see if the team agrees on the change.
If you want to use additional plugins you have to add them in `plugins` but have to activate their rules manually.

### Typescript specific instructions

In order to to work with Typescript, Linting commands in `package.json` need to be a little different.
By using `babel-eslint-typescript` the same result can be achieved with Typescript.

```
"lint": "eslint --ext .ts,.tsx src"
```

## Development

To get started on develpment run these commands:
```
nvm use
yarn
```
For testing purposes you can use `yarn link` (or `npm link`):
```
cd eslint-plugin-versett
yarn link
```
then
```
cd my-project
yarn link @versett/eslint-plugin-versett
```

After that, a symbolic link is added to `node_modules` of the project directory.

### Dependencies

There are multiple eslint plugins we have used which are listed below.

* [react](https://github.com/yannickcr/eslint-plugin-react)
* [jest](https://github.com/jest-community/eslint-plugin-jest)
* [import](https://github.com/benmosher/eslint-plugin-import/)
* [jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)

please refer to their repos for rules and configurations.

## Contributing

Please read [this doc](https://versett.quip.com/zyEcAZ0ZosJn/How-to-Contribute-Code) for details on our code of conduct, and the process for submitting pull requests.

## Versioning

Versioning is done automatically by `versett-devtools` when a branch is merged with master and our CI/CD runs.

## Need help?

Post on the #developers channel on Slack or create an issue.

## Authors

* **Soroush Karimi**
* **Mehran Dabestani**
* **Hanie Gharedaghi**

See also the list of [contributors](https://github.com/versett/eslint-plugin-versett/contributors) who participated in this project.

## Acknowledgments

* Thanks to all Versett superheroes!
