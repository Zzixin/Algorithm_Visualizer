//import logo from './logo.svg';
import './App.css';
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer.jsx";
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import ReactDOM from 'react-dom'
import {BrowserRouter as Redirect, Route, Routes, Router, Link} from 'react-router-dom'
import React, { Component } from 'react';
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           {/* This route is for home component 
//           with exact path "/", in component props 
//           we passes the imported component*/}
//           <Route exact path="/" component={Home} />
            
//           {/* This route is for about component 
//           with exact path "/about", in component 
//           props we passes the imported component*/}
//           <Route path="/about" component={PathfindingVisualizer} />
            
//           {/* This route is for contactus component
//           with exact path "/contactus", in 
//           component props we passes the imported component*/}
//           <Route path="/contactus" component={SortingVisualizer} />
            
//           {/* If any route mismatches the upper 
//           route endpoints then, redirect triggers 
//           and redirects app to home component with to="/" */}
//           <Redirect to="/" />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// class App extends Component {
//   constructor() {
//     super();
//   }
//   componentDidMount() {
//     // console.log(window.innerHeight,"  ",window.innerWidth);
//   }

//   render() {
//     return (
//       <Router basename='/'>
//           <Routes>
//               <Route path='/pathfinder'  component={PathfindingVisualizer}/>
//               <Route path='/sort' component={SortingVisualizer}/>
//               <Route path='/' component={Home}/>
//           </Routes>
//       </Router>
//   );

//   }
// }

export default App;
