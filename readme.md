# decode-uri-component-charset [![Build Status](https://travis-ci.org/gtgalone/decode-uri-component-charset.svg?branch=master)](https://travis-ci.org/gtgalone/decode-uri-component-charset)

Decode URI Component with Charset such as 'euc-kr' without tears.

- Typescript support
- Tiny package size

## Install
```
$ npm install decode-uri-component-charset
or
$ yarn add decode-uri-component-charset
```

## Usage

### Basic
```jsx
import { decodeURIComponentCharset } from 'decode-uri-component-charset';
// or const { decodeURIComponentCharset } = require('decode-uri-component-charset');

const euckr = '%C5%D7%BD%BA%C6%AE';
// '테스트' < This word.
// Encoded URI with UTF-8 '%ED%85%8C%EC%8A%A4%ED%8A%B8'
// Encoded URI with EUC-KR '%C5%D7%BD%BA%C6%AE'

decodeURIComponent(euckr);
// Uncaught URIError: URI malformed

const result = decodeURIComponentCharset(euckr, 'euc-kr');

console.log(result);
 // '테스트'
```
---
## Input

### EncodedURI String
Type: `String`

### Charset
Charset string based on [iconv-lite](https://github.com/ashtuchkin/iconv-lite/wiki/Supported-Encodings).\
Type: `String`

## Output
### DecodedURI String
Type: `String`

## Recommend Libraries

- [React Checklist](https://github.com/gtgalone/react-checklist) - Make Checkbox List Easy and Simple with React Hooks.
- [React Store](https://github.com/gtgalone/react-store) - React Hook Store with useContext and useReducer for State Management.
- [React Quilljs](https://github.com/gtgalone/react-quilljs) - React Hook Wrapper for Quill(Rich Text Editor).

## Maintainer

- [Jehun Seem](https://github.com/gtgalone)

## License

MIT
