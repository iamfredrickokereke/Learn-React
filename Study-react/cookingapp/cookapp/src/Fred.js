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
    return <img src="https://o2tvseries.com/res/tv_serials/57.jpg" alt=""/>
}
const Title= () => {
    return <h2>Image - 1</h2>
}
const Author= () => {
    return <h1>Written by Fredrick Achiever</h1>
}



export default BookList