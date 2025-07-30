// // src/pages/Home.jsx
// import React from "react";
// import './home.css';
// import { usePost } from '../context/PostContext';

// const Home = () => {
//   const { posts } = usePost();

//   return (
//     <div className="home">
//       <h2>All Blog Posts</h2>
//       {posts.length === 0 ? (
//         <p>No posts yet.</p>
//       ) : (
//         posts.map((post) => (
//           <div key={post.id} className="post-card">
//             <h3>{post.title}</h3>
//             <p><strong>Author:</strong> {post.author}</p>
//             <p><strong>Posted:</strong> {post.createdAt}</p>
//             <p>{post.content}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Home;

// src/pages/Home.jsx
import React from "react";
import './home.css';
import { usePost } from '../context/PostContext';
import staticPosts from "../data/staticPosts"; // import static blog posts

const Home = () => {
  const { posts } = usePost();

  // Combine: dynamic posts first, then static posts
  const allPosts = [...posts, ...staticPosts];

  return (
    <div className="home">
      <h2>All Blog Posts</h2>
      {allPosts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        allPosts.map((post, index) => (
          <div key={index} className="post-card">
            <h3>{post.title}</h3>
            <p><strong>Author:</strong> {post.author}</p>
            {post.createdAt && <p><strong>Posted:</strong> {post.createdAt}</p>}
            <p>{post.description || post.content}</p>
            {post.tip && <p><strong>Tip:</strong> {post.tip}</p>}
            {post.hashtags && (
              <div className="hashtags">
                {post.hashtags.map((tag, i) => (
                  <span key={i} className="hashtag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Home;



