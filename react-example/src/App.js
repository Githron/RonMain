import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// import { useMemo } from 'react';
// import { useState, useEffect } from 'react';



// function App() {
//   const names = ['Ron', 'Wella', 'RWX'];
//   const [randomName, setRandomName] = useState('');

//   useEffect(() => {
//     setRandomName(names[Math.floor(Math.random() * names.length)]);
//   }, []); // eslint-disable-next-line react-hooks/exhaustive-deps
  

//   console.log(randomName)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello {randomName}!
//         </p>
//       </header>
//     </div>
//   );
// }


function App() {
  

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}





export default App;