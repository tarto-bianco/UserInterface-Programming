import { fetchData } from "../../main.js";
import { useState } from "react";

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem('user') || '{}');
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ content: '' });
  
  const { content } = newPost;
  const onChange = (e) => setNewPost({...newPost, [e.target.name]: e.target.value});

  const deletePost = (postId) => {
    fetchData("/post/deletePost", { id: postId }, "DELETE")
      .then((data) => {
        if(data.success) {
          setPosts(posts.filter(post => post._id !== postId));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  if (!userData || !userData.username) {
    return <div>Please login to view your profile</div>;
  }

  return (
    <div>
      <h2>Welcome, {userData.username}!</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Create a Post</label>
          <textarea 
            className="form-control" 
            id="content"
            name='content'
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
              <div className="mt-2">
                <button 
                  className="btn btn-danger btn-sm" 
                  onClick={() => deletePost(post._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Profile;
