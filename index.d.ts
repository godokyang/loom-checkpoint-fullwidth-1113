/**
Check if the character represented by a given [Unicode code point](https://en.wikipedia.org/wiki/Code_point) is [fullwidth](https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms).

@param codePoint - The [code point](https://en.wikipedia.org/wiki/Code_point) of a character.

@example
```
import isFullwidthCodePoint from 'is-fullwidth-code-point';

isFullwidthCodePoint('谢'.codePointAt(0));
//=> true

isFullwidthCodePoint('a'.codePointAt(0));
//=> false
```
*/
export default function isFullwidthCodePoint(codePoint: number): boolean;

/**
Check if the given string contains at least one [fullwidth](https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms) character.

@param string - The string to check.

@example
```
import {hasFullwidth} from 'is-fullwidth-code-point';

hasFullwidth('あ');
//=> true

hasFullwidth('abc');
//=> false

hasFullwidth('');
//=> false
```
*/
export function hasFullwidth(string: string): boolean;
