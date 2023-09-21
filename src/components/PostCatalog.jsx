import React, {useState, useEffect} from "react";

const PostCatalog = () => {
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    async function getData() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await data.json();
        setPosts([...result]);
      } catch (err) {
        console.log(err)
      }
    }

    getData();
  }, [])

  return (
      <div className="posts">
        <ul className="posts__list">
          {
            posts.map(({id, title, body}) =>
                <li key={id} className="posts_single-post" data-post-id={id}>
                  <h3 className="posts__post-title">{title}</h3>
                  <p className="posts__post-description">{body}</p>
                </li>
            )
          }
        </ul>
      </div>
  )
}

export default PostCatalog;