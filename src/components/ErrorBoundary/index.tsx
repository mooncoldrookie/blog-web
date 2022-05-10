import React from 'react'

import styles from './styles.module.scss'

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<
  {},
  ErrorBoundaryState
> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // 可以将错误日志上报给服务器
    console.log(error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <div className={styles.errorWrap}>抱歉,程序崩溃了!</div>
    }

    return children
  }
}
