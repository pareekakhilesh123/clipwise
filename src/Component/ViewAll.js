import React from 'react'
import './ViewAll.css'

function ViewAll({title}) {
  return (
    <div>
     <button className="view-btn">{title}</button>
    </div>
  )
}

export default ViewAll