import React ,{ useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from './UserCard'
import './UserList.css'

function UserList() {
    const [data, setData] = useState([]); // where to store the returned data
    // const [error, setError] = useState(null); // where to store the coming errors
    useEffect(() => {
    function fetchData() {
        // the function to fetch data from the api
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
       // handle success
    setData(response.data);
    })
    // .catch(function (error) {
    //      // handle error
    // setError(error);
    // console.log(error)
    // })
}

fetchData();
}, []);
    return (
        <div className="UserList">
            {data.map((e,i) => <UserCard user={e} key={i}/>)}
        </div>
    )
}

export default UserList
