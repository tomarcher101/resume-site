import React from 'react'
import './Assets/css/default.min.css'

// components
import Header from './Components/headerComponent/header'
import Footer from './Components/footerComponent/footer'
import ProfilePage from './Components/scenes/profilePage/profilePage'

function App() {
  return (
    <div className="App">
      <Header/>
      <ProfilePage/>
    </div>
  );
}

export default App;
