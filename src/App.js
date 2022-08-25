function App() {
  const NYT_API_KEY = process.env.REACT_APP_API_KEY;
  let page = 0;
  async function newsApi(input) {
    return await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${input}&page=${page}&api-key=${NYT_API_KEY}
    `)
      .then((res) => res.json())
      .then((data) => data);
  }
  newsApi();

  return <></>;
}

export default App;
