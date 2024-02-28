import React, { useState } from 'react'
import { Input } from 'reakit'

const URLInjection = () => {

  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div style={{margin: '8px 24px'}}>
      <h1>Insert your image</h1>
      <form 
          style={{width: '100%'}}
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
        }}>
          <Input style={{width: '100%'}} onChange={e => setValue(e.target.value)}/>
        </form>

        {submitted && <img src={value}/>}
    </div>
  )
}

export default URLInjection;