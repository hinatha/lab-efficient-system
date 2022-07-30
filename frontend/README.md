# Overview

Memo app

# Features

This app is able to use below function.

## User Story

- Add a note.
- See the list of notes.
- Delete notes.

# Using of language, framework, technology

- React
- TypeScript
- Create React App
- ESLint
- Prettier
- GitHub Actions
  
# Installation

```bash
$ git clone https://github.com/hinatha/React-memo-app.git
$ cd react-memo-app
$ npm install
```
 
# Usage
 
```bash
$ npm run start
```

# Test

## Linter

```bash
$ npm run lint
npm run lint

> react-memo-app@0.1.0 lint
> eslint --ext .jsx,.js,.tsx,.ts src/
```

## Formatter

```bash
$ npm run fmt
> react-memo-app@0.1.0 fmt
> prettier --write src/*

src/components/App.tsx 65ms
src/components/MemoList.tsx 21ms
src/hooks/useMemoList.ts 8ms
src/index.tsx 5ms
```

# Future plans
- Develop backend with Node.js.