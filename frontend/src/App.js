import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Homepage from './Homepage';
import Brandinfo from './Brandinfo';

function App() {

  // RENDER 
  return (
    <div>
 <div className='nav'>
        <nav>
          <div>
           <Link to="/Brandinfo"  className='navButton'>brands</Link> 
           </div>
           <div>
           <Link to="/Homepage"  className='navButton'>Homepage</Link> 
           </div>
           <button  className='navButton'>closet</button> 
           <button  className='navButton'>clothing</button> 
           <button className='navButton'>about</button> 

        </nav>



        </div>

<Routes>
  <Route path='Brandinfo' element={<Brandinfo />}/>
  <Route path='/Homepage' element={<Homepage />}/>
</Routes>
</div>
  );
}

export default App;