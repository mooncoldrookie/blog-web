import IconButton from '@mui/material/IconButton'
import React, { useCallback, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import InfoIcon from '@mui/icons-material/Info'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { useRouter } from 'next/router'
import { Oval } from 'react-loader-spinner'

import { searchPosts } from '@/api/post'
import { useAppSelector } from '@/app/hooks'
import { selectIsDesktop } from '@/layout/AppLayoutSlice'

import { ModalDropDown, ModalHeader, ModalMain, ModalWrap, SearchButtonWrap } from './styled'
import { debounce } from 'lodash'

function useSearchPosts() {
  // 关键字
  const [keyword, setKeyword] = useState('')

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  async function search() {
    if (!keyword) return
    try {
      setLoading(true)
      const result = await searchPosts(keyword)
      if (result.success) {
        setPosts(result.data)
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    keyword,
    setKeyword,
    posts,
    setPosts,
    search,
  }
}

function SearchDialog() {
  const router = useRouter()
  const { loading, keyword, setKeyword, posts, setPosts, search } = useSearchPosts()
  // 搜索界面打开状态
  const [open, setOpen] = useState(false)
  const isDesktop = useAppSelector(selectIsDesktop)
  const [inputValue, setInputValue] = useState('')

  const onClose = () => {
    setOpen(false)
    setInputValue('')
  }

  const debounceSetKeyword = useCallback(
    debounce((val) => setKeyword(val), 300),
    []
  )

  const onInput = (e) => {
    const val = e.target.value
    setInputValue(val)
    if (!val) setPosts([])
    debounceSetKeyword(val)
  }
  const onClickItem = (id) => {
    router.push(`/post/${id}`)
    onClose()
  }

  useEffect(() => {
    search()
  }, [keyword])

  return (
    <SearchButtonWrap>
      <IconButton aria-label="搜索" onClick={() => setOpen(true)}>
        <SearchIcon />
      </IconButton>
      <ModalWrap open={open} onClose={onClose}>
        <ModalMain isDesktop={isDesktop}>
          <ModalHeader isDesktop={isDesktop}>
            <form className="search-form">
              <SearchIcon className="search-icon" />
              <InputBase
                className="search-input"
                autoFocus
                placeholder="搜索文章..."
                value={inputValue}
                onChange={(e) => onInput(e)}
              />
            </form>
            <button className="search-cancel" onClick={() => onClose()}>
              取消
            </button>
          </ModalHeader>
          <ModalDropDown isDesktop={isDesktop}>
            {loading ? (
              <span className="spinner">
                <Oval width={36} height={36} />
              </span>
            ) : posts.length > 0 ? (
              <div className="search-result">
                <List>
                  {posts.map((item) => (
                    <ListItem
                      className="list-item"
                      key={item.id}
                      onClick={() => onClickItem(item.id)}
                    >
                      {item.title}
                    </ListItem>
                  ))}
                </List>
              </div>
            ) : (
              <div className="search-no-result">
                <InfoIcon />
                <div>无搜索内容</div>
              </div>
            )}
          </ModalDropDown>
        </ModalMain>
      </ModalWrap>
    </SearchButtonWrap>
  )
}

export default SearchDialog
