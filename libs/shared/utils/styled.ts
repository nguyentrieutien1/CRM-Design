import Decimal from 'decimal.js-light'

export function intToPx(num: number | string): string {
	if (typeof num === 'string') return num
	if (isNaN(num)) return '0px'
	return num + 'px'
}

export function intToPadding(num: number | string): string {
	if (typeof num === 'string') return num
	if (isNaN(num)) return '0rem'
	return num / 4 + 'rem'
}

export function expandRemValue(
	value: string,
	expandBy: number,
	toSubstract = false
): string {
	try {
		const num = new Decimal(value.replace('rem', ''))
		const newNum = toSubstract ? num.sub(expandBy) : num.add(expandBy)
		return newNum.toFixed(3) + 'rem'
	} catch (error) {
		return value
	}
}

export function verticalPadding(num: number | string) {
	return `
	  padding-top: ${typeof num === 'string' ? num : intToPadding(num)};
		padding-bottom: ${typeof num === 'string' ? num : intToPadding(num)};
	`
}

export function horizontalPadding(num: number | string) {
	return `
	  padding-left: ${typeof num === 'string' ? num : intToPadding(num)};
		padding-right: ${typeof num === 'string' ? num : intToPadding(num)};
	`
}
