import React, { useState } from "react";
import { Input, Button } from 'reakit'

export const XssTab = () => {
  const [value, setValue] = useState('')
  const [customizedBackground, setCustomizedBackground] = useState('{ "style": { "backgroundColor": "red", "width": "100px", "height": "100px"}}')
  
  const [backgroundProps, setBackgroundProps] = useState({})
  const applyStyle = () => {
    
    try {
      const parsedJson = JSON.parse(customizedBackground);
      setBackgroundProps({style: parsedJson.style});
    } catch (e) {
      console.error(e)
      setBackgroundProps(undefined)
    }
  }

  // {style:{backgroundColor: 'red', width: '100px', height: '100px'}, "dangerouslySetInnerHTML": { "__html": '<img src="a.com" onError={console.log(1)} />' }}
  // { "style": { "backgroundColor": "red", "width": "100px", "height": "100px"}, "style": { "backgroundImage": "url(urltoExternalSv)",  "width": "100px", "height": "100px"} }
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

      <h1>Set your profile link</h1>

      {/* <span>{'<a href={value} > case'}</span> */}
      <Input style={{width: '90%'}} value={value} onChange={(e) => setValue(e.target.value)}/>
      <a href={value} >Go to your profile</a>

      {/* <span>{'<div {...props}></div> case'}</span> */}
      <h1>Customize your profile background</h1>
      <Input style={{width: '90%'}} value={customizedBackground} onChange={(e) => setCustomizedBackground(e.target.value)}/>
      <Button onClick={applyStyle}>Apply</Button>
      {!backgroundProps && <h4>Error setting styles</h4>}
      <div {...backgroundProps}></div>

    </div>
  )
}