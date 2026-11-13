import {
	_isFullWidth as isFullWidth,
	_isWide as isWide,
} from 'get-east-asian-width';

export default function isFullwidthCodePoint(codePoint) {
	if (!Number.isInteger(codePoint)) {
		return false;
	}

	return isFullWidth(codePoint) || isWide(codePoint);
}

export function hasFullwidth(string) {
	if (typeof string !== 'string') {
		return false;
	}

	for (const character of string) {
		if (isFullWidth(character.codePointAt(0)) || isWide(character.codePointAt(0))) {
			return true;
		}
	}

	return false;
}
