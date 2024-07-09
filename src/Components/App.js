import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom'
import './App.css'
import {Container} from './index'
import { Header,Footer} from '../section/index';
import {Home,Profile} from '../Pages/index'



const App = () =>{
  return (
  <>
 
<Router>
<Header/>
  <Container>
    <Home/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Profile' element={<Profile/>} />
    </Routes>
    </Container >
  <Footer />
</Router>
  </>
 
  )
};

export default App;
