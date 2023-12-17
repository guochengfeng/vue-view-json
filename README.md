<p align="center">
  <a href="https://github.com/guochengfeng/vue-json-view.git">
    <img width="200" src="./src/assets/logo.svg">
  </a>
</p>

<h1 align="center">
  <a href="https://github.com/guochengfeng/vue-json-view.git" target="_blank">Vue Json View</a>
</h1>

<div align="center">

<p>A Vue component for rendering JSON data as a tree structure.</p>
<p>It supports Vue3 at least.</p>

[![Build Status](https://travis-ci.org/guochengfeng/vue-json-view.svg?branch=master)](https://travis-ci.org/guochengfeng/vue-json-view)
[![npm package](https://img.shields.io/npm/v/vue-json-view.svg)](https://www.npmjs.org/package/vue-json-view)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/guochengfeng/vue-json-view/blob/master/LICENSE)
[![Sizes](https://img.shields.io/bundlephobia/min/vue-json-view)](https://bundlephobia.com/result?p=vue-json-view)
[![NPM downloads](http://img.shields.io/npm/dm/vue-json-view.svg?style=flat-square)](https://www.npmtrends.com/vue-json-view)
[![Issues](https://img.shields.io/github/issues-raw/guochengfeng/vue-json-view)](https://github.com/guochengfeng/vue-json-view/issues)

</div>

[![](./src/assets/Snipaste.png)](https://github.com/guochengfeng/vue-json-view.git)

English | [简体中文](./README.zh_CN.md)

## Features

- As a JSON Formatter.
- ...

## Using NPM or Yarn

```bash
$ npm install vue-json-view --save
```

```bash
$ yarn add vue-json-view
```

## Usage

```vue
<template>
  <div>
    <vue-json-view :json="{ key: 'value' }" />
  </div>
</template>

<script>
import VueJsonView from 'vue-json-view';

export default {
  components: {
    VueJsonView,
  },
};
</script>
```

## Props

| Property                 | Description                                                 | Type                              | Default |
| ------------------------ | ----------------------------------------------------------- | --------------------------------- | ------- |
| json                     | JSON data                                                   | JSON object                       | -       |
| deep                     | Paths greater than or equal to this depth will be collapsed | number                            | 4       |
| showLength               | Show the length when collapsed                              | boolean                           | true   |
| showLine                 | Show the line                                               | boolean                           | true    |
| showIcon                 | Show the icon                                               | boolean                           | true   |
| showDoubleQuotes         | Show doublequotes on key                                    | boolean                           | true    |
| rootPath                 | Root data path                                              | string                            | `root`  |
| collapsedOnClickBrackets | Support click brackets or text  to collapse                 | boolean                           | true    |
| renderNodeKey            | render node key                                             | ({ node, defaultKey }) => vNode   | -       |
| renderNodeValue          | render node value                                           | ({ node, defaultValue }) => vNode | -       |
| nodeClick                | triggered when a node is clicked                            | ({ isClosed, path }) => void      | -       |

## Events

| Event Name     | Description                              | Parameters           |
| -------------- | ---------------------------------------- | -------------------- |
| nodeClick      | triggers when click node                 | (node: NodeData)     |

## Contributors

<a href="https://github.com/guochengfeng/vue-json-view/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=guochengfeng/vue-json-view" />
</a>
