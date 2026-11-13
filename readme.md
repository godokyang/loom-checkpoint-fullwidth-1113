# is-fullwidth-code-point

> Check if the character represented by a given [Unicode code point](https://en.wikipedia.org/wiki/Code_point) is [fullwidth](https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms)

## Install

```sh
npm install is-fullwidth-code-point
```

## Usage

```js
import isFullwidthCodePoint, {hasFullwidth} from 'is-fullwidth-code-point';

isFullwidthCodePoint('谢'.codePointAt(0));
//=> true

isFullwidthCodePoint('a'.codePointAt(0));
//=> false
```

Or check whether a string contains at least one fullwidth character:

```js
import {hasFullwidth} from 'is-fullwidth-code-point';

hasFullwidth('あ');
//=> true

hasFullwidth('abc');
//=> false

hasFullwidth('');
//=> false
```

## API

### isFullwidthCodePoint(codePoint)

#### codePoint

Type: `number`

The [code point](https://en.wikipedia.org/wiki/Code_point) of a character.

### hasFullwidth(string)

Check if the given string contains at least one [fullwidth](https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms) character. Iterates over complete Unicode code points, so surrogate pairs (including supplementary-plane characters) are handled correctly. Returns `false` for an empty string or a non-string value.

#### string

Type: `string`

The string to check.

<!-- Loom checkpoint: external change observation -->
