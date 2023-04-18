import React from 'react';
import "./app.css"
 
import {Header, Footer} from "./components";

const app = () => {
  return (
    <div className='container__main'>
      <Header />
      <Footer /> 
    </div>
  )
}

export default app