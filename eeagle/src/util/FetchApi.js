import Axios from "axios";

export const FetchApi = async (useValue, search) => {
  /* fetch 구현
     const res = await fetch(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=bts&api-key=Iios1dBvulICGRkfIUnaGRILXEXAucsy"
      );
      const data = await res.json();
      const obj = await data.response;
      const arr = obj.docs;
      console.log(arr);
      useClip(arr);
    */

  // page 부분은 무한스크롤 구현시 삽입
  const API_KEY = process.env.REACT_APP_API_KEY;
  const res = await Axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${API_KEY}`
  );
  const data = res.data.response.docs;
  console.log(data);
  useValue(data);
};
