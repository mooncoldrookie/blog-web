import IconButton from "@mui/material/IconButton";
import React, { useCallback, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import InfoIcon from "@mui/icons-material/Info";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import debounce from "lodash/debounce";
import { useRouter } from "next/router";

import { searchPostsByTitle } from "@/api/blog";
import { filterSearchInput } from "@/utils";
import { useAppSelector } from "@/app/hooks";
import { selectIsDesktop } from "@/layout/AppLayoutSlice";

import { ModalDropDown, ModalHeader, ModalMain, ModalWrap, SearchButtonWrap, } from "./styled";

function SearchButton() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [queryValue, setQueryValue] = useState("");
  const isDesktop = useAppSelector(selectIsDesktop);
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInputValue("");
  };

  const debouncedSetQueryValue = useCallback(debounce(setQueryValue, 300), []);
  const handleInput = (event) => {
    setInputValue(event.target.value);
    debouncedSetQueryValue(event.target.value);
  };

  const handleSearch = useCallback(async () => {
    if (!filterSearchInput(queryValue)) {
      return;
    }
    const res: any = await searchPostsByTitle({
      title: queryValue
    });
    if (res.code === 0) {
      const { list, total } = res.data;
      setPosts(list);
      setTotal(total);
    }
  }, [queryValue]);

  const handleSelect = (id) => {
    router.push(`/post/${ id }`);
    handleClose();
  };

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  useEffect(() => {
    if (!inputValue) {
      setPosts([]);
    }
  }, [inputValue]);

  return (
    <SearchButtonWrap>
      <IconButton aria-label="搜索" onClick={ handleOpen }>
        <SearchIcon/>
      </IconButton>
      <ModalWrap open={ open } onClose={ handleClose }>
        <ModalMain isDesktop={ isDesktop }>
          <ModalHeader isDesktop={ isDesktop }>
            <form className="search-form">
              <SearchIcon className="search-icon"/>
              <InputBase
                className="search-input"
                autoFocus
                placeholder="请输入标题..."
                value={ inputValue }
                onChange={ handleInput }
              />
            </form>
            <button className="search-cancel" onClick={ handleClose }>
              取消
            </button>
          </ModalHeader>
          <ModalDropDown isDesktop={ isDesktop }>
            { total > 0 ? (
              <div className="search-result">
                <List>
                  { posts.map((item) => (
                    <ListItem
                      className="list-item"
                      key={ item.id }
                      onClick={ () => handleSelect(item.id) }
                    >
                      { item.title }
                    </ListItem>
                  )) }
                </List>
              </div>
            ) : (
              <div className="search-no-result">
                <InfoIcon/>
                <div>暂无搜索内容</div>
              </div>
            ) }
          </ModalDropDown>
        </ModalMain>
      </ModalWrap>
    </SearchButtonWrap>
  );
}

export default SearchButton;
