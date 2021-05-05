import React, { FC } from "react";

type Users = {
  users: any;
  // id: number;
  // name: string;
  // age: number;
};

const UserList: FC<Users> = ({ users }) => {
  const userList = users.map((user: any) => {
    return (
      <li key={user.id}>
        {user.name}
        <button>削除</button>
      </li>
    );
  });
  return <ul>{userList}</ul>;
};

export default UserList;
