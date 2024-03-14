import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss'
import { featuredPortfolio, webPortfolio, allPortfolio, fullStackPortfolio } from '../../data';

const Portfolio = () => {

  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'featured',
      title: 'Featured'
    },
    {
      id: 'web',
      title: 'Web App'
    },
    {
      id: 'fullstack',
      title: 'Full Stack'
    },
    {
      id: 'all',
      title: 'All'
    },

  ]

  useEffect(() => {

    switch (selected) {
      case 'featured': setData(featuredPortfolio); break;
      case 'web': setData(webPortfolio); break;
      case 'all': setData(allPortfolio); break;
      case 'fullstack': setData(fullStackPortfolio); break;
      default: setData(featuredPortfolio); break;
    }

  }, [selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(item => (
          <div className="item" id={item.id}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Portfolio