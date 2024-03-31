import React, { ReactNode } from 'react'
import './styles.css'

type ButtonProps = {
  children: ReactNode
  props: {}
}
const Button = ({ children, ...props }: ButtonProps) => (
  <button {...props}>{children}</button>
)

const withSomethingBroken = (Component: React.ComponentType<any>) => {
  // forgot to pass props!
  return (props) => <Component />
}

const withSomethingNormal = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    console.log('props', props)
    return <Component {...props} />
  }
}

const ButtonWithSomethingBroken = withSomethingBroken(Button)
const ButtonWithSomethingNormal = withSomethingNormal(Button)

export default function HOCComponent() {
  return (
    <div className="App">
      <h3>Broken button - forgot to pass props in higher-order component</h3>
      <ButtonWithSomethingBroken onClick={() => console.log('log click')}>
        Broken button
      </ButtonWithSomethingBroken>
      <h3>Fixed button</h3>
      <ButtonWithSomethingNormal onClick={() => console.log('log click')}>
        Fixed button
      </ButtonWithSomethingNormal>
    </div>
  )
}