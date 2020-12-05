// import React from 'react';
// import ReactDOM from 'react-dom';


// import './index.css'

// // Declaring Variables

// const booksApi = [
 
//   {
//   id:1,
//   img: 'https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png',
//   title: 'Image - 1',
//   author: 'Written by Fredrick Achiever'
// }, 

// {
//   id: 2,
//   img: 'https://cdn.shopify.com/s/files/1/0064/5342/8271/collections/Taschen-Atm-Navy_540x.jpg?v=1556744191',
//   title: 'Image - 2',
//   author: 'Written by Fredrick Achiever'
// }
// ,

// {
//   id: 3,
//   img: 'https://cdn.shopify.com/s/files/1/0064/5342/8271/collections/Classics-of-History_540x.jpg?v=1571866175',
//   title: 'Image - 3',
//   author: 'Written by Fredrick Achiever'
// }

// ]

// function BookList() {
//     return (
//         <section className="booklist">
//           {booksApi.map((book) => {
//             // const {img, author, title} = book
//           return (
//                     // <Book book={book} key={book.id}/>
//                     <Book {...book} key={book.id}/>
//                  )
//           } )}
//         </section>   
//     )
// }

// const Book = (props) => {

//   const {img, title, author} = props

//   const change = (e)=>{
//     console.log(e.target);
//     console.log("Hello!!!");
    
    
//   }
//     return (
//         <article className="card" onClick={()=>{console.log(title)}} onMouseOver={change}>
//             <img src={img} alt=""/>
//             <h2 style={{color:'red'}}>{title}</h2>
//             <h1 style={{letterSpacing:'5px'}}>{author}</h1>
//         </article>
//     )
// }




// ReactDOM.render(<BookList />, document.getElementById('root'))

import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(React.createElement('h1', null, 'Testing'), document.querySelector('#root'))