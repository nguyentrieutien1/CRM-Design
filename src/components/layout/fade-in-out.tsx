import React, { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

type FadeInOutProps = React.PropsWithChildren<{
	show?: boolean
	skipInitial?: boolean
	hideInPrint?: boolean
	className?: string
	style?: CSSProperties
}>

export const FadeInOut = React.forwardRef<HTMLDivElement, FadeInOutProps>(
	(
		{
			show = true,
			skipInitial = false,
			hideInPrint = false,
			className,
			style,
			children,
		},
		ref
	) => {
		return (
			<Container
				ref={ref}
				className={className}
				style={style}
				$hideInPrint={hideInPrint}
				initial={
					skipInitial
						? false
						: {
								opacity: 0,
								pointerEvents: 'none',
						  }
				}
				animate={{
					opacity: show ? 1 : 0,
					pointerEvents: show ? 'auto' : 'none',
				}}
				exit={{
					opacity: 0,
					pointerEvents: 'none',
				}}
			>
				{children}
			</Container>
		)
	}
)

FadeInOut.displayName = 'FadeInOut'

interface ContainerProps {
	$hideInPrint: boolean
}

const Container = styled(motion.div)<ContainerProps>`
	@media print {
		${({ $hideInPrint }) =>
			$hideInPrint &&
			`
				visibility: hidden;
			`}
	}
`
