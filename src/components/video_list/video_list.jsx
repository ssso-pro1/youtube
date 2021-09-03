import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

// app 에서 onVideoClick 받아옴
// onVideoClick은 VideoItem이 선택이 되면 여기서 처리됨
// 그래서 onVideoClick 을 한단계 더 전달
const VideoList = ({ videos, onVideoClick, display }) => (
  <ul className={styles.videos}>
    {videos.map(video => (
      // VideoItem에 한단계 더 전달
      <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display} />
    ))}
  </ul>
);

export default VideoList;
