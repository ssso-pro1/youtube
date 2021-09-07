// import axios from 'axios';

class YoutubeFetch {
  // constructor(key) {
  //   this.youtube = axios.create({
  //     baseURL: 'https://www.googleapis.com/youtube/v3',
  //     params: { key: key },
  //   });

  constructor(httpClient) {
    this.youtube = httpClient;
  }

  // 1. popular
  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    return response.data.items;
    //fetch 처럼 json 으로 변환하지 않아도 라이브러리 자체에서 json으로 변환해주기 때문에 생략가능

    // const response = await fetch(
    //   `/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //   this.getRequestOptions
    // );
    // const result = await response.json();
    // return result.items;
  }

  // 2. const search
  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default YoutubeFetch;
