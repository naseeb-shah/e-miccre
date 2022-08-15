
import { useDispatch, useSelector } from 'react-redux';
import { deleteitme } from '../app/cart';


import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box, Button, Divider, Flex, Heading,
  HStack, Image, Input, Spacer, Text
} from "@chakra-ui/react";
import Address from './addres';
export default function CheckOut(){
 const cart= useSelector((state)=>state.Cart.value)
 console.log(cart)
 var dispatch=useDispatch()
  




 const Cartitem=(x,i)=>{
  return(<>
  
    <Flex>
    <Image  h='75px' w='75px'src={x.img[0]} />
<Box ml='20px'>

  <Text>{x.name.slice(0,20)}</Text>
  <Text>Price:{`₹ ${x.price*x.quantity}.00`}</Text>
  <Text>Quantity:{x.quantity}</Text>
  </Box>
  <Spacer></Spacer>
  <Box>
    <Button onClick={()=>dispatch(deleteitme(i))}><DeleteIcon></DeleteIcon></Button>
    </Box>
  </Flex>
  

  </>)
}

    return(
        <>
        <Flex flexWrap={'wrap'}>
         <Box>
           <Box  ml='50px' border={'1px'} borderColor={'black'} borderRadius='20px' mt='80px' w='480px' p='2%'>


           {
   cart.length?cart.map((e,i)=>Cartitem(e,i)): <Flex><img src='https://media0.giphy.com/media/jG7dfAfL7gsIo/200w.webp?cid=ecf05e47j0sjpq7kidotxlc79z0mdzckdo8n5ejyz5vxh7p1&rid=200w.webp&ct=s'/>
   <img  src='https://media0.giphy.com/media/crgKMFV0O3zF6M4L55/200w.webp?cid=ecf05e4747kk7q3nk4rrwik8m4uftmbtwy1mnvrrn3pqekx5&rid=200w.webp&ct=ts'/>
   </Flex>  }
   </Box>

            </Box>
            
            <Box>
            <Box  ml='50px' borderRadius='10px' mt='80px' w='480px' p='2%' border={'1px'} mb='10px'>
<Flex>
  <Text fontSize={'20px'} colorScheme='Green'>Items </Text>
  <Spacer></Spacer>
  <Text>{cart.length} Items</Text>
</Flex>
<Flex>
  <Text fontSize={'20px'} colorScheme='Green'>Shipping Fees</Text>
  <Spacer></Spacer>
  <Text>Free of cost</Text>
</Flex>

<Flex>
  <Text fontSize={'20px'} colorScheme='Green'>Subtotal</Text>
  <Spacer></Spacer>
  <Text>{cart.reduce((pre,cur)=>pre+cur.price*cur.quantity,0)}</Text>
</Flex>
<Flex>

  <Text fontSize={'20px'} colorScheme='Green'>Other Taxes</Text>
  <Spacer></Spacer>
  <Text>12% GST</Text>
</Flex><Flex>
  <Text fontSize={'20px'} colorScheme='Green'>Total Payable</Text>
  <Spacer></Spacer>
  <Text>{(cart.reduce((pre,cur)=>pre+cur.price*cur.quantity,0)/100*112).toFixed(2)}</Text>
</Flex>


<Box textAlign='end' mb='5px'>
                        <Text fontSize='9px'>View featured offers</Text>
                    </Box >

                    <Input
                        placeholder="Promo or Reward Code"
                      borderColor='black'
                    />
                    <Divider mt={'10px'}></Divider>


 </Box>  

 <Box>
 <Box border={"1px"} borderColor="black"  borderRadius={'5px'} ml='50px' p="3%">
              <Heading fontSize="25px">Need assistance?</Heading>
              <Text>135-103 -SHAH store (+91-985-737-4672)</Text>
              <Text>TTY: 1-888-866-9845</Text>
              <Text>Free return shipping or return in store</Text>
              <Text>We accpted</Text>
              <HStack>
                <Image
                  w="30px"
                  src="https://www.sephora.com/img/ufe/payments/sephora.svg"
                ></Image>
                <Image
                  w="30px"
                  src="https://www.sephora.com/img/ufe/payments/payPal.svg"
                ></Image>
                <Image
                  w="30px"
                  src="https://www.sephora.com/img/ufe/payments/visa.svg"
                ></Image>
                <Image
                  w="30px"
                  src="https://www.sephora.com/img/ufe/payments/masterCard.svg"
                ></Image>
                <Image
                  w="30px"
                  src="https://www.sephora.com/img/ufe/payments/discover.svg"
                ></Image>
                <Image
                  w="30px"
                  src="https://www.sephora.com/img/ufe/payments/americanExpress.svg"
                ></Image>
                <Image
                  w="30px"
                  src="https://www.sephora.com/img/ufe/payments/JCPenney.svg"
                ></Image>
              </HStack>
            </Box>
          
        


  </Box> 
 </Box>
            </Flex>    
<Address/>
        </>
    )
}