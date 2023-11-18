import {InputSwitch, InputSwitchProps} from "primereact/inputswitch"
import React from "react"
import styled from "styled-components"

type StyledInputSwitchProps = Omit<InputSwitchProps, 'ref'> & {
    backgroundColor?: string
}
export const StyledInputSwitch = React.forwardRef<HTMLInputElement, StyledInputSwitchProps>(({backgroundColor, ...props}) => {
    return <Field  {...props} />
})
StyledInputSwitch.displayName = 'StyledInputSwitch'
const Field = styled(InputSwitch)`

`