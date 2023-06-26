import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Design from './pages/Design';
import Art from './pages/Art';
import Footer from './components/Footer';
import Blog1 from './Blogs/Blog1.js';
import Blog2 from './Blogs/Blog2.js';
import Blog3 from './Blogs/Blog3.js';
import Blog4 from './Blogs/Blog4.js';
import Blog5 from './Blogs/Blog5.js';
import Blog6 from './Blogs/Blog6.js';
import Blog7 from './Blogs/Blog7.js';
import Blog8 from './Blogs/Blog8.js';
import Blog9 from './Blogs/Blog9.js';
import Blog10 from './Blogs/Blog10.js';
import Blog11 from './Blogs/Blog11.js';
import Blog12 from './Blogs/Blog12.js';
import  Essay from './Theory/Essay';
import Theory1 from './Theory/Theory1';
import Theory2 from './Theory/Theory2';
import Theory3 from './Theory/Theory3';
import IArt1 from './Art/InternetArt1';
import IArt2 from './Art/InternetArt2';



function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/blogs' element={<Blogs/>}/>
      <Route exact path='/design' element={<Design/>}/>
      <Route exact path='/art' element={<Art/>}/>
      <Route exact path='/blog1' element={<Blog1/>}/>
      <Route exact path='/blog2' element={<Blog2/>}/>
      <Route exact path='/blog3' element={<Blog3/>}/>
      <Route exact path='/blog4' element={<Blog4/>}/>
      <Route exact path='/blog5' element={<Blog5/>}/>
      <Route exact path='/blog6' element={<Blog6/>}/>
      <Route exact path='/blog7' element={<Blog7/>}/>
      <Route exact path='/blog8' element={<Blog8/>}/>
      <Route exact path='/blog9' element={<Blog9/>}/>
      <Route exact path='/blog10' element={<Blog10/>}/>
      <Route exact path='/blog11' element={<Blog11/>}/>
      <Route exact path='/blog12' element={<Blog12/>}/>
      <Route exact path='/essay' element={<Essay/>}/>
      <Route exact path='/theory1' element={<Theory1/>}/>
      <Route exact path='/theory2' element={<Theory2/>}/>
      <Route exact path='/theory3' element={<Theory3/>}/>
      <Route exact path='/internetart1' element={<IArt1/>}/>
      <Route exact path='/internetart2' element={<IArt2/>}/>
      

     </Routes>
     <Footer/>

    </div>
  );
}

export default App;
