/*
 * a hook that will show the get the width of the window and return
 * isMobile or isTablet
 * range for mobile is if screen width is less than 600px
 * range for tablet is width range is 768 to 1024
 * and range for height is 1024 to 1368 */

import { useState, useEffect } from 'react'

// Hook 1
export const useMediaQuerie = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
      if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        setIsTablet(true)
      } else {
        setIsTablet(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { isMobile, isTablet }
}

// create one more hook but this time use window.matchMedia

// Hook 2
export const useMediaQuerieMatch = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)')
    const tabletQuery = window.matchMedia(
      '(min-width: 768px) and (max-width: 1024px)',
    )

    const checkDevice = () => {
      setIsMobile(mobileQuery.matches)
      setIsTablet(tabletQuery.matches)
    }

    mobileQuery.addEventListener('change', checkDevice)
    tabletQuery.addEventListener('change', checkDevice)

    // Initial check
    checkDevice()

    return () => {
      mobileQuery.removeEventListener('change', checkDevice)
      tabletQuery.removeEventListener('change', checkDevice)
    }
  }, [])

  return { isMobile, isTablet }
}

/*
 * Both hooks useMediaQuerie and useMediaQuerieMatch serve the same purpose of
 * determining whether the device is a mobile or a tablet based on the screen width.
 * However, they use different methods to achieve this.
 *
 * The useMediaQuerie hook uses the window.innerWidth property to get the viewport
 * width and then uses conditional statements to set the state of isMobile and
 * isTablet.
 *
 * The useMediaQuerieMatch hook, on the other hand, uses the window.matchMedia method,
 * which returns a MediaQueryList object representing the results of the specified CSS
 * media query string. This method is more powerful as it allows for more complex queries
 * including queries based on device height, which is used in this hook.  In terms of
 * performance, both hooks should have similar performance as both are using event
 * listeners to update the state when the window is resized.  So, the choice between the
 * two hooks depends on your specific needs. If you only need to check the width of the
 * device, useMediaQuerie should be sufficient. However, if you need to make more complex
 * queries, such as checking both the width and height of the device, useMediaQuerieMatch
 *  would be the better choice.
 *  */