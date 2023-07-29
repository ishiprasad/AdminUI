import React, { useState, useEffect } from 'react'
import{SearchBar,Pagtation,User} from './components'
import { Stack } from '@mui/material'
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [deleteUser, setDeleteUser] = useState([]);

  const [currentPage, setCurrentPage] = useState(1)
  const userPerPage = 10;

  const [form, setForm] = useState({});
  const [edit, setEdit] = useState(null)

  const [searchTerm, setSearchTerm] = useState('');

  const searchTermLowercase = searchTerm ? searchTerm.toLowerCase().trim() : '';

  let filteredUsers = users.filter(({ id, name, email, role }) => (
    !searchTermLowercase ||
    ` ${id.toLowerCase().trim()}  ${name.toLowerCase().trim()} 
     ${email.toLowerCase().trim()}${role.toLowerCase().trim()}`.includes(searchTermLowercase)
  ))
  const totalPosts = Math.ceil(users.length / userPerPage);
  const indexOfLastPage = currentPage * userPerPage;
  const indexOfFirstPage = indexOfLastPage - userPerPage;

  const userOnCurrentPage = filteredUsers.slice(indexOfFirstPage, indexOfLastPage)

  const handleAllDelete = (e) => {
    setUsers(users.filter((user) => !deleteUser.includes(user.id)));
    setDeleteUser([]);
  }
  const handleAllCheckBox = () => {
    if (deleteUser.length === userPerPage) {
      setDeleteUser([]);
    } else {
      setDeleteUser(userOnCurrentPage.map((item) => item.id));
    }
  };
  const handleCheckBox = (e) => {
    if (deleteUser.includes(e.currentTarget.id)) {
      setDeleteUser(
        deleteUser.filter((user) => user !== e.currentTarget.id)
      );
    } else {
      setDeleteUser([...deleteUser, e.currentTarget.id])
    }
  }
  const handleDelete = (e) => {
    setUsers(users.filter((user) => user.id !== e.currentTarget.id))
  }
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }



  const handleEdit = (e) => {
    const userId = e.currentTarget.id;
    setEdit(userId);
    const userEdit = users.find((user) => user.id === userId);
    setForm({
      name: userEdit.name,
      email: userEdit.email,
      role: userEdit.role,
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.currentTarget;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === edit
          ? { ...user, name: form.name, email: form.email, role: form.role }
          : user
      )
    );
    setEdit(null);
  };


  const fetchData = async () => {
    const URL = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';
    try {
      const { data } = await axios.get(URL)
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Stack>
      <SearchBar
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      />

      <User users={users}
        deleteUser={deleteUser}
        handleDelete={handleDelete}
        handleAllCheckBox={handleAllCheckBox}
        handleCheckBox={handleCheckBox}
        userOnCurrentPage={userOnCurrentPage}
        edit={edit}
        handleEdit={handleEdit}

        form={form}
        handleFormChange={handleFormChange}
        handleSubmitForm={handleSubmitForm}
      />

      <Pagtation
        totalPosts={totalPosts}
        currentPage={currentPage}
        userPerPage={userPerPage}
        handleAllDelete={handleAllDelete}
        handlePagination={handlePagination}
      />

    </Stack>
  )
}

export default App