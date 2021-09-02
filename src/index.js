import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';
// import reportWebVitals from './reportWebVitals';

// app.js가 아닌 index에 만들어서 youtube는 딱한번 만들어서 필요한 곳에 전달
// 이렇게 해서 나중에 유닛테스트할 때는 이 app컴포넌트를 만들 때 네트워크 통신을 하지 않고
// 그냥 이미 정해진 데이터를 리턴하는 클래스를 주입injection해주면 됨
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
