
import React from 'react'
import dbConnect from '@/lib/databaseutils/connectDb'
const home = () => {
 
    
    dbConnect()
   


  return (
    <div>home</div>
  )
}

export default home