# jest-jquery-matchers [![Version](https://img.shields.io/npm/v/jest-jquery-matchers.svg)](https://www.npmjs.com/package/jest-jquery-matchers)


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
