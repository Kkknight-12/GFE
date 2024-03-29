import { useState } from 'react'
import { useKeyPress } from './useKeyPress'

const KeyPressComponent = () => {
  const [key, setKey] = useState('')
  const keyIsPressed = useKeyPress({ setTargetKey: setKey })

  return (
    <div>
      {keyIsPressed ? (
        <p>You pressed the {key} key </p>
      ) : (
        <p>Press the Enter key</p>
      )}
    </div>
  )
}

export default KeyPressComponent