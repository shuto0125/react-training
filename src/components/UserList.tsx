import React from "react";

function UserList({ users }) {
  const userList = users.map((user) => {
    return (
      <li key={user.id}>
        {user.name}
        <button>削除</button>
      </li>
    );
  });
  return <ul>{userList}</ul>;
}
