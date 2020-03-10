import React, { useState } from 'react';

export default function PostList({ posts}) {
  return <ul>
    {posts.map(post => <li key={post.id}>{post.title}
      <button>Delete</button>
    </li>)}
  </ul>;
}
