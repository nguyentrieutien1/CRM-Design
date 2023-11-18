import classNames from 'classnames'
import React, { CSSProperties } from 'react'
import styled from 'styled-components'

type FloatLabelProps = React.PropsWithChildren<{
	inputId?: string
	label: string
	className?: string
	isHidden?: boolean
	forceFloat?: boolean
	floatLabelWidth?: CSSProperties['width']
}>

export const FloatLabel = React.forwardRef<HTMLSpanElement, FloatLabelProps>(
	(
		{
			inputId,
			label,
			className,
			isHidden = false,
			forceFloat = false,
			floatLabelWidth,
			children,
		},
		ref
	) => {
		return (
			<Container
				ref={ref}
				className={classNames(
					'p-float-label',
					{
						'p-float-label-forced': forceFloat,
					},
					className
				)}
			>
				{children}

			</Container>
		)
	}
)

FloatLabel.displayName = 'FloatLabel'

const Container = styled.span`
	& > span {
		max-width: 100%;

		& > input,
		& > textarea {
			max-width: 100%;
		}
	}
`

interface LabelProps {
	$hide: boolean
	$width?: CSSProperties['width']
}

