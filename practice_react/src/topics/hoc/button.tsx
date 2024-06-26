import { ReactNode } from 'react'
import {
  withLoggingOnClick,
  withLoggingOnClickWithParams,
  withLoggingOnClickWithProps,
} from './1-with-logging-on-click'

type ButtonProps = { children: ReactNode; onClick: () => void }

// const buttonCss = css`
//   padding: 8px 12px;
//   background: #0f85fa;
//   border-radius: 2px;
//   border: 1px solid #0352a0;
//   cursor: pointer;
//
//   &:hover {
//     background: #0352a0;
//   }
// `;

export const SimpleButton = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>
}

export const ButtonWithLoggingOnClick = withLoggingOnClick(SimpleButton)

export const ButtonWithLoggingOnClickWithParams = withLoggingOnClickWithParams(
  SimpleButton,
  { text: 'button component' },
)

export const ButtonWithLoggingOnClickWithProps =
  withLoggingOnClickWithProps(SimpleButton)

// export const ButtonWithLoggingOnMount = withLoggingOnMount(SimpleButton)
//
// export const ButtonWithLoggingOnMountWithParams = withLoggingOnMountWithParams(
//   SimpleButton,
//   { text: 'button component' },
// )
//
// export const ButtonWithLoggingOnMountWithProps =
//   withLoggingOnMountWithProps(SimpleButton)
//
// export const SuperButton = withLoggingOnClick(
//   withLoggingOnClickWithParams(
//     withLoggingOnClickWithProps(
//       withLoggingOnMount(
//         withLoggingOnMountWithParams(
//           withLoggingOnMountWithProps(SimpleButton),
//           { text: 'button component' },
//         ),
//       ),
//     ),
//     { text: 'button component' },
//   ),
// )