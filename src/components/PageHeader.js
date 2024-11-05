import "./css/PageHeader.css";
import BooksImg from "./images/books.webp";
import { Link } from "react-router-dom";



const PageHeader = (props) => {
    return (
        <section className="page-header">
            <img src={BooksImg} alt="book"/>
            <div className="container">
                <div className="text">
                    <ul>
                        <li>
                            <Link to="/"> الرئيسية </Link>
                        </li>
                        <span> / </span>
                        <li> 
                            <Link to={props.link}> {props.text} </Link>
                        </li>
                    </ul>

                    <span className="tag"> {props.tag} </span>
                    <h1> {props.header}   </h1>
                    <Link target="_blank" to="#"> تواصل معنا </Link>
                </div>
            </div>
        </section>
    )
}

export default PageHeader
