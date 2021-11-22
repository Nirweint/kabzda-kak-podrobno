import React, {useState} from 'react';

export default {
    title: "React.memo demo",
}


const NewMessageCounter = (props: { count: number }) => {
    return (
        <div>
            {props.count}
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


export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Alex", "Sofi", "Pasha", "Oleg", "Katya"])

    const AddUser = () => {
        setUsers([...users, "Sveta " + new Date().getTime()])
    }

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)} >+</button>
            <button onClick={AddUser} >Add User</button>
            <NewMessageCounter count={counter}/>
            <Users users={users}/>
        </div>
    )
}