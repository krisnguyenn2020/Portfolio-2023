import React from 'react';
// https://hn.algolia.com/api/v1/search?query=react

const getTitle = async () => {
  try {
    const respond = await axios.get(`https://hn.algolia.com/api/v1/search?query=react`);
  return respond.data;
  } catch(err) {
    console.log(err);
  }

};
const HackerNews = () => {
  const [hits, setHits] = useState([]);

  return (
    <div>
      {hits.length > 0 && hits.map((item,index) => {
        <h3 key={item.title}>{item.title}</h3>
      })}
    </div>
  );
};

export default HackerNews;