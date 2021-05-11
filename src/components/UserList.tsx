import React, { FC } from "react";

type Users = {
  users: any;
  toggleUser: any;
  // id: number;
  // name: string;
  // age: number;
};

const UserList: FC<Users> = ({ users, toggleUser }) => {
  const userList = users.map((user: any) => {
    const label = user.completed ? "作業中にする" : "完了にする";
    return (
      <li key={user.id}>
        {user.name}
        <button onClick={() => toggleUser(user.id, user.completed)}>
          {label}
        </button>
        <button>削除</button>
      </li>
    );
  });
  return <ul>{userList}</ul>;
};

export default UserList;
