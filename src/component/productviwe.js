
import{Box,Image,Badge, Button,Input, Heading,
 
  Center,Text,HStack, Flex, Spacer, ButtonGroup
} from '@chakra-ui/react'
import {DeleteIcon} from '@chakra-ui/icons'
import { StarIcon,ViewIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useState ,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Singlesmall from './singlesmall'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {additem,deleteitme} from '../app/cart'
import { useSelector, useDispatch } from 'react-redux'


function Overviwes({item}) {
  const dispatch=useDispatch()
  const Cart_=useSelector((state)=>state.Cart.value)
  console.log(Cart_)
  var [reco,setreco]=useState([])
  var [current,sc]=useState(item.img[0])
  var [qun,squn]=useState(1)
var redirect= useNavigate()
useEffect(() => {
  fetch(`https://serverside-five.vercel.app/product/q?cat=${item.cat}`)
  .then(product=>product.json())
  .then(product=>{
     var new_array=product.data.filter(e=>e.id!=item._id)
     setreco(new_array.slice(0,5))
  })

},[]);
useEffect(()=>{
  sc(item.img[0])
},[item.name])

  const Cartitem=(x,i)=>{
    return(<>
    {/* <HStack> */}
      <Flex>
      <Image  h='75px' w='75px'src={x.img[0]} />
<Box ml='30px'>

    <Text>{x.name.slice(0,20)}</Text>
    <Text> {`₹ ${x.price}.00`}</Text>
    <Text>{x.quantity}</Text>
    </Box>
    <Spacer></Spacer>
    <Box>
      <Button onClick={()=>dispatch(deleteitme(i))}><DeleteIcon></DeleteIcon></Button>
      </Box>
    </Flex>
    {/* </HStack> */}
 
    </>)
  }
   

  return (
<>
<Row  style={{width:'98%'}} >
    {/* <HStack sm={4} border={'2px'}  mt='10px'> */}

     <Col sm={2} >
<Box mt='100px'>
<Image   w='100px'border={'2px'}p='4px'h='100px'onClick={()=>sc(item.img[0])}  src={item.img[0]} alt={item.name} />
<Image   border={'2px'} h='100px' w='100px'  p='4px'onClick={()=>sc(item.img[1])} src={item.img[1]} alt={item.name} />

</Box>
</Col>
<Col sm={5} >
  <Box p='2%'>
<Image h='250px' w='250px' mt='50px'   src={current}  alt={item.name} />
<Box p='6' >
     <Box display='flex' alignItems='baseline'>
       <Badge borderRadius='full' px='2' colorScheme='yellow'>
         New
       </Badge>
       <Box
         color='gray.500'
         fontWeight='semibold'
         letterSpacing='wide'
         fontSize='xs'
         textTransform='uppercase'
         ml='2'
       >
         {item.cat} &bull; 
       </Box>
     </Box>

     <Box
     w='90%'
       mt='1'
       fontWeight='semibold'
       as='h4'
       lineHeight='tight'
       noOfLines={6}
     >
       {item.name}
     </Box>

     <Box>
       { `₹ ${item.price}.00`}
       <Box as='span' color='gray.600' fontSize='sm'>
         / wk
       </Box>
     </Box>

     <Box display='flex' mt='2' alignItems='center'>
       {Array(5)
         .fill('')
         .map((_, i) => (
           <StarIcon
             key={i}
             color={i < item.reviews ? 'yellow.500' : 'gray.300'}
           />
         ))}
       <Box as='span' ml='2' color='gray.600' fontSize='sm'>
         {item.reviews*55} Reviews
       </Box>
     </Box>
   </Box>
   <Box>
    <Box>
<Button variant='solid' onClick={()=>squn(qun+1)} colorScheme={'yellow'} w='30%'>++</Button>
<Input w ='100px' type={'number'} onChange={e=>squn(+e.target.value)} value={qun} w='10%'></Input>
<Button variant='solid' onClick={()=>qun>1?squn(qun-1):''} colorScheme={'yellow'} w='30%'>--</Button>
</Box>
<Button w='70%'colorScheme={'yellow'} variant={'outline'} onClick={()=>dispatch(additem({...item,quantity:qun}))}>
  Add To Card
</Button>
   </Box>
   </Box>

</Col>
 <Col sm={4}> 
<Box mt='100px' h='455px' border={'2px'} borderColor={'yellow.300'} p='20px'  borderRadius={'revert-layer'}>
  {/* <Center> */}
    <Heading color={'yellow.500'}>
      Cart
    </Heading>
  {/* </Center> */}
  <Box h='290px'  overflowX={'scroll'}>

  
  {
   Cart_.length?Cart_.map((e,i)=>Cartitem(e,i)):<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQuvmnOyujWtFgnDnTsTOqVW05Fi-r06HoZxhUaGDPFFfNcKBGmMSpFa7sEwuFDUSS3I&usqp=CAU' />
  }
  </Box>
  <Flex bg='yellow.300' paddingStart={'10px'} paddingEnd='10px' fontSize={'20px'} borderTopEndRadius='5px' borderTopStartRadius={'5px'}>
 
  <Text color={'black'}>
    Items in Cart:
  
  </Text>
  <Spacer></Spacer>
  <Text color={'black'}>
    
   { Cart_.length?Cart_.length:"00"}
  </Text>
  </Flex>
  <Flex bg='yellow.300' paddingStart={'10px'} paddingEnd='10px' fontSize={'20px'}  borderBottomLeftRadius={'5px'} borderBottomRightRadius={'5px'}>
  <Text color={'black'}>
    Cart Value:
   {/* { Cart_.length?Cart_.reduce((pre,cur)=>pre+cur.price,0):""} */}
  </Text>
  <Spacer></Spacer>
  <Text color={'black'}>
    
  ₹  { Cart_.length?Cart_.reduce((pre,cur)=>pre+cur.price*cur.quantity,0):"00"}.00
  </Text>
  </Flex>
  <Button 
  onClick={()=>redirect('/checkout')}
  
  w='100%'colorScheme={'yellow'}  variant={'outline'}><ViewIcon ml='10px'mr='10px'></ViewIcon>CheckOut</Button>
  </Box>
   </Col>
    
       </Row>
       <Box
       mt='50px'
       ml='2%'
      
       
       > 
       <Badge
        variant='subtle' colorScheme='green'
       >
        Products For You 
       </Badge>
       <Center>
       <Row  >

    {console.log(reco)}
  { reco.map((e)=><Singlesmall item={e} />)}
  </Row>
  </Center>
  </Box>
  
</>
  )
}
export default Overviwes