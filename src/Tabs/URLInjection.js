import React, { useState } from 'react'
import { Input, Button } from 'reakit'

const URLInjection = () => {

  // https://9432-161-22-31-212.ngrok-free.app/images/document.cookie
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValidUrl(value)) {
            setSubmitted(true);
        } else {
            alert('Invalid URL. Please enter a valid Pokemon image URL.');
        }
    };

    const isValidUrl = (url) => {
        const pokemonUrlPattern = /^https:\/\/assets\.pokemon\.com\/.*\.(png|jpg|jpeg|gif)$/;
        return pokemonUrlPattern.test(url);
    };

    return (
    <div style={{margin: '8px 24px'}}>
      <h1>Insert your image</h1>
      <form 
          style={{width: '100%'}}
          onSubmit={(e) => { handleSubmit(e)}}>
          <Input style={{width: '100%'}} onChange={e => setValue(e.target.value)}/>
          <Button style={{width: '50%'}} onClick={() => setSubmitted(true)}>Submit</Button>
        </form>
        {submitted && <iframe width={'90%'} height={'500px'} src={value} />}
    </div>
  )
}

export default URLInjection;