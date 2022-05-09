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
    width: 80%;
    font-size: 1.2em;
  }

  .search-cancel {
    color: inherit;
    appearance: none;
    background: none;
    border: 0;
    flex-shrink: 0;
    padding: 4px 8px;
    user-select: none;
  }
`
export const ModalDropDown = styled.div<ModalProps>`
  min-height: 384px;
  max-height: calc(600px - 73px);
  overflow-y: auto;
  padding: 0 12px;
  color: ${(p) => p.theme.colors.text};

  .search-no-result {
    margin: 0 auto;
    padding: 36px 0;
    text-align: center;
    width: 80%;
    font-size: 0.9em;
  }

  .search-result {
    padding: 8px 0;
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
