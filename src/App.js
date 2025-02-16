import './App.css';
import React from 'react'
import SideBar from './Components/SideBar Section/SideBar.jsx'
import Body from './Components/Body Section/Body.jsx'

 const App = () => {
  return (
    <div className='container'>
      <SideBar/>
      <Body/>
    </div>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
