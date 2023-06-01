import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'

import './App.css'

function App() {

  return (
    <div className='App'>
      <div className='nav'>
        <img className='image' src={img1} alt='logo' />
        <img className='image' src={img6} alt='nextlogo' />
      </div>
      <div className='text'>
        <h1>Say Hello to <br /> ReactJS</h1>
        <p>You will learn how to use <br />
          the most popular frontend library, <br />
          and become a super Ninja Developer.</p>
        <button>Awesome</button>
      </div>
    </div>
  )
}

export default App
