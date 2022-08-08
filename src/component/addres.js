import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'
import{Box,Heading,HStack, Flex,Text,Button,Input, Center,Image} from '@chakra-ui/react'
import { StarIcon,ViewIcon } from '@chakra-ui/icons'
export default function Address(){

var redirect=useNavigate()

var [obj,setobj]=useState({})

const Handeler=(e)=>{
  
  setobj({...obj,[e.target.name]:e.target.value})
  console.log(obj)
}

async function ad(){
  // const headers = {
  //   "Content-Type": "application/json",
   
  // }
// await axios.post('https://serverside-five.vercel.app/address/add/62d9571d54964611df31c167',obj,{headers})
// .then(product=>product.json()).then(product=>console.log(product)).catch(e=>console.log(e+"dd"))
//  console.log("saj")
fetch('https://serverside-five.vercel.app/address/add/62d9571d54964611df31c167',{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':"application/json"
    }
}).then(x=>x.json()).then(x=>{
    console.log(x)
// setTimeout(()=>window.location.reload(),1000)

})

}


    return(
        <>
        <Flex wrap={'wrap'}>
<Box mt='100px' ml='50px'w={'580px'} p='20px' borderRadius={'5px'} color='yellowgreen'>

<Heading>
  Delivery Address
</Heading>

<HStack mb='20px' w='500px' mt='50px'>
 <Text  w={'100px'}fontSize={'20px'} > Address</Text> <Input name='landmark' onChange={Handeler} required></Input>
</HStack>
<HStack mb='20px'>
<HStack w='250px'>
 <Text  w={'100px'}fontSize={'20px'} >City</Text> <Input  name='c'onChange={Handeler} required></Input>
</HStack>

<HStack w='250px'>
 <Text  w={'100px'}fontSize={'20px'} >Zipcode</Text> <Input name='zcode' onChange={Handeler}required></Input>
</HStack>
</HStack>

<HStack>
<HStack w='250px'>
 <Text fontSize={'20px'} w={'100px'}>Disst</Text> <Input name='d' onChange={Handeler}required></Input>
</HStack>
 w={'100px'}
<HStack w='250px'>
 <Text  w={'100px'}fontSize={'20px'} > State</Text> <Input name='s' onChange={Handeler}required></Input>
</HStack>
</HStack>

<Center mt='40px'>
<Button  onClick={
            ad
          }
          w='100%'colorScheme={'yellow'}  variant={'outline'}><ViewIcon ml='10px'mr='10px'></ViewIcon>CheckOut</Button>
 
</Center>
</Box>
<Image src='https://media1.giphy.com/media/uZ7wLTpoMbtikW2wUY/giphy.webp?cid=ecf05e47g0g8lf8nyj6mmeey1670fav5jqw3lb4v2j8109t3&rid=giphy.webp&ct=s'/>

</Flex>
        
       

        
        </>
    )
}
