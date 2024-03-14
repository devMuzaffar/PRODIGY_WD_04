import './menu.scss';

const Menu = ({ menuOpen, setMenuOpen }) => {

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`menu ${menuOpen && 'active'}`}>
      <ul>
        <li><a href="#intro" onClick={closeMenu}>Home</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
        <li><a href="#works" onClick={closeMenu}>Works</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </div>
  )
}

export default Menu