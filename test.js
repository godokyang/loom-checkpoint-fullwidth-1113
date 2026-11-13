import test from 'ava';
import isFullwidthCodePoint, {hasFullwidth} from './index.js';

test('main', t => {
	t.true(isFullwidthCodePoint('あ'.codePointAt(0)));
	t.true(isFullwidthCodePoint('谢'.codePointAt(0)));
	t.true(isFullwidthCodePoint('고'.codePointAt(0)));
	t.false(isFullwidthCodePoint(Number.NaN));
	t.false(isFullwidthCodePoint('a'.codePointAt(0)));
	t.true(isFullwidthCodePoint(0x1_F2_51));
	t.true(isFullwidthCodePoint(0x1_B1_1E));
	t.false(isFullwidthCodePoint(0x20_1D));
});

test('hasFullwidth', t => {
	t.true(hasFullwidth('あ'));
	t.true(hasFullwidth('谢'));
	t.true(hasFullwidth('고'));
	t.true(hasFullwidth('abcあ'));
	t.true(hasFullwidth('𠀀'));
	t.false(hasFullwidth('abc'));
	t.false(hasFullwidth(''));
	t.false(hasFullwidth(undefined));
	t.false(hasFullwidth(123));
	t.false(hasFullwidth(null));
	t.false(hasFullwidth({}));
});

test('hasFullwidth - surrogate pairs', t => {
	// Lone half of a surrogate pair should not be detected as fullwidth.
	t.false(hasFullwidth('\uD840'));
	// 𠀀 is U+20000, a supplementary-plane character.
	t.true(hasFullwidth('\u{20000}'));
});
