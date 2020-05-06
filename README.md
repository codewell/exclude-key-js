# @codewell/exclude-keys

Exclude keys from JavaScript objects.

## Installation

```
npm install @codewell/exclude-keys
```

## Basic Usage

```JavaScript
import excludeKeys from '@codewell/exclude-keys';

const object = { one: 1, two: 2, three: 3 };

// Exclude several keys

excludeKeys(object, 'one');
// => { two: 2, three: 3 }

excludeKeys(object, 'one', 'two');
// => { three: 3 }

excludeKeys(object, 'one', 'three');
// => { two: 2 }

excludeKeys(object, 'one', 'two', 'three');
// => {}

excludeKeys(object, 'two');
// => { one: 1, three: 3 }

excludeKeys(object, 'two', 'three');
// => { one: 1 }

excludeKeys(object, 'three');
// => { one: 1, two: 2 }
```

## Contribution

Please help by submitting issues and pull requests here on github
Read more on [codewell's webpage](https://codewell.github.io/contribution)
