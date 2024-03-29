import './portfolioList.scss';

const PortfolioList = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={`portfolioList ${active && 'active'}`}
      id={id}
      onClick={() => { setSelected(id); }}
    >{title}</li>
  )
}

export default PortfolioList