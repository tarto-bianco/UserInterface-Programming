import { fetchData } from "../../main.js";
import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ content: '' });
  
  const { content } = newPost;
  const onChange = (e) => setNewPost({...newPost, [e.target.name]: e.target.value});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    setUser(userData);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData("/post/createPost", { content }, "POST")
      .then((data) => {
        if(!data.message) {
          setPosts([...posts, data]);
          setNewPost({ content: '' });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!user || !user.username) {
    return <div>Please login to view your profile</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Create a Post</label>
          <textarea 
            className="form-control" 
            id="content"
            name="content"
            onChange={onChange}
            value={content}
            rows="3"
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Post"/>
      </form>
      <hr/>
      <h3>Your Posts:</h3>
      {posts.length === 0 ? (
        <p>No posts yet. Create your first post above!</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <p className="card-text">{post.content}</p>
              <small className="text-muted">Likes: {post.likes}</small>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Profile;
