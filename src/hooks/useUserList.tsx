import { useState, useEffect } from "react";

import userSearvice from "../services/users";

//userののstateと更新ロジックを持つフック
export const useUserList = () => {
  // User の state と user を更新する関数
  const [users, setUsers] = useState([]);

  //このカスタムフックを利用いているコンポーネントがマウントされたら User を取得する
  useEffect(() => {
    userSearvice.getAll().then((users) => {
      setUsers(users.reverse());
    });
  }, []);

  // IDが一致したUserの状態を更新する
  const toggleUser = (id?: any, completed?: any) => {
    const user: any = users.find((user: any) => user.id === id);

    const newUser = { ...user, completed: !completed };
    console.log(newUser.id + "newUser.id");
    // console.log(userSearvice);
    userSearvice.update(id, newUser).then((updatedUser: any) => {
      console.log(updatedUser + "desuyo updatedUser");
      const newUsers: any = users.map((user: any) =>
        user.id !== updatedUser.id ? user : updatedUser
      );
      console.log(id + "setUsers前");

      setUsers(newUsers);
    });
  };
  // IDが一致したUserの状態を削除する
  const deleteUser = (id: any) => {
    userSearvice.delete(id).then((deletedUserId) => {
      const newUsers = users.filter((user: any) => user.id !== deletedUserId);
      setUsers(newUsers);
    });
  };

  return { users, toggleUser, deleteUser };
};
