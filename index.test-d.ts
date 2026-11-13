import {expectType} from 'tsd';
import isFullwidthCodePoint, {hasFullwidth} from './index.js';

expectType<boolean>(isFullwidthCodePoint('谢'.codePointAt(0)!));
expectType<boolean>(hasFullwidth('谢'));
