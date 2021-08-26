import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [videos, setVideos] = useState([]);

  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${API_KEY}`,
      requestOptions
    )
      .then(response => response.json())
      //result의 items를 돌면서 , 기존의 아이템을 다르게 만듦
      // 아이템을 하나씩 복사하고, 그 위에 id덮어줌
      // 기존 : item - id 라는 오브젝트 안에 videoId 였는데
      // 오브젝트 대신 id primitive 타입으로 바꿈
      .then(result => result.items.map(item => ({ ...item, id: item.id.videoId })))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`,

      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
