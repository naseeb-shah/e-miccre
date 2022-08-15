
import {

  AlertDialog,
  AlertDialogBody, AlertDialogContent, AlertDialogFooter,
  AlertDialogHeader, AlertDialogOverlay, Box, Button, Center, Flex, HStack, Input, Link, Spinner, Text, useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {login,logout} from '../app/auth'
export default function Log(){
  var dispatch=useDispatch()
  var redirect= useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
var match=false
 const[sp,sps]=useState(false)
 const[helper,shelper]=useState()
    const[us,sus]=useState({})
    const[ds,dus]=useState('none')
    const[al,set]=useState({
      
    })
    const[user,setdata]=useState({"email":"",
    "mobile":"",
    "password":"",
    "username":"",
    })
    const Handler=(e)=>{

        sus({...us,[e.target.name]:e.target.value})
        console.log(us)
    }
const hand=(e)=>{

  setdata({...user,[e.target.name]:e.target.value})
  console.log(user)
}


const and=(e)=>{
  if(user.password===e.target.value){
    match=true
  }
}
 const Register=()=>{
  var flag=false
  Object.keys(user).forEach((e)=>{
    if(user[e]===''){
      alert("Please Fill Valid "+ e.toUpperCase())
      flag=true
    }
    
  })
  if(flag)
  return
  sps(true)

fetch('https://serverside-five.vercel.app/user/add',{
  method:"POST",
  body:JSON.stringify(user),
  headers:{
    'Content-Type':"application/json"
  },
}).then(x=>x.json()).then(x=>{
  sps(false)
  set({
    h:" User Successfully Registered",
    b:" Thank you for Registration at Shah Store",
    button:'Thank You'
  })
onOpen()
}).catch((e)=>console.log(e))





  
 }


 const Login=()=>{
  var flag=false
  Object.keys(us).forEach((e)=>{
    if(us[e]===''){
      alert("Please Fill Valid "+ e.toUpperCase())
      flag=true
    }
    
  })
  if(flag)
  return
  sps(true)

fetch('https://serverside-five.vercel.app/user/login',{
  method:"POST",
  body:JSON.stringify(us),
  headers:{
    'Content-Type':"application/json"
  },
}).then(x=>x.json()).then(x=>{
  sps(false)
  set({
    h:`${x.username}`,
    b:" Welcome to Shah Store",
    button:'Thank You'
  })
  onOpen()
shelper(x.username)
console.log(x._id)
if(x._id){
  dispatch(login(x))
localStorage.setItem('cur',JSON.stringify(x))
localStorage.setItem('id',x._id)

}
  
}).catch((e)=>console.log(e))






 }

 const goto=()=>{
  if(helper===' User not Exist '){
    redirect('/log')
  }else{
    redirect('/')
  }
 }
    return(
        <>
          <AlertDialog
        isOpen={isOpen}
        // leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
             {al.h}
            </AlertDialogHeader>

            <AlertDialogBody>
             {al.b}
            </AlertDialogBody>

            <AlertDialogFooter>
           
              <Button colorScheme='green' onClick={()=>{
                goto()
              onClose()
              }} ml={3}>
               {al.button}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>


        
        <Center>
        <Flex  >

        <Box mt='90px' border={'2px'} borderColor='blackAlpha.50' p='35px' display={ds==='block'?"none":'blo  '} >
        <Text fontSize={'40px'}>
          Login
        </Text>
         <HStack p='5px' mt='10px' w={'400px'} borderRadius='10px'>
           <Text  color='black' fontSize={'20px'} w={'100px'}>
            Email
           </Text>
             <Input
             borderColor={'green'}
             border={'2px'}
name='email'
             w="300px"
             onChange={Handler}
             placeholder='Username@gmail.com'
             >

             </Input>
         </HStack>
         <HStack p='5px' mt='10px'  w={'400px'} borderRadius='10px' >
           <Text  color='black' fontSize={'20px'} w={'100px'}>
            Password
           </Text>
             <Input
             type='password'
name='password'
             w="300px"
             borderColor={'green'}
             border={'2px'}
             onChange={Handler}
             placeholder='Password'
             >
             
             </Input>
             
         </HStack>
<Box w='400px' mt='20px'>
<Center>
  
<Button ml='69px'
// borderColor={'green'}
colorScheme='yellow'
w='300px'
onClick={Login}
>
{sp?<Spinner/>:''}
  Log in
</Button>


         </Center>
<Text ml='80px'>
  Haven't Registered ? <Link onClick={()=>dus("block")} >Register Now</Link>
</Text>
        

</Box>

         </Box>

         <Box mt='90px' border={'2px'} borderColor='blackAlpha.50' p='35px' h='600px' display={ds}>

         <Text fontSize={'40px'}>
         Register
        </Text>
        <HStack p='5px' mt='10px' w={'400px'} borderRadius='10px'>
           <Text w='100px' color='black' fontSize={'20px'}>
            Username
           </Text>
             <Input
             borderColor={'green'}
             border={'2px'}
name='username'
             w="300px"
             onChange={hand}
             placeholder='anjana'
             isRequired
             >
               

             </Input>
         </HStack>
         <HStack p='5px' mt='10px' w={'400px'} borderRadius='10px'>
           <Text w='100px' color='black' fontSize={'20px'}>
            Email
           </Text>
             <Input
             borderColor={'green'}
             border={'2px'}
name='email'
             w="300px"
             onChange={hand}
             placeholder='Username@gmail.com'
             >
               

             </Input>
         </HStack>
         <HStack p='5px' mt='10px' w={'400px'} borderRadius='10px'>
           <Text w='100px' color='black' fontSize={'20px'}>
            Mobile 

           </Text>
             <Input
             maxLength={10}
             borderColor={'green'}
             border={'2px'}
name='mobile'
type={'number'}
             w="300px"
             onChange={hand}
             placeholder='Username@gmail.com'
             >
               

             </Input>
         </HStack>
         <HStack p='5px' mt='10px' w={'400px'} borderRadius='10px'>
           <Text w='100px' color='black' fontSize={'20px'}>
            Password
           </Text>
             <Input
               type={'password'}
             borderColor={'green'}
             border={'2px'}
name='password'
             w="300px"
             onChange={hand}
             placeholder='Password'
             >
               

             </Input>
         </HStack>
       

         {/* <HStack p='5px' mt='10px' w={'400px'} borderRadius='10px'>
           <Text w='100px' color='black' fontSize={'20px'}>
          Password
           </Text>
             <Input
             type={'password'}
             borderColor={'red'}
             border={'2px'}
name='password'
             w="300px"
             onChange={ and}
             placeholder='Repeat Password'
             >
               

             </Input>
         </HStack> */}
       


         <Box w='400px' mt='20px'>
<Center>
  
<Button ml='69px'
// borderColor={'green'}
colorScheme='yellow'
w='300px'

onClick={Register}
>
{sp?<Spinner />:''}
  Register
</Button>


         </Center>
<Text ml='80px'>
  Have Registered ? <Link onClick={()=>dus("none")}> Login Now</Link>
</Text>
        

</Box>





          </Box>
 
         </Flex>
         </Center>

        </>
    )
}