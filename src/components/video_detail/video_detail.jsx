import React from 'react';
import styles from './video_detail.module.css';

// ({props -> 선택된 video로 받아옴})
const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type='text/html'
      width='100%'
      height='500px'
      //   postman search url 만들어야함
      // iframe url embed/뒤에 붙임
      //   src='https://www.youtube.com/embed/M7lc1UVf-VE'
      src={`https://www.youtube.com/embed/${video.id}`}
      frameborder='0'
      allowfullscreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.channelTitle}</h3>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

// <h1>{video.snippet.title}</h1>;
// 코드가 없기 떄문에 바로 return 되도록 ()

export default VideoDetail;
