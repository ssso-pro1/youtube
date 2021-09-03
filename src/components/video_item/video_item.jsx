import React from 'react';
import styles from './video_item.module.css';

//
const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  // li에서 onClick에 되면, onVideoClick에서 onClick이 되면 비디오 전달
  // 비디오 한번더 전달
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    // 아래의 ${displayType}은 list쓰거나 grid쓴다
    <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt='video thumbnail'
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};
//바로 리턴하는 게 아니라서 코드블럭 이용해야해서 {} 로 묶어줌, return 붙임
export default VideoItem;
