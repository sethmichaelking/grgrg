import React from 'react'
import { useState, useEffect } from 'react'

function AddPost({ onAdd }) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const onSubmit = (e) =>{
        if (!title){
            alert('please add a title')
            return
        }
        if (!body){
            alert('please add a body')
            return
        }
        onAdd({ title, body })
        setTitle('')
        setBody('')
    }

  return (
    <div>
         <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label for="formGroupExampleInput">Example label</label>
                    <input 
                        type="text" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        id="formGroupExampleInput" 
                        placeholder="Title" 
                    />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Another label</label>
                    <input 
                        type="text"  
                        className="form-control"
                        value={body}
                        onChange={(e) => setBody(e.target.value)} 
                        id="formGroupExampleInput2" 
                        placeholder="Body" 
                    />
                </div>
                <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default AddPost