/*
 * create a dropdown which will use a click away listener hook that is used
 *  to close the dropdown when use click outside the dropdown */

import { useState, useRef } from 'react'
import { useClickAwayListener } from './useClickAwayListner'

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useClickAwayListener(ref, () => setIsOpen(false))

  return (
    <div className="dropdown">
      <button
        className="dropdown__button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Dropdown
      </button>
      {isOpen && (
        <div className="dropdown__content" ref={ref}>
          <p>Some dropdown content!</p>
        </div>
      )}
    </div>
  )
}