import React from 'react'
import './App.css';
import { useState } from 'react'

const Dropdown = () => {
    const [open, setopen] = useState(false);
    const [items] = useState(['Male', 'Female', 'Prefer not to say']);

    const hideList = (e) => {
        setopen(false);
    }

    const Dropdown = () => {
        setopen(true);
    }

    const contents = items.map((item) => {
        return <a href="#" onClick={hideList} >{item}</a>;
    })

    return (
        <div className='main'>
            <div className="dropdown" >
                <h1>What is Your Gender?</h1>
                <button className="selectbtn" onMouseEnter={Dropdown}>Select</button>
                  <div className="dropdown_content" style={{ display: `${open ? 'block' : 'none'}` }}>
                   {contents}
                  </div>
            </div>

        </div>
    )
  }

export default Dropdown