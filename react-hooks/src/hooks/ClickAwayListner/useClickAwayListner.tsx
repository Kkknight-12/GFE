import { useEffect, RefObject } from 'react'

export const useClickAwayListener = (
  ref: RefObject<HTMLElement>,
  callback: Function,
): void => {
  const handleClickAway = (event: MouseEvent): void => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickAway)
    return () => {
      document.removeEventListener('mousedown', handleClickAway)
    }
  }, [])
}

/*
 * ref.current: This is a reference to a specific HTML element that
 * you want to monitor for outside clicks. The current property gets
 * the current value of the ref.
 *
 * event.target: This represents the HTML element that was clicked.
 *
 * ref.current.contains(event.target as Node): This checks if the
 * clicked element (event.target) is a child of the monitored element
 * (ref.current). If it is, this means the click happened inside the
 * monitored element.
 *
 * !ref.current.contains(event.target as Node): The ! operator negates
 * the result. So, this will be true if the click happened outside the
 * monitored element.
 *
 * callback(): If the click event occurred outside the referenced
 * element, it calls the callback function. This callback function
 * is provided when the useClickAwayListener hook is used, and it
 * defines what action should be taken when an outside click is detected.
 *  */