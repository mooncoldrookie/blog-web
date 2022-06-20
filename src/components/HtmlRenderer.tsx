import React, { useEffect } from 'react'

import hljs from 'highlight.js'
import { useAppSelector } from '@/app/hooks'
import { selectTheme } from '@/layout/AppLayoutSlice'

function HtmlRenderer({ html }) {
  const theme = useAppSelector(selectTheme)

  useEffect(() => {
    hljs.configure({
      // 忽略未经转义的 HTML 字符
      ignoreUnescapedHTML: true,
    })

    if (theme === 'dark') {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
    }

    const codes = document.querySelectorAll('.dg-html pre code')
    codes.forEach((el) => {
      // 让code进行高亮
      hljs.highlightElement(el as HTMLElement)
    })
  }, [html, theme])

  return <div className="dg-html" dangerouslySetInnerHTML={{ __html: html }}></div>
}

export default HtmlRenderer
