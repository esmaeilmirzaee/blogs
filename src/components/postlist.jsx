import React from 'react';
import postlist from '../posts.json';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';

const PostList = () => {
  const excerpt = postlist.map((post) => {
    return post.content.split(' ').slice(0, 20).join(' ');
  });
  return (
    <div className='postlist'>
      <h1>All Recent Posts</h1>
      {postlist.length &&
        postlist.map((post, index) => {
          return (
            <div className='post__card' key={index}>
              <h2>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </h2>
              <small>
                Published on <span>{post.author}</span> by{' '}
                <span>{post.author}</span>.
              </small>
              <hr />
              <Markdown source={excerpt[index]} escapeHtml={false} />
              <small>
                <Link to={`/post/${post.id}`}>Read More...</Link>
              </small>
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
