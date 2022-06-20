import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import PostList from './components/PostList'
import Home from './components/Home'
import AddPost from './components/AddPost'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'

function App() {
  const [posts, setPosts] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //get 
  useEffect(()=>{
    const getPosts = async() =>{
      const response = await axios.get("/api/posts")
      const data = await response.data
      setPosts(data)
    }
    getPosts()
  }, [])
  //delete
  const handleDelete = (id) =>{
    try {
      const performDelete = async() =>{
       await axios.delete(`/api/posts/${id}`)
      }
      performDelete()
      setPosts(posts.filter(post => post.id !== id))
    }
   catch(err){
    console.log(err)
   }
  }
  //add
  const addTask = async (post) =>{
    try {
       await axios.post("/api/posts", post)
       setPosts([...posts, post])
    }
    catch(err){
      console.log(err)
    }
  }
  //update
  const handleUpdate = (post) =>{
    try {
      console.log(post)
      // const update = async() =>{
      //  await axios.put(`/api/posts/${id}`)
      // }
      // update()
      // setPosts(posts)
    }
   catch(err){
    console.log(err)
   }
  }

  return (
    <div className="App">
      <Nav />
      <Home/>
        <Button variant="primary" onClick={handleShow}>
          Add Post
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddPost onAdd={addTask}/>
          </Modal.Body>
        </Modal>
      <PostList handleUpdate={handleUpdate} onDelete={handleDelete} posts={posts}/>
    </div>
  );
}

export default App;
