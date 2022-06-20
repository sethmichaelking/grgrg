import React from 'react'
import { useState, useEffect } from 'react'
import UpdateModal from './UpdateModal'
function PostList({ posts, onDelete, handleUpdate }) {
  return (
    <div>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
               {posts.map(post => (
                 <tr key={post.id}>
                 <th scope="row">{posts.indexOf(post) + 1}</th>
                 <td>{post.title}</td>
                 <td>{post.body}</td>
                    <td>
                        <div className="buttons">
                        <button onClick={() => onDelete(post.id)}> DELETE</button>
                        <UpdateModal id={post.id} handleUpdate={handleUpdate}/>
                        </div>
                    </td>
                 </tr>
               ))}
            </tbody>
        </table>
    </div>
  )
}

export default PostList