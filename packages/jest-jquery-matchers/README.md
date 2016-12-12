# jest-jquery-matchers [![Version](https://img.shields.io/npm/v/jest-jquery-matchers.svg)](https://www.npmjs.com/package/jest-jquery-matchers)


## List of matchers

* toExist
* toHaveLength
* toHaveId
* toHaveClass
* toHaveTag
* toHaveAttr
* toHaveProp
* toHaveText
* toHaveData
* toHaveValue
* toHaveCss
* toBeChecked
* toBeDisabled
* toBeEmpty
* toBeHidden
* toBeSelected
* toBeVisible
* toBeFocused
* toBeInDom
* toBeMatchedBy
* toHaveDescendant
* toHaveDescendantWithText


## Installation

Just run:

```sh
$ npm install --save-dev jest-jquery-matchers
```


## Usage

Load these matchers in a `beforeEach` block, and then use them like any other matcher:

```js
expect(this.$el).toHaveText('Hello world!');
```

### TypeScript

This package includes the necessary declarations for TypeScript. Just make sure they get loaded in your project, for example by adding the package name to the `types` field in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "types": [
      "jest",
      "jest-jquery-matchers"
    ]
  }
}
```

Then just load the matchers at runtime in your tests:

```js
import * as matchers from 'jest-jquery-matchers';

describe('My suite', function () {
  beforeEach(function () {
    jest.addMatchers(matchers);
  });

  it('passes if the element has the specified class', function () {
    expect($('<div class="some-class"></div>')).toHaveClass('some-class');
  });
});
```

### ES2015

If you are using the new module syntax, `import` all exported matchers:

```js
import * as matchers from 'jest-jquery-matchers';

describe('My suite', function () {
  beforeEach(function () {
    jest.addMatchers(matchers);
  });

  it('passes if the element has the specified class', function () {
    expect($('<div class="some-class"></div>')).toHaveClass('some-class');
  });
});
```

Note that `jest-jquery-matchers` does not have a default export!

### AMD/CommonJS

If you are using AMD or CommonJS, `require` normally:

```js
var matchers = require('jest-jquery-matchers');

describe('My suite', function () {
  beforeEach(function () {
    jest.addMatchers(matchers);
  });

  it('passes if the element has the specified class', function () {
    expect($('<div class="some-class"></div>')).toHaveClass('some-class');
  });
});
```

### Global

Otherwise, use `window['jest-jquery-matchers']`:

```js
var matchers = window['jest-jquery-matchers'];

describe('My suite', function () {
  beforeEach(function () {
    jest.addMatchers(matchers);
  });

  it('passes if the element has the specified class', function () {
    expect($('<div class="some-class"></div>')).toHaveClass('some-class');
  });
});
```
