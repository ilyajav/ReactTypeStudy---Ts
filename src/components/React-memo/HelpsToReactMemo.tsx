 import React, {useCallback, useMemo, useState} from "react";


const UsersSecret = (props: {users: Array<string>}) =>{
        console.log('UsersSecret')
         return <div>{
             props.users.map((u, i) => <div key={i}>{u}</div>)
         }
         </div>
}


const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () =>{
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Ily', 'Valera', 'Artem', 'Katya'])
    const newArray = useMemo(()=>{
       const newArray = users.filter(u => u.toLowerCase().indexOf('a') > - 1)
        return newArray
    }, [users])

    const addUser = () =>{
        const newUsers = [...users, 'Sveta ' + new Date().getTime()];
        setUsers(newUsers)
    }
     return(
         <>
             <button onClick={() => setCounter(counter + 1)}>+</button>
             <button onClick={() => addUser()}>add user</button>
             {counter}
             <Users users={newArray} />
         </>
     )
}

 export const LikeUseCallback = () =>{
     console.log('LikeUseCallback')
     const [counter, setCounter] = useState(0)
     const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])
     const memoizedAddBook = useMemo(() => {return () =>{
         const newUsers = [...books, 'Angular ' + new Date().getTime()];
         setBooks(newUsers)
     }  }, [books])

     const memoizedAddBook2 = useCallback( () =>{
         const newUsers = [...books, 'Angular ' + new Date().getTime()];
         setBooks(newUsers)
        }, [books])
     return(
         <>
             <button onClick={() => setCounter(counter + 1)}>+</button>
             {counter}
             <Book addBook={memoizedAddBook2} />
         </>
     )
 }

 type BooksSecretType  ={
    addBook:() => void
 }

 const BooksSecret = (props: BooksSecretType ) =>{
     console.log('BooksSecret')
     return <div>
         <button onClick={() => props.addBook()}>add user</button>
     </div>
 }


 const Book = React.memo(BooksSecret)
