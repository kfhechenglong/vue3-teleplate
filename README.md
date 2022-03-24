# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

# 项目配置

## 搭建一个 Vite 项目
使用npm 
```sh
// npm
npm init vite@latest
// or yarn
yarn create vite
```
然后选择`vue-ts`模板

```sh
# 进入项目目录地址
cd you project name
# 安装依赖
npm install
# 启动项目
npm run dev

```

## 代码风格约束

### 安装`eslint`

```sh
# eslint 安装
yarn add eslint --dev
# eslint 插件安装
yarn add eslint-plugin-vue --dev

yarn add @typescript-eslint/eslint-plugin --dev

yarn add eslint-plugin-prettier --dev

# typescript parser
yarn add @typescript-eslint/parser --dev

```
####  配置.eslintrc.js
在项目跟目录新建 `.eslintrc.js`,进行相关配置
#### 新建.eslintignore

忽略依赖文件及编译后的文件

```sh
# eslint 忽略检查 (根据项目需要自行添加)
node_modules
dist
```

### 安装 `prettier`
```sh
# 安装 prettier
yarn add prettier --dev
```
####  配置.prettier.js
在项目跟目录新建 `.prettier.js`,进行相关配置
```js
// 具体配置可以参考 https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false, // 未尾逗号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 单引号
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: 'none', // 未尾分号
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf'
}
```
#### 新建.prettierignore

忽略依赖文件及编译后的文件

```sh
# eslint 忽略检查 (根据项目需要自行添加)
node_modules
dist
```
### `package.json`新增如下配置
```json
"scripts": {
    "lint": "eslint",
    "lint:fix": "eslint src --fix --ext .ts,.tsx,.vue,.js",
    "prettier": "prettier --write ."
}
```
### 解决 `eslint` 和 `prettier` 冲突

>解决 `ESLint` 中的样式规范和 `prettier` 中样式规范的冲突，以 `prettier` 的样式规范为准，使 `ESLint` 中的样式规范自动失效

```sh
yarn add eslint-config-prettier --dev
```

### 测试配置项
```sh
# eslint 检查
yarn lint
# prettier 自动格式化
yarn prettier

```

## 配置`gitHook`

安装插件
```sh
npm install lint-staged
```

### `package.json`新增如下配置

```json
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "yarn lint",
      "prettier --write",
      "git add"
    ]
  }

```

## `tsx`配置

安装插件
>首先需要安装官方维护的vite插件@vitejs/plugin-vue-jsx,这个插件其实核心还是@vue/babel-plugin-jsx,只是在这个插件上封装了一层供vite插件调用
```sh
$ npm install @vitejs/plugin-vue-jsx -D
# or
$ yarn add @vitejs/plugin-vue-jsx -D
```
### 修改`vite.config.ts`

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx() //插件使用支持tsx
  ],
});

```