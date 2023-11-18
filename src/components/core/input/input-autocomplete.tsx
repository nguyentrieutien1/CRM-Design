import classNames from 'classnames'
import { AnimatePresence } from 'framer-motion'
import { AutoComplete, AutoCompleteProps } from 'primereact/autocomplete'
import React, {
	CSSProperties,
	useEffect,
	useImperativeHandle,
	useRef,
} from 'react'
import { useDebouncedValue } from 'rooks'
import styled from 'styled-components'
import { horizontalPadding, intToPadding } from 'libs/shared/utils/styled'
import { FadeInOut } from 'src/components/layout/fade-in-out'
import { FloatLabel } from 'src/components/layout/float-label'

type StyledAutocompleteProps = AutoCompleteProps & {
	onChangeDebounced?: (val: string) => void
	onEnter?: () => void
	isLoading?: boolean
	containerClassName?: string
	containerStyle?: CSSProperties
	inputGroupClassName?: string
	inputGroupStyle?: CSSProperties
	prependSearchIcon?: boolean
	appendSearchIcon?: boolean
	floatLabel?: string
	floatLabelWidth?: CSSProperties['width']
	isHiddenBorderIcon?: boolean
}

export type StyledAutocompleteRef = {
	className?: React.HtmlHTMLAttributes<'div'>['className']
	style?: CSSStyleDeclaration
	container: HTMLDivElement | null
	autocomplete: AutoComplete | null
	input: HTMLInputElement | null
}

export const StyledAutocomplete = React.forwardRef<
	StyledAutocompleteRef,
	StyledAutocompleteProps
>(
	(
		{
			onChangeDebounced,
			onEnter,
			isLoading = false,
			containerClassName,
			containerStyle,
			inputGroupClassName,
			inputGroupStyle,
			prependSearchIcon = false,
			appendSearchIcon = false,
			floatLabel,
			floatLabelWidth,
			isHiddenBorderIcon = false,
			...autocompleteProps
		},
		ref
	) => {
		const containerRef = useRef<HTMLDivElement | null>(null)
		const autocompleteRef = useRef<AutoComplete | null>(null)
		const inputRef = useRef<HTMLInputElement | null>(null)

		const [valueDebounced] = useDebouncedValue<string>(
			autocompleteProps?.value ?? '',
			autocompleteProps?.delay ?? 300
		)

		const onKeyPress = (e: React.KeyboardEvent<any>): void => {
			if (e.key === 'Enter') {
				if (onEnter) {
					onEnter()
				}
			}
		}

		useEffect(() => {
			if (typeof valueDebounced === 'string') {
				onChangeDebounced?.(valueDebounced)
			}
		}, [onChangeDebounced, valueDebounced])

		useImperativeHandle(ref, () => ({
			className: containerRef.current?.className,
			style: containerRef.current?.style,
			container: containerRef.current,
			autocomplete: autocompleteRef.current,
			input: inputRef.current,
		}))

		const wrapInInputGroup =
			prependSearchIcon || appendSearchIcon || typeof floatLabel === 'string'

		useEffect(() => {
			if (isLoading) return

			if (
				autocompleteProps?.showEmptyMessage ||
				(autocompleteProps?.suggestions?.length ?? 0) > 0
			) {
				const input = autocompleteRef.current?.getInput()
				if (
					document?.activeElement &&
					input &&
					document.activeElement === input
				) {
					autocompleteRef.current?.show()
				}
			}
		}, [
			autocompleteProps?.showEmptyMessage,
			autocompleteProps?.suggestions?.length,
			isLoading,
			valueDebounced,
		])

		const fields = (
			<>
				{prependSearchIcon && (
					<span className={`p-inputgroup-addon ${isHiddenBorderIcon && 'border-none surface-0'}`}>
						<i className="pi pi-search" />
					</span>
				)}

				<AutoComplete
					ref={(r) => (autocompleteRef.current = r)}
					onKeyPress={onKeyPress}
					{...autocompleteProps}
				/>

				{appendSearchIcon && (
					<span className="p-inputgroup-addon">
						<i className="pi pi-search" />
					</span>
				)}
			</>
		)

		return (
			<Container
				ref={containerRef}
				className={containerClassName}
				style={containerStyle}
			>
				{(wrapInInputGroup && (
					<div
						className={classNames('p-inputgroup', inputGroupClassName)}
						style={inputGroupStyle}
					>
						{(typeof floatLabel === 'string' && (
							<FloatLabel
								label={floatLabel}
								inputId={autocompleteProps.inputId}
								floatLabelWidth={floatLabelWidth}
							>
								{fields}
							</FloatLabel>
						)) ||
							fields}
					</div>
				)) || (
					<AutoComplete
						ref={(r) => (autocompleteRef.current = r)}
						inputRef={(r) => (inputRef.current = r)}
						onKeyPress={onKeyPress}
						{...autocompleteProps}
					/>
				)}

				<AnimatePresence>
					{isLoading && (
						<FadeLoaderInOut
							key="loader"
							$isSearchIconAppended={Boolean(appendSearchIcon)}
						>
						</FadeLoaderInOut>
					)}
				</AnimatePresence>
			</Container>
		)
	}
)

StyledAutocomplete.displayName = 'StyledAutocomplete'

const Container = styled.div`
	position: relative;

	& input {
		width: 100%;
	}
`

interface FadeInOutProps {
	$isSearchIconAppended: boolean
}

const FadeLoaderInOut = styled(FadeInOut)<FadeInOutProps>`
	position: absolute;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	right: ${({ $isSearchIconAppended }) =>
		intToPadding($isSearchIconAppended ? 12 : 0)};
	height: 100%;
	${horizontalPadding(1)};
`
