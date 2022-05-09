import styled from 'styled-components'
import Link from 'next/link'

const Custom404Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 250px;
  text-align: center;
`

export default function Custom404() {
  return (
    <Custom404Wrap>
      <h1>404 - Page Not Found</h1>
      <h3>页面没有找到,你可以进入了一个不存在的页面</h3>
      <Link href="/">
        <a>返回主页</a>
      </Link>
    </Custom404Wrap>
  )
}
