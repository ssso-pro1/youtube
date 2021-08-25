import React, { useState, useEffect } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  // useState라는 api이용해서 videos라는 변수에 데이터 저장.
  // videos를 업데이트할 수 있는 setVideos선언, useState호출하면 : 각각의 변수와 업뎃할 수 있는 함수가 할당됨

  const API_KEY = process.env.REACT_APP_API_KEY;

  const [videos, setVideos] = useState([]); //초기값 : 텅텅비어진 videos의 목록

  /*
  useEffect : 마운트되거나 데이터 받아와 마운트되거나 업뎃 시 콜백함수 등록할 수 있는 것
  원하는 함수 등록해두면 컴포넌트가 마운트되거나 업뎃시마다 호출됨
  컴포넌트 업뎃될 떄마다 다시 네트워크 통신하는 거 안 좋음

  1) 아무것도 전달 안할 떄 : 컴포넌트에 state나 prop이 업뎃 될 떄마다 반복 호출
  2) [] 텅빈 배열 전달 : 마운트 됐을 떄만 호출 (한번만 호출)
  3) [video] : 해당 변수 업뎃될 떄마다 콜백 함수 호출
  */

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      // `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`,
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=',

      requestOptions
    )
      /*
      postman : popular에서 fetch 코드 가져옴
      위의 옵션과 url을 전달하고, fetch가 정상적으로 받아지면
      반응을 텍스트로 변환,
      변환된 텍스트를 콘솔에 출력
      만약 에러 발생시 에러를 콘솔에 출력


    */
      // .then(response => response.text()) -> json으로 하면 정리돼서 출력됨
      .then(response => response.json())

      // .then(result => console.log(result))
      .then(result => setVideos(result.items))
      //-> setVideos를 받아온 result.items로 업데이트한다. 컴포넌트가 마운트 되면 유행videos를 받아와서 비동기적으로 setVideos라는 api이용해, 우리 컴포넌트에 데이터 업뎃

      .catch(error => console.log('error', error));
  }, []);

  return <VideoList videos={videos} />;
  // 위에서 정의해둔 state videos사용
}

export default App;
