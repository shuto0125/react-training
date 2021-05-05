import { useState, useEffect } from "react";

import userSearvice from "../services/users";

//userののstateと更新ロジックを持つフック
export const useUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userSearvice.getAll().then((users) => {
      setUsers(users.reverse());
    });
  }, []);
  return { users };
};
