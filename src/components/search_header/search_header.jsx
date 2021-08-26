import styles from './search_header.module.css';
import React, { useRef } from 'react';

const SearchHeader = ({ onSearch }) => {
  // 리액트 훅에서는 useRef 를 사용해야 계속 메모가 된다
  const inputRef = useRef();

  // handleSearch : 검색
  const handleSearch = () => {
    const value = inputRef.current.value;
    //onsole.log(value); //input입력하고 search시 값 가져오는지 확인하고 진행!
    onSearch(value);
  };

  const onClick = () => {
    // console.log('onClick');
    handleSearch();
  };

  const onKeyPress = event => {
    // console.log('onKeyPress');
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src='/images/logo.png' alt='logo' />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type='search'
        placeholder='Search...'
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type='submit' onClick={onClick}>
        <img className={styles.buttonImg} src='/images/search.png' alt='search' />
      </button>
    </header>
  );
};

export default SearchHeader;
