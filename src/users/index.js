import {useEffect, useState} from "react";
import * as service from '../services/users-service'
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "../services/users-thunks.js";

const UserList = () => {
    // const [users, setUsers] = useState([])
    const {users} = useSelector((state) => state.users)
    // const findAllUsers = async () => {
    //     const users = await service.findAllUsers()
    //     setUsers(users)
    // }
    const dispatch = useDispatch()
    useEffect(() => {
        // findAllUsers()
        dispatch(findAllUsersThunk())
    }, [])
    return(
        <>
            <h1>Users {users.length}</h1>
            <ul className="list-group">
                {
                    users.map((user) =>
                    <li className="list-group-item"
                        key={user._id}>
                        {user.username}
                    </li>
                    )
                }
            </ul>
        </>
    )
}

export default UserList