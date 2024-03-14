import { Mail, Person } from '@material-ui/icons'
import './topbar.scss'


const TopBar = ({ menuOpen, setMenuOpen }) => {

  return (
    <div className={`topbar ${menuOpen && 'active'}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Myfolio.</a>
          <div className="itemContainer">
            <Person className='icon' />
            <span>+12 345 56 789</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon' />
            <span>DevMax123@Gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => { setMenuOpen(!menuOpen) }}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar