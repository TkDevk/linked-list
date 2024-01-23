import { useState } from "react";

const DynamicContentLoader = () =>{
    const [content, setContent] = useState([]);
//Return new promise, with id parameter to identify each button

     const loadedContent = async(id)=>{
        await new Promise ((resolve)=>setTimeout(resolve,1000))
        const loadedContent = {
            id,
            text:`Tab ${id} Data`
         };

         setContent((prevData)=>[...prevData,loadedContent])

     }

     const handleButtonClick = (id)=>{
       loadedContent(id)
     }


  return(
    <>
              <h1>Dynamic content loader with LRU cache</h1>
              <article>  
              <button onClick={()=>handleButtonClick(1)}> Tab 1</button>
              <button onClick={()=>handleButtonClick(2)}> Tab 2</button>
              <button onClick={()=>handleButtonClick(3)}> Tab 3</button>
              <button onClick={()=>handleButtonClick(4)}> Tab 4</button>
              <button onClick={()=>handleButtonClick(5)}> Tab 5</button>
          </article>
     
      <article>

      <h2>Loaded content</h2>
      <ul>
          {content.map((item,index)=>{
          return <li key={`${item.id}${index}`}>{item.text}</li>
          })}
      </ul>
      </article>
      
    </>
  )
}
export default DynamicContentLoader