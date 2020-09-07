import axios from 'axios';

export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  // console.log(response.data);

  // let data = response.data;
  //型の推論ができないものはanyになる

  // let data: object[] = response.data;
  //この書き方もできるがより厳密にするには下記のようにする

  interface Article {
    id: number;
    title: string;
    description: string;
  }
  //interfaceは独自の型を作るようなもの

  let data: Article[];
  // let data: any;
  // data = [
  //   {
  //     id: 1,
  //     title: 'Title for article #1!',
  //     //titleを消すとエラーが出る（ Articleで定義されている物がないため ）
  //     description: 'Description for article #1.',
  //   },
  // ];

  data = response.data;
  console.log(data);
});
