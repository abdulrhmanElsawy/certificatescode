import { CalendarDaysIcon, ComputerDesktopIcon, CurrencyDollarIcon, DocumentCurrencyDollarIcon, GlobeEuropeAfricaIcon, QueueListIcon } from '@heroicons/react/24/solid'
import './css/Card.css'

import { Link } from 'react-router-dom'

const Certificate = (props) => {
    return (
        <div key={props.key} className='course-card'>
            <img src={props.img} alt='card image' />

            <div className='text'>
                <span className='category'> {props.category}</span>

                <h1> {props.title} </h1>
                <p> {props.description} </p>

                <ul>
                    <li>
                        <QueueListIcon />
                        <span>{props.level}</span>
                    </li>

                    <li>
                        <DocumentCurrencyDollarIcon />
                        <span>اسم الاختبار :{props.testname}  </span>
                    </li>

                    <li>
                        <CurrencyDollarIcon />
                        <span>سعر الاختبار :  {props.testprice}  </span>
                    </li>
                </ul>
            </div>  

            <Link className='duration-500 hover:bg-[#17dcaf] hover:text-[#fff]' to={props.link}> المزيد </Link>
        </div>
    )
}

export default Certificate
