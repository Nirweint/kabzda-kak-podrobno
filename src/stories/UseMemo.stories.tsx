import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo',
}

export const Example1 = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

   resultA = useMemo(() => {
       let tempResultA = 1
       for (let i = 1; i <= a; i++) {
           let fake = 0;
           while(fake < 10000000) {
               fake ++;
               const fakeValue = Math.random()
           }
           tempResultA = tempResultA * i
       }
       return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </div>
    )
}



const UsersSecret = (props: {users: Array<string>}) => {
    console.log("Users Render")
    return (
        <div>
            {props.users.map((us, i) => {
                return (
                    <div key={i}>{us}</div>
                )
            })}
        </div>
    )
}

const Users = React.memo(UsersSecret)


export const Example2 = () => {
    console.log('example2 ')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Alex", "Sofi", "Pasha", "Oleg", "Katya"])

    const newArray = useMemo(() => {
       return  users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)} >+</button>
            {counter}
            <Users users={newArray}/>
        </div>
    )
}



const BooksSecret = (props: {books: Array<string>, addBook: () => void}) => {
    console.log("Books Render")
    return (
        <div>
            <button onClick={props.addBook} >add book</button>
            {props.books.map((book, i) => {
                return (
                    <div key={i}>{book}</div>
                )
            })}

        </div>
    )
}
const Book = React.memo(BooksSecret)

export const LikeUseCallbackMemo = () => {
    console.log('LikeUseCallbackMemo')

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "Oleg", "HTML"])

    const addBook = () => {
        const newBooks = [...books, "ANGULAR" + new Date().getTime()]
        setBooks(newBooks)
    }

    const memorizedAddBookWithUseMemo = useMemo(() => addBook, [books] )
    const memorizedAddBookWithUseCallback = useCallback(addBook, [books] )

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)} >+</button>

            {counter}
            <Book books={books} addBook={memorizedAddBookWithUseCallback} />
        </div>
    )
}