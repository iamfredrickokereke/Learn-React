

function BookList() {
    return (
        <>
            <Book />
        </>
    )
}

const Book = () => {
    return (
        <section>
            <Image />
            <Title />
            <Author />
        </section>
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