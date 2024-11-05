import { CalendarDaysIcon, ComputerDesktopIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/solid'
import './css/Card.css'

import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <div key={props.key} className='course-card'>
            <img src={props.img} alt='card image' />

            <div className='text'>
                <span className='category'> {props.category}</span>

                <h1> {props.title} </h1>
                <p> {props.description} </p>

                <ul>
                    <li>
                        <CalendarDaysIcon />
                        <span>{props.date}</span>
                    </li>

                    <li>
                        <GlobeEuropeAfricaIcon />
                        <span>{props.language}</span>
                    </li>

                    <li>
                        <ComputerDesktopIcon />
                        <span>{props.platform}</span>
                    </li>
                </ul>
            </div>  

            <Link className='duration-500 hover:bg-[#17dcaf] hover:text-[#fff]' to={props.link}> المزيد </Link>
        </div>
    )
}

export default Card
