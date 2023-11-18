import React from 'react'
import styled, { CSSProperties } from 'styled-components'

type TableTextProps = React.PropsWithChildren<{
	isBold?: boolean
	isSemiBold?: boolean
	isGray?: boolean
	isRed?: boolean
	isGreen?: boolean
	textAlign?: CSSProperties['textAlign']
	fontSize?: CSSProperties['fontSize']
	fontWeight?: CSSProperties['fontWeight']
	whiteSpace?: CSSProperties['whiteSpace']
	color?: CSSProperties['color']
}>

export const TableText = React.forwardRef<HTMLParagraphElement, TableTextProps>(
	(
		{
			isBold = false,
			isSemiBold = false,
			isGray = false,
			isRed = false,
			isGreen = false,
			textAlign = 'left',
			whiteSpace = 'normal',
			fontSize,
			fontWeight,
			children,
			color,
		},
		ref
	) => {
		return (
			<Text
				ref={ref}
				$isBold={isBold}
				$isSemiBold={isSemiBold}
				$isGray={isGray}
				$textAlign={textAlign}
				$fontSize={fontSize}
				$whiteSpace={whiteSpace}
				$isRed={isRed}
				$isGreen={isGreen}
				$fontWeight={fontWeight}
				$color={color}
			>
				{children}
			</Text>
		)
	}
)

TableText.displayName = 'TableText'

interface TextProps {
	$isBold?: boolean
	$isSemiBold?: boolean
	$isGray?: boolean
	$isRed?: boolean
	$isGreen?: boolean
	$textAlign?: CSSProperties['textAlign']
	$fontSize?: CSSProperties['fontSize']
	$whiteSpace: CSSProperties['whiteSpace']
	$fontWeight: CSSProperties['fontWeight']
	$color?: CSSProperties['color']
}

const Text = styled.p<TextProps>`
	font-family: var(--font-family);
	font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : '0.875rem')};
	font-weight: ${({ $isBold, $fontWeight }) =>
		$fontWeight ? $fontWeight : $isBold ? 600 : 400};
	text-align: ${({ $textAlign }) => $textAlign};
	white-space: ${({ $whiteSpace }) => $whiteSpace};
	color: ${({ $isGray, $isRed, $isGreen, $color }) =>
		$color
			? $color
			: $isGray
			? 'var(--gray-500)'
			: $isRed
			? 'var(--red-500)'
			: $isGreen
			? 'var(--green-500)'
			: 'var(--gray-900)'};
`
