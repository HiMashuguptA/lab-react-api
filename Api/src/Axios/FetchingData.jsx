import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchingData() {
    const[isData,setData]=useState([])
    const[isError,setError]=useState("")
    Math.random()
    useEffect(()=>{
        axios
        .get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
        .then((res)=>setData(res.data.books))
    .catch((error)=>{
        setError(error.message)
    })
    },[])
  return (
    <div>
        {isError!=="" ? <h2 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>{isError}</h2>
        :
        isData.map((post)=>{
            const{title,description,authors,imageLinks,id}= post
            return (
                <div key={id}>
                    <h2>{title}</h2>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <img src={imageLinks.smallThumbnail||imageLinks.thumbnail}/>
                        <p style={{paddingLeft:"20px"}}>{description}</p>
                    </div>
                    <h4>{authors}</h4>
                    <hr />
                </div>
            )
        })
    }
    </div>
  )
}
export default FetchingData