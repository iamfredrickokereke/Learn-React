import React from 'react';
import ReactDOM from 'react-dom';


import './index.css'

// Declaring Variables

const img = 'https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png'
const title = 'Image - 1'
const author = 'Written by Fredrick Achiever'

function BookList() {
    return (
        <section className="booklist">
            <Book name='Fred'/>
            <Book />
            <Book />
        </section>
    )
}

const Book = (props) => {

  console.log(props);
  
    return (
        <article className="card">
            <img src={img} alt=""/>
            <h2 style={{color:'red'}}>{title} {props.name}</h2>
            <h1 style={{letterSpacing:'5px'}}>{author.toLocaleUpperCase()}</h1>

        </article>
    )
}




ReactDOM.render(<BookList />, document.getElementById('root'))

