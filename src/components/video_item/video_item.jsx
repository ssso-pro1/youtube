import React from 'react';

const VideoItem = props => <h1>{props.video.snippet.title}</h1>;
//props.video.title -> 개발도구 component들어가서 값 확인하면서 하기!
export default VideoItem;
