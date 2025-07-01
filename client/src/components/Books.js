const user = {
    id: 94342,
    userName: "Frank1234"
}

const books = [
    {
        id: 12334,
        title: "Chicken"
    },
    {
        id: 19392,
        title: "Pasta"
    },
    {
        id: 22323,
        title: "Steak"
    },
]

const Books = () => {
    return (
        <div>
            <h2>
                {user.userName}'s Favorite Foods
            </h2>
            <ul>
                {
                    books.map((book) => <li key={book.id}>{book.title}</li>)
                }
            </ul>
        </div>
    )
}

export default Books;