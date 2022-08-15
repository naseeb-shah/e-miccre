import { useEffect, useState } from "react"
import Pard from "./card";
import {ImStarFull,ImStarHalf} from "react-icons/im";
import {Button ,Box,Image} from "@chakra-ui/react"
export default  function AllProducts(){
 const[allpro,setpro]=useState([])
 const[data,setdata]=useState({
  "sai":false,
  "data":[]
 })
 useEffect(() => {
    fetch('https://serverside-five.vercel.app/product')
    .then(product=>product.json())
    .then(product=>{setpro(product.data)
    setdata({
      "sai":false,
      "data":product.data
     })
  })
    
  },[]);


const sortr=()=>{
var new_array=
setdata(allpro.sort((a,b)=>a.price-b.price))
console.log(allpro)
}

return(<>
<Box>


  <Button  w='130px' m='10px' bgColor='yellow.300'  onClick={()=>{setdata({'sai':true,"data":allpro.sort((a,b)=>a.price-b.price)})}}>
  ₹ Low to  Hight

 

  </Button>
  <Button  w='130px' m='10px' bgColor='yellow.300' onClick={()=>{setdata({'sai':true,"data":allpro.sort((a,b)=>b.price-a.price)})}}>
  ₹  Hight to Low
  </Button>

  <Button  w='130px' m='10px' bgColor='yellow.300'  onClick={()=>{setdata({'sai':true,"data":allpro.sort((a,b)=>a.reviews-b.reviews)})}}>

<ImStarHalf />

  </Button>
  <Button  w='130px' m='10px' bgColor='yellow.300'  onClick={()=>{setdata({'sai':true,"data":allpro.sort((a,b)=>b.reviews-a.reviews)})}}>

 <ImStarFull />
  </Button>



<Button  w='130px' m='10px'  bg={'pink'  }variant={'outline'} onClick={()=>{ setdata({'sai':false,"data":allpro.filter((e)=>e.cat==='men')})}}>
    Men
  </Button>
  <Button  w='130px' m='10px' bg={'pink'  } variant={'outline'} onClick={()=>{ setdata({'sai':false,"data":allpro.filter((e)=>e.cat==='women')})}}>
    Women
  </Button><Button  w='130px' m='10px' variant={'outline'} bg={'pink'  } 
  onClick={()=>{ setdata({'sai':false,"data":allpro.filter((e)=>e.cat==='kids')})}}>
  Kids
  </Button>

  </Box>
{

data.data.length===0? <img src='https://c.tenor.com/xzM6oRwPFrMAAAAj/rolling-jackass.gif'/> : data.data.map((e,i)=><Pard item={e} key={i} />)
}

</>)


}