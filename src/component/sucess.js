
import {
    Alert, AlertDescription, AlertIcon,
    AlertTitle, CircularProgress, CircularProgressLabel,
    List, ListIcon, ListItem
,Center,Button} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
import { ImHome } from "react-icons/im";
    import { useSelector } from 'react-redux'
 import { useNavigate } from 'react-router-dom';
export default function Placed(){
var nav=useNavigate()
    var auth= useSelector((e)=>e.Auth.value)
    var cart= useSelector((e)=>e.Cart.value)
const Single=(x)=>{
    return(
        <ListItem>
        <ListIcon as={MdCheckCircle} color='green.500' />
        {x}
      </ListItem>
    )
}



    return(
        <>
        <List spacing={3} mt='50px'>
{ cart.map(e=>Single(e.name))}
  
</List>
        <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Your Order is Placed
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for Ordering. Our team will get back to you soon.
  </AlertDescription>
</Alert>
<CircularProgress value={10} color='green.400' size='120px'>
  <CircularProgressLabel>10%</CircularProgressLabel>
</CircularProgress>
<Center>


    <Button
    onClick={()=>nav('/')}
    >
        <ImHome></ImHome>
    </Button>
</Center>
        </>
    )
}