// (순수js) 여기에 youtube라는 이 클래스를 통해서 필요한 네트워크 처리를 함

class Youtube {
  constructor(key) {
    this.key = key;

    //app.jsx의 const search (공통적인 부분)
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

// 1. popular
  mostPopular() {
    //app.jsx의 useEffect()

    // 공통적으로 쓰니까 없앰
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    // };

    // fetch 를 하고 thenthenthenthen 하면 최종적으로 promise가 만들어짐, 그 프로미스를 리턴
    return (
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
        //requestOptions ->
        this.getRequestOptions
      )
        .then(response => response.json())
        //   .then(result => setVideos(result.items));
        .then(result => result.items)
    );
  }

  // 2. const search
  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
    // .then(items => setVideos(items))
    // .catch(error => console.log('error', error));
  }
}

export default Youtube;
