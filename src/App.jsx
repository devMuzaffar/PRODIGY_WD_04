import { Contact, Intro, Menu, Portfolio, TopBar, Works, MyServices } from './components';
import './app.scss';
import { useState } from 'react';

const App = () => {

  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className='app'>

      <TopBar menuOpen={menuOpen} setMenuOpen={setmenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setmenuOpen} />

      <div className="sections">
        <Intro />
        <MyServices />
        <Portfolio />
        <Works />
        <Contact />
      </div>


    </div>
  )
}

export default App