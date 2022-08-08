import Bar from './component/Navabar';
import './App.css';
import SingleProduct from './component/prouductdetails';
import CheckOut from './component/checkout';
import Home from './component/home';
import Address from './component/addres';
import { ChakraProvider } from '@chakra-ui/react'

import {BrowserRouter ,Routes,Route} from 'react-router-dom'
function App() {
  return (
  <>
  <ChakraProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bar/>}>
          <Route index element={<Home />} />
          <Route path='/product/:id' element={<SingleProduct/>} />
          <Route path='/checkout' element={<CheckOut/>} />
          <Route path='/add' element={<Address />} />
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
