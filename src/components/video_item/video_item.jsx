import React from 'react';
import styles from './video_item.module.css';

//props -> props안의 video를 바로 열어서 받아오고 싶을 때 -> 이름이 동일하면 props안의 video바로 할당됨
// video를 사용하는데, 이름을 videoItem으로 : ({ video: videoItem })
// video 안의 key인 snippet도 deconstructing 됨 -> 바로 snippet에 접근 가능

const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.container}>
    <div className={styles.video}>
      {/* <img src={props.video.snippet.thumbnails.medium.url} alt='video thumbnail' /> */}
      {/* <img src={video.snippet.thumbnails.medium.url} alt='video thumbnail' /> */}

      <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt='video thumbnail' />
      <div className={styles.metadata}>
        {/* <p>{props.video.snippet.title}</p>
      <p>{props.video.snippet.channelTItle}</p> */}
        {/* <p>{video.snippet.title}</p>
      <p>{video.snippet.channelTItle}</p> */}

        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </div>
  </li>
);
export default VideoItem;
