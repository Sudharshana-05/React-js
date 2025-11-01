// PROPS AND CONDITION RENDERING 

import HTML from './assets/html.png';
import CSS from './assets/CSS-Logo-2011.png';
import JS from './assets/JS.png';
import Course from './course';
import './App.css';
function App() {
  return (
    <>
   <Course   name="html" price="199" image={HTML}  rating ={23}/>
    <Course name="Css" price="100" image={CSS} rating={1} show={true} />
    <Course image={JS} rating={2} show={true}/>
    </>  
  );
}

export default App;
