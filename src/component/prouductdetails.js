
import { useState ,useEffect} from "react"
import { useParams } from "react-router-dom"
import Overviwes from "./productviwe"
export default  function SingleProduct(){
  
  let {id}=useParams()

  const[allpro,setpro]=useState([])
 useEffect(() => {
    fetch(`https://serverside-five.vercel.app/product/q?_id=${id}`)
    .then(product=>product.json())
    .then(product=>setpro(product.data))
  
  },[id]);
  // const item=all[0]
  
  return(
    <>
    
{
  allpro.length===0? <img src='https://c.tenor.com/xzM6oRwPFrMAAAAj/rolling-jackass.gif'/> :  allpro.map((e,i)=><Overviwes item={e} key={i} />)
}
    
    </>
      )
}