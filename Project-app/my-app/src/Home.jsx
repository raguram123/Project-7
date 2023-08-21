import React, { useState } from 'react'

function Home() {
  const [isClicked ,setisClicked] = useState(true)
  const [myData ,setmyData] =useState(
    [
      {
        id: 1,
        name: 'John'
      },
      {
        id: 2,
        name: 'Mary'
      },
      {
        id: 3,
        name: 'Peter'
      }
    ]
  )
  const handleClick = (id) => {
    console.log(id)
    setmyData(
      myData.filter(item => item.id!== id)
    )
    console.log(myData)
    
    setisClicked(false)
    
  }
  return (

      
      <>
      <h1>Home</h1>
      {console.log("call me")}
      {console.log(isClicked)}
      <ul>
        {
          myData.map((item) => {
            return (
              <li key={item.id} onClick={() => handleClick(item.id)}>
                {item.name}
              </li>
            )
          })
        }
      </ul>
      {isClicked ? <button>Add to cart</button> : <button>Remove from cart</button>}
      </>
    
  )
}

export default Home