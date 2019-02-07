# eslint-plugin-versett

[![Build Status](https://travis-ci.com/versett/eslint-plugin-versett.svg?token=RyZnHpAxmkfPjEq48bkB&branch=master)](https://travis-ci.com/versett/eslint-plugin-versett)

This plugin will help us maintain our code base to be cleaner and consistent among different projects.
Please read the guidelines below for both usage and development.
You can find more info on eslint [here](https://eslint.org/).

## Usage

### Installation

```
yarn add --dev @versett/eslint-plugin-versett
```
or
```
npm install --save-dev @versett/eslint-plugin-versett
```
You must be logged in to you Versett npm account first using `npm login`.


#### Peer Dependecies

You have to install the following peer dependencies directly in your project for now by this command:
```
yarn add --dev eslint babel-eslint eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-import
```
This command will no longer be needed after the issue with `eslint shareable config plugins` is resolved. You can refer to this [RFC](https://github.com/eslint/rfcs/pull/7) for more information.

##### React Project Peer Dependencies

If you are using React, you need to install the following dependencies as well:  
`yarn add --dev eslint-plugin-react eslint-plugin-jsx-a11y`  
(or `npm install --save-dev eslint-plugin-react eslint-plugin-jsx-a11y`)

##### Typescript Project Peer Dependencies

If you are using Typescript, you need to install the following dependencies as well:  
`yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin`  
(or `npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin`)  

**Notes:** 
- It is important that you use the same version number for `@typescript-eslint/parser` and  `@typescript-eslint/eslint-plugin`.
- `tsconfig.json` must be in the root of the project.

### Configuration

Each Versett configuration helps you start linting a project by just using the preconfigured setup. Currently there are 4 types of configurations available as below:
* **`plugin:@versett/eslint-plugin-versett/jsNode`** - for Node projects using Javascript
* **`plugin:@versett/eslint-plugin-versett/jsReact`** - for React projects using Javascript
* **`plugin:@versett/eslint-plugin-versett/tsNode`** - for Node projects using Typescript
* **`plugin:@versett/eslint-plugin-versett/tsReact`** - for React projects using Typescript

Here is a sample [Eslint config file](https://eslint.org/docs/user-guide/configuring) (`project-directory/.eslintrc.json`):

```
{
  "plugins": [
    "@versett/eslint-plugin-versett"
  ],
  "extends": [
    "plugin:@versett/eslint-plugin-versett/jsReact"
  ]
}
```

We strongly recommend against overriding the `rules` configured by this plugin. If you believe you have a good reason for overriding a rule, please create an issue on this repository and post it on the #developers channel on Slack. If the team agrees, we will change the rule in the plugin so all projects can benefit from it.

### Running

Add the following script to your `package.json` and then run it using `yarn lint` (or `npm run lint`):  
```json
"lint": "eslint src --ext .js,.tsx"
```  

(you can change the `--ext` flag to the file extensions you use in your project)


## Development

To get started on development run these commands:
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
* [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)
* [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

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
