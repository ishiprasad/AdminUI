import {
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from '@mui/material';
  
  import React from 'react';
  import ActionBtn from './ActionBtn';
  import UserEdit from './UserEdit';
  
  const User = ({
    deleteUser,
    handleDelete,
    handleAllCheckBox,
    handleCheckBox,
    userOnCurrentPage,
    form,
    edit,
    handleEdit,
    handleFormChange,
    handleSubmitForm,
  }) => {
    return (
      <TableContainer component={Paper}>
        <Table>
          {/*  */}
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  onClick={handleAllCheckBox}
                  checked={deleteUser.length === 10}
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {userOnCurrentPage.map((user) => {
              return edit === user.id ? (
                <UserEdit
                  key={user.id}
                  handleSubmitForm={handleSubmitForm}
                  handleFormChange={handleFormChange}
                  form={form}
                />
              ) : (
                <TableRow key={user.id}>
                  <TableCell>
                    <Checkbox
                      id={user.id}
                      checked={deleteUser.includes(user.id)}
                      onChange={handleCheckBox}
                    />
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <ActionBtn
                      id={user.id}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default User;
  