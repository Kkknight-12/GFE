import { useEffect, useRef, useState } from 'react'

export function useKeyPress({
  setTargetKey,
}: {
  setTargetKey: (key: string) => void
}) {
  const [isKeyPressed, setIsKeyPressed] = useState(false)
  const targetKey = useRef('') // Use a ref to store the current key

  function downHandler({ key }: KeyboardEvent) {
    setTargetKey(key)
    targetKey.current = key
    console.log('targetKey ', targetKey)
    if (key === targetKey.current) {
      setIsKeyPressed(true)
    }
    // Update the targetKey with the pressed key
  }

  const upHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey.current) {
      setIsKeyPressed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [targetKey, setTargetKey])

  return isKeyPressed
}