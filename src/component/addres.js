import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import {useState} from 'react'
import{Box,Heading,HStack, Flex,Text,Button,Input, Center,Image} from '@chakra-ui/react'
import { StarIcon,CheckCircleIcon,ViewIcon } from '@chakra-ui/icons'
export default function Address(){
  var [obj,setobj]=useState({})
var redirect=useNavigate()
var id=localStorage.getItem('id')
var [obj,setobj]=useState({})
var [addresok,setadd]=useState({"avilable": false,"add":{

}})
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const handleClick = async (e) => {
  e.preventDefault();
  const res = await loadScript(
    "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const data = await fetch("https://meeshodb.herokuapp.com/razorpay", {
    method: "POST",
    body: JSON.stringify({
      amount: 50,
    }),
  }).then((t) => t.json());
 
  const options = {
    key: "rzp_test_OnubQmqY8GahSs",
    currency: data.currency,
    amount: 50,
    order_id: data.id,
    name: "Shah Store",
    description: "Thank you for Ordering",
    image: "https://media0.giphy.com/media/Jo75eLRYF8OGpux7yQ/giphy.gif?cid=ecf05e472rkggijadf69mcogwgjnnbag5jxgsrhcgc1x8q7s&rid=giphy.gif&ct=g",
    handler: function (response) {
      alert("Payment request was successfull !!");
    },
    prefill: {
      name: "Nasseeb Shah",
      email: "Deenshahsai",
      phone_number: "8708730331",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  setTimeout(() => {
    redirect('/sucess')
  }, 10000);
};



const Handeler=(e)=>{
  
  setobj({...obj,[e.target.name]:e.target.value})
  console.log(obj)
}

async function ad(){
  console.log('sai')
  
fetch(`https://serverside-five.vercel.app/address/${id}`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':"application/json"
    }
}).then(x=>x.json()).then(x=>{
    setadd({"avilable": true,"add":x})
// setTimeout(()=>window.location.reload(),1000)

}).catch(e=>console.log(e))
console.log(obj)
}

const showadd=(x)=>{

 return(
  <>
  <Box border={'1px'}p='20px' ml='80px'>
    <Box> <Text> Your Address :</Text>
  <Text> landmark :  {x.landmark}</Text>
  <Text> City     :{x.c}</Text>
  <Text> District :{x.d}</Text>
  <Text> State    :{x.s}</Text>
  <Text> Zipcode :{x.zcode}</Text>
  </Box>

  <Center mt='20px'>
  <Button variant={'outline'} colorScheme={'blue'} onClick={handleClick}>
    Place Order <CheckCircleIcon ml='5px'></CheckCircleIcon>
  </Button>

  </Center>  </Box>
 
  </>
 )
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
          w='100%'colorScheme={'yellow'}  variant={'outline'}><ViewIcon ml='10px'mr='10px'></ViewIcon>Update Address</Button>
 
</Center>
</Box>
<Box mt={'150px'} color={'yellowgreen'} fontSize={'20px'}>
{addresok.avilable?showadd(addresok.add):<Image src='https://media1.giphy.com/media/uZ7wLTpoMbtikW2wUY/giphy.webp?cid=ecf05e47g0g8lf8nyj6mmeey1670fav5jqw3lb4v2j8109t3&rid=giphy.webp&ct=s'/>
}

</Box>
</Flex>
        
       

        
        </>
    )
}
