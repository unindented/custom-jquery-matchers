# jasmine-jquery-matchers [![Version](https://img.shields.io/npm/v/jasmine-jquery-matchers.svg)](https://www.npmjs.com/package/jasmine-jquery-matchers)


## Installation

Just run:

```sh
$ npm install --save-dev jasmine-jquery-matchers
```


## Usage

Load these matchers in a `beforeEach` block, and then use them like any other matcher:

```js
expect(this.$el).toHaveText('Hello world!');
```

### ES2015

If you are using the new module syntax, `import` all exported matchers:

```js
import * as matchers from 'jasmine-jquery-matchers';

describe('My suite', function () {
  beforeEach(function () {
    jasmine.addMatchers(matchers);
  });

  it('passes if the element has the specified class', function () {
    expect($('<div class="some-class"></div>')).toHaveClass('some-class');
  });
});
```

Note that `jasmine-jquery-matchers` does not have a default export!

### AMD/CommonJS

If you are using AMD or CommonJS, `require` normally:

```js
var matchers = require('jasmine-jquery-matchers');

describe('My suite', function () {
  beforeEach(function () {
    jasmine.addMatchers(matchers);
  });

  it('passes if the element has the specified class', function () {
    expect($('<div class="some-class"></div>')).toHaveClass('some-class');
  });
});
```

### Global

Otherwise, use `window['jasmine-jquery-matchers']`:

```js
var matchers = window['jasmine-jquery-matchers'];

describe('My suite', function () {
  beforeEach(function () {
    jasmine.addMatchers(matchers);
  });

  it('passes if the element has the specified class', function () {
    expect($('<div class="some-class"></div>')).toHaveClass('some-class');
  });
});
```
