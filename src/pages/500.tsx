import styled from 'styled-components'
import Link from 'next/link'

const Custom500Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 250px;
  text-align: center;
`

export default function Custom500() {
  return (
    <Custom500Wrap>
      <h1>服务器异常</h1>
      <Link href="/">
        <a>返回主页</a>
      </Link>
    </Custom500Wrap>
  )
}
