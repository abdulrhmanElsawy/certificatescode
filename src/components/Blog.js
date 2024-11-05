import React from 'react'
import PageHeader from './PageHeader'
import './css/Card.css'

const Blog = () => {
    return (
        <>
            <PageHeader header="دور الشبكات في تحسين الأعمال" link="/blogs" text="دور الشبكات في تحسين الأعمال" tag="مدونة" />

            <div className='page-details'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
