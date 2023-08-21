import React from 'react'

function Parent() {

    function save () {
        confirm("developer")
      }
  return (
    <div>
        <button onClick={save}> Button</button>
        <h1>Ragu</h1>
        <h1>Raman B</h1>

    </div>
  )
}

export default Parent