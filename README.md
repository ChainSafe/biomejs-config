# @chainsafe/biomejs-config

[![Node.js CI](https://github.com/ChainSafe/biomejs-config/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/ChainSafe/eslint-config/actions/workflows/ci.yaml)
[![npm version](https://badge.fury.io/js/@chainsafe%2Fbiomejs-config.svg)](https://badge.fury.io/js/@chainsafe%2Fbiomejs-config)

This package provides ChainSafe's `biomejs.json` as an extensible shared config.

## Usage

The provided configuration contains shared ESLint rules for typescript projects across ChainSafe. To use this configuration you'll need `biome.json` or `biome.jsonc` file in your project root with the following content:

```json
{
  "extends": [
    "@chainsafe/biomejs-config",
    "@chainsafe/biomejs-config/recommended"
  ],
}

```

### NodeJs

```json
{
  "extends": [
    "@chainsafe/biomejs-config",
    "@chainsafe/biomejs-config/recommended",
    "@chainsafe/biomejs-config/nodejs"
  ],
}
```

### Esm Only

```json
{
  "extends": [
    "@chainsafe/biomejs-config",
    "@chainsafe/biomejs-config/recommended",
    "@chainsafe/biomejs-config/esm"
  ],
}
```


### Eraseable Syntax

```json
{
  "extends": [
    "@chainsafe/biomejs-config",
    "@chainsafe/biomejs-config/recommended",
    "@chainsafe/biomejs-config/eraseable-syntax"
  ],
}
```
