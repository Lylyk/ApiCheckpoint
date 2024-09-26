// src/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListItems from './ListItems';

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Liste des utilisateurs</h2>
      <ul className="list-group">
        {listOfUsers.map(user => (
        <ListItems key={user.id} user = {user} />  
        ))}
      </ul>
    </div>
  );
}

export default UserList;