import React, {useState}from 'react'

function Child(props) {
  const[count ,setCount] = useState(0)
  

  

  return (
    
    
    <div>
      
      <button onClick={() => setCount((count) => count *5)}>
          count is {count}
        </button>
        <span> learning with {props.name}</span>
        
    </div>

  )
  }

export default Child

