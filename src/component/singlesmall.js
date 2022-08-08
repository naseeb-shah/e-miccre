
import{Box,Image,Badge} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'



function Singlesmall({item}) {
  
var redirecting= useNavigate()

  const Goto=()=>{
    redirecting(`/product/${item._id}`)
  }
   

  return (
    <Box 
    boxShadow='outline' p='1' rounded='md' bg='white'
    onClick={Goto}
    
    w='250px' borderWidth='1px' borderRadius='lg' overflow='hidden' alignContent={'center'}>
      <Image h='150px' src={item.img[0]} alt={item.name} />

      <Box p='6'>
        

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
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
                color={i < item.reviews ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {item.reviews*55} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Singlesmall