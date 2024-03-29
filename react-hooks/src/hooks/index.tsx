// import { useState, useEffect } from 'react'
//
// function useScrollPosition() {
//   const [scrollPosition, setScrollPosition] = useState(window.pageYOffset)
//
//   useEffect(() => {
//     const handleScroll = () => setScrollPosition(window.pageYOffset)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])
//
//   return scrollPosition
// }
//
// function useWindowSize() {
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   })
//
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       })
//     }
//
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])
//
//   return windowSize
// }
//
// function useKeyPress(targetKey: string) {
//   const [keyPressed, setKeyPressed] = useState(false)
//
//   function downHandler({ key }: KeyboardEvent) {
//     if (key === targetKey) {
//       setKeyPressed(true)
//     }
//   }
//
//   const upHandler = ({ key }: KeyboardEvent) => {
//     if (key === targetKey) {
//       setKeyPressed(false)
//     }
//   }
//
//   useEffect(() => {
//     window.addEventListener('keydown', downHandler)
//     window.addEventListener('keyup', upHandler)
//     return () => {
//       window.removeEventListener('keydown', downHandler)
//       window.removeEventListener('keyup', upHandler)
//     }
//   }, [])
//
//   return keyPressed
// }