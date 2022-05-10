import styled from 'styled-components'
import Modal from '@mui/material/Modal'

interface ModalProps {
  isDesktop: boolean
}

export const SearchButtonWrap = styled.div`
  .MuiIconButton-root {
    color: ${(p) => p.theme.colors.text};
  }
`
export const ModalWrap = styled(Modal)`
  backdrop-filter: blur(4px);
`

export const ModalMain = styled.div<ModalProps>`
  width: 100%;
  max-width: ${(p) => (p.isDesktop ? '700px' : 'unset')};
  height: ${(p) => (p.isDesktop ? '600px' : '100%')};
  margin: ${(p) => (p.isDesktop ? '60px auto auto' : 'unset')};
  background-color: ${(p) => p.theme.colors.background};
  border-radius: clamp(0px, (100vw - 768px) * 9999, 10px);
`

export const ModalHeader = styled.div<ModalProps>`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid ${(p) => p.theme.colors.cardBorder};
  color: ${(p) => p.theme.colors.text};

  .search-form {
    display: flex;
    align-items: center;
    height: 56px;
    width: 100%;
    position: relative;
    color: inherit;
  }

  .search-icon {
    color: inherit;
    margin: 0 8px;
  }

  .search-input {
    color: inherit;
    font-size: 1.2em;
    flex: 1;
  }

  .search-cancel {
    flex: none;
    margin-left: 12px;
    color: inherit;
    appearance: none;
    background: none;
    padding: 4px 10px;
    user-select: none;
    cursor: pointer;
    border-radius: 6px;
  }
`

export const ModalDropDown = styled.div<ModalProps>`
  min-height: 384px;
  //桌面端设置滚动窗口大小 移动端为全屏
  max-height: ${(p) => (p.isDesktop ? 'calc(600px - 100px)' : 'calc(100vh - 73px)')};
  overflow-y: auto;
  padding: 0 12px;
  color: ${(p) => p.theme.colors.text};
  display: flex;

  &::-webkit-scrollbar {
    width: 5px;
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块样式*/
    border-radius: 100px;
    -webkit-box-shadow: inset 0 0 5px rgba(151, 151, 151, 0.2);
    background: rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道样式*/
    -webkit-box-shadow: inset 0 0 5px rgba(223, 223, 223, 0.2);
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.1);
  }

  .spinner {
    margin: auto;
  }

  .search-no-result {
    margin: 0 auto;
    padding: 36px 0;
    text-align: center;
    width: 80%;
    font-size: 0.9em;
  }

  .search-result {
    padding: 8px 0;
    width: 100%;
  }

  .list-item {
    margin-top: 4px;
    border: 2px solid transparent;
    font-size: 18px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      border-color: ${({ theme }) => theme.colors.second};
    }
  }
`
