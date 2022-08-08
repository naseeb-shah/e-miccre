import { useEffect, useState } from "react"
import Pard from "./card";
export default  function AllProducts(){
 const[allpro,setpro]=useState([])
 useEffect(() => {
    fetch('https://serverside-five.vercel.app/product')
    .then(product=>product.json())
    .then(product=>setpro(product.data))
    console.log(allpro)
  },[]);





return(<>

{
    allpro.length===0? <img src='https://c.tenor.com/xzM6oRwPFrMAAAAj/rolling-jackass.gif'/> : allpro.map((e,i)=><Pard item={e} key={i} />)
}

</>)


}