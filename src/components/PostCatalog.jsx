import React from "react"

class PostCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  async componentDidMount() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await data.json();
    this.setState({posts: [...result]});
  }

  render() {
    const {posts} = this.state;

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
}

export default PostCatalog;