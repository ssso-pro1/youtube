import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // (video)가 받아지면, (video가 선택되면) -> setSelectedVideo함수이용해서 video업뎃
  // 이 함수는 VideoList에 전달. 비디오가 클릭되면 얘를 불러
  const selectVideo = video => {
    setSelectedVideo(video);
  };

  const search = query => {
    youtube
      .search(query) //
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

      {/* 1 selected된 게 있을 때, 컴포넌트이용해서 비디오에 전달={선택된 비디오를}  */}
      {/* 즉, 선택된 비디오 있으면, VideoDetail에 비디오에 선택된 비디오를 전달. 해당 함수 호출. */}

      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
            {/* {selectedVideo && <VideoDetail video={selectedVideo} />} */}
            {/* selectedVIdeo가 있다면 div보여주고, 없다면 안 보이게 해야함. 조건문 지우고
          -> 2 VideoList에 어떻게 보여주는되는지 알려주기. 
          display라는 새로운 props 만들어서 전달  */}
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
