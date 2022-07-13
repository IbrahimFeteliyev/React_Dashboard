import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import SideBar from './components/SideBar/SideBar';
import MyRouter from './router/MyRouter';

var a = 5
console.log(window.a)
console.log(global.a)

function App() {

  const [login, setLogin] = useState(true)

  if (login) {
    return (
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-2 p-0">
            <SideBar />
          </div>
          <div className="col-lg-10">
            <MyRouter />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Login />
      </>
    )
  }
}

export default App;
