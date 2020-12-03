import React from 'react';
import ReactDOM from 'react-dom';


import './index.css'

function BookList() {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = () => {
    return (
        <article className="card">
            <Image />
            <Title />
            <Author />
        </article>
    )
}

const Image= () => {
    return <img src="https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png" alt=""/>
}
const Title= () => {
    return <h2 style={{color:'red'}}>Image - 1</h2>
}
const Author= () => {
    return <h1 style={{letterSpacing:'5px'}}>Written by Fredrick Achiever</h1>
}


ReactDOM.render(<BookList />, document.getElementById('root'))

