import { useState, useEffect } from 'react';
import postsData from '../posts.json';
import Article from '../components/Article';
import Search from '../components/Search';

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPost, setTotalPost] = useState(0);
  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
    setTotalPost(filteredPosts.length);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setExternalPosts(json));
  }, []);

  return (
    <>
      <h1>Simple Blog</h1>
      <Search
        onSearchChange={onSearchChange}
        totalPost={totalPost}
      />
      {posts.map((props, index) => (
        <Article
          {...props}
          key={index}
        />
      ))}
    </>
  );
}

export default Homepage;
