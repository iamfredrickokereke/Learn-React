import React from 'react';
import ReactDOM from 'react-dom';


import './index.css'

// Declaring Variables

const firstBook = {
  img: 'https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png',
  title: 'Image - 1',
  author: 'Written by Fredrick Achiever'
}
const secondBook = {
  img: 'https://cdn.shopify.com/s/files/1/0064/5342/8271/collections/Taschen-Atm-Navy_540x.jpg?v=1556744191',
  title: 'Image - 2',
  author: 'Written by Fredrick Achiever'
}
const thirdBook = {
  img: 'https://cdn.shopify.com/s/files/1/0064/5342/8271/collections/Classics-of-History_540x.jpg?v=1571866175',
  title: 'Image - 3',
  author: 'Written by Fredrick Achiever'
}
// const img = 'https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png'
// const title = 'Image - 1'
// const author = 'Written by Fredrick Achiever'

function BookList() {
    return (
        <section className="booklist">
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
            <Book img={thirdBook.img} title={thirdBook.title} author={thirdBook.author}/>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
            <Book img={thirdBook.img} title={thirdBook.title} author={thirdBook.author}/>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
            <Book img={thirdBook.img} title={thirdBook.title} author={thirdBook.author}/>
        </section>
    )
}

const Book = ({img, title, author}) => {

  
  
    return (
        <article className="card">
            <img src={img} alt=""/>
            <h2 style={{color:'red'}}>{title}</h2>
            <h1 style={{letterSpacing:'5px'}}>{author}</h1>

        </article>
    )
}




ReactDOM.render(<BookList />, document.getElementById('root'))

