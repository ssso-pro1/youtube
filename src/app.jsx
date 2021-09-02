import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
// import Youtube from './service/youtube';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = query => {
    // const youtube = new Youtube(); (X)
    youtube
      .search(query) //
      // .then(console.log); 정상적으로 받아와지는 거 확인후 state업뎃
      .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
