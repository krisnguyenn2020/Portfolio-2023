import React from 'react';
import { useEffect } from 'react';
import { axios } from 'axios';
// https://hn.algolia.com/api/v1/search?query=react

const getTitle = async () => {
  try {
    const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=react`);
  return response.data;
  } catch(err) {
    console.log(err);
  }

};
const HackerNews = () => {
  const [hits, setHits] = useState([]);

  useEffect(() => {
    const title = getTitle();

  }, [])
  return (
    <div>
      {hits.length > 0 && hits.map((item,index) => {
        <h3 key={item.title}>{item.title}</h3>
      })}
    </div>
  );
};

export default HackerNews;