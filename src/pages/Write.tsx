import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import Navbar from '../components/Navbar';


const Write: React.FC = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div>

      <div className="navbar" style={{marginBottom: "40px"}}>
      <Navbar />
      </div>

      <div className="quill">
          <ReactQuill theme="snow" value={value} onChange={setValue} style={{height: "300px"}} placeholder='Enter the content of your blog here'/>
      </div>
    </div>
    )
}

export default Write