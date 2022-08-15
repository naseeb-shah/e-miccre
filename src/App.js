import Bar from './component/Navabar';
import './App.css';
import SingleProduct from './component/prouductdetails';
import CheckOut from './component/checkout';
import Home from './component/home';
import Address from './component/addres';
import { ChakraProvider } from '@chakra-ui/react'
import Log from './component/login.js'
import Placed from './component/sucess'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
function App() {
  var auth= useSelector((e)=>e.Auth.value)
  return (
  <>
  <ChakraProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bar/>}>

          <Route index element={<Home />} />
          <Route path='/product/:id' element={<SingleProduct/>} />
          <Route path='/checkout' element={ !auth?<Log/>:<CheckOut/>} />
         
          <Route path='/log' element={<Log />} />
          <Route path='/sucess' element={<Placed />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>

  
  </>
  );
}

export default App;
