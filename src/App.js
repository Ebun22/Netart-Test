//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Test from './Components/Test';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Test />
        {/*<ParentComponent />
        <EventHandlers />
        <Counter />
        <Message />
        <Greeting name="Ebun" nickName="Hot Cake"/>
        <Greeting name="sideChick" nickName="cake don cold"/>
        <Greeting name="Zoey" nickName="Kelvin's babe"/>
        <Welcome name="Unice"/>
        <Welcome name="Pecular"/>
        <Welcome name="Wence"/>*/}
      </div>
    );
  }
}



//  // function App() {
//   const[contact, setContact] = useState([]);
//
//   function contacts(){
//     fetch("https://randomuser.me/api/?results=3")
//     .then(result => result.json())
//     .then(data => setContact(data.results))
//     .catch(error => console.log(error))
//   }
// contacts()
//
//         return (
//         <div className="App">
//         {contact.map((datas) => {
//           <div className="contacts">
//             <img src={datas.picture}/>
//             <p>{datas.email}</p>
//           </div>
//         })}
//         </div>
//       );
//
//
// }

export default App;
