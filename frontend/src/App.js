import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import {Helmet} from "react-helmet";

function App() {
  return ( 
    <Router>
      <Helmet>
                <meta charSet="utf-8" />
                <title>E-SHOP</title>
            </Helmet>
      <Header/>
      
        
        <main>
          <Container className='py-3'>
            {/* <HomeScreen/> */}
            <Routes>
              <Route path='/' element={<HomeScreen/>} exact/>
              <Route path='/product/:id' element={<ProductScreen/>}/>
            </Routes>
            {/* <Route path="/home">
              <HomeScreen/>
            </Route> */}
          </Container>
    
        </main>
        
      
      <Footer/>
      
    </Router>
  );
}

export default App;
