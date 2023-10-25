import React, { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from '../../images/image1.png';
import ImageTwo from '../../images/image2.png';
import ImageThree from '../../images/image3.png';
import ImageFour from '../../images/image4.png';
import ImageFive from '../../images/image5.png';
import Imageُight from '../../images/image8.png';
import './styles.scss';


const portfolioData = [
    {
        id: 2,
        name: "X&O",
        link : "https://mohamedehab11554.github.io/My-Project/",
        image: ImageOne
    },
    {
        id: 2,
        name: "Landing page",
        link : "https://mohamedehab11554.github.io/My-Project-2/",
        image: ImageTwo
    },
    {
        id: 2,
        name: "Calculator",
        link:"https://mohamedehab11554.github.io/My-Project-3/",
        image: ImageThree,
    },
    {
        id: 2,
        name: "Login Monkey",
        link : "https://mohamedehab11554.github.io/project-4/",
        image: ImageFour
    },
    {
        id: 3,
        name: "Nature",
        link : "",
        image: ImageFive
    },
    {
        id: 2,
        name: "Login",
        link : "https://mohamedehab11554.github.io/project-5/",
        image: Imageُight
    },
]


const filterData = [
    {
        filterid: 1,
        label: 'All'
    },
    {
        filterid: 2,
        label: 'Developement'
    },
    {
        filterid: 3,
        label: 'Design'
    },
]

const Portfolio = () => {
const [hoveredValue,setHoveredValue] = useState(null);
const [fiteredvalue,setFilteredValue] = useState(1);

function handleFilter(currentId){
    setFilteredValue(currentId)
};

function handleHover(index){
    setHoveredValue(index)
}

console.log(hoveredValue);

const filteredItems = fiteredvalue === 1 ? portfolioData :
portfolioData.filter(item=>item.id === fiteredvalue)

console.log(filteredItems);

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">

                <ul className="portfolio__content__filter">

                    {
                        filterData.map(item => (
                            <li className={item.filterid === fiteredvalue ? 'active' : ''} onClick={()=>handleFilter(item.filterid)} key={item.filterid}>

                                {
                                    item.label
                                }

                            </li>
                        ))
                    }

                </ul>
                <div className="portfolio__content__cards">
                    {
                         filteredItems.map((item,index)=>(
                            <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}
                            onMouseEnter={()=>handleHover(index)}
                            onMouseLeave={()=>handleHover(null)}
                            >
                            <div className="portfolio__content__cards__item__img-wrapper">
                                <a>
                                    <img alt="dummy data" src={item.image}/>
                                </a>
                            </div>
                               <div className="overlay">

                                {
                                    index === hoveredValue && (
                                        <div>
                                            <p>{item.name}</p>
                                            <button onClick={() => window.open(item.link, '_blank')}>visit</button>
                                        </div>
                                    )
                                }

                               </div>
                            </div>
                         ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Portfolio;