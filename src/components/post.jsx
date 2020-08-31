import React from 'react';
import postlist from '../posts.json';
import { Redirect } from 'react-router-dom';
import Markdown from 'react-markdown';

const Post = (props) => {
  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <Redirect to='/404' />;
  }
  const fetchedPost = {};
  let postExists = false;
  postlist.forEach((post, index) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : 'Not title given';
      fetchedPost.date = post.date ? post.date : 'Not date given';
      fetchedPost.author = post.author ? post.author : 'Not author given';
      fetchedPost.content = post.content ? post.content : 'Not content given';
      postExists = true;
    }
  });
  if (!postExists) {
    return <Redirect to='/404' />;
  }
  return (
    <>
      <h1>{fetchedPost.title}</h1>
      <small>
        Published on {fetchedPost.date} by {fetchedPost.author}
      </small>
      <article>
        <Markdown source={fetchedPost.content} escapeHtml={false} />
      </article>
    </>
  );
};

export default Post;
