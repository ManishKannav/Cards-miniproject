import React from 'react'
import {Bookmark} from 'lucide-react'

const Cards = (props) => {
     console.log(props.company);
  return (
   
    <div className='cards'>
        <div className='top'>
            <img src ={props.logo} alt="" />
            <button >Save <Bookmark size={12} /></button>
        </div>
        <div className='middle'>
            <h4>{props.company} <span>{props.post}</span></h4>
            <h2>{props.role}</h2>
            <div className='tag'>
                 <h4>{props.time}</h4>
                 <h4>{props.level}</h4>
            </div>
        </div>

  <div className='bottom'>
    <h4>{props.salary} <br /><span>{props.location}</span></h4>
    <button>Apply now</button>
  </div>
    </div>
  )
}

export default Cards