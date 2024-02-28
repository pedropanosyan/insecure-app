import React, { useState } from "react";
import { Input, Button } from "reakit";
import _ from 'lodash'


const JsonBuilderDemo = () => {

  // const input = `){alert(document.cookie)}; with(obj`

  const [title, setTitle] = useState('')
  const [objectName, setObjectName] = useState('data')
  const [inputName, setInputName] = useState('')
  const [inputLastName, setInputLastname] = useState('')

  const onSubmitButton = () => {

    const asd = _.template(`{
      ${objectName}: {
        ${inputName ? `name: '${inputName}',`: ''}
        ${inputLastName ? `lastname: '${inputLastName}'`: ''}
      }
    }`, { variable: objectName })
    setTitle(asd({name: inputName, lastname: inputLastName}))
  }

  return (
    <>
      <h1>Welcome JSON builder!</h1>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div>
          <label>Object name:</label>
          <Input
            style={{width: '100%'}}
            value={objectName}
            onChange={(e) => setObjectName(e.target.value)}
            placeholder="Enter your object name"
          />
        </div>
        <div>
          <label>Name:</label>
          <Input 
            style={{width: '100%'}}
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Lastname</label>
          <Input 
            style={{width: '100%'}}
            value={inputLastName}
            onChange={(e) => setInputLastname(e.target.value)}
            placeholder="Enter your lastname"
          />
        </div>
        <Button style={{width: '50%'}} onClick={onSubmitButton}>Submit</Button>
      </div>
      {title}
    </>
  )
}

export default JsonBuilderDemo