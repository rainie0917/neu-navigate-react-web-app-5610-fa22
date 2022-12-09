import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk, findUserByIdThunk} from "../services/users-thunks.js";
import {findAllUsers, findUserById} from "../services/users-service";

const Users = () => {
    const {users, loading} = useSelector((state) => state.users)

    console.log(users);
    const dispatch = useDispatch()
    useEffect(() => {
        const res = findAllUsersThunk()
        dispatch(res)
    }, [dispatch])

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

export default Users