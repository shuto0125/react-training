import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import UserList from "../../components/UserList";
import { useUserList } from "../../hooks/useUserList";

export const UserIndexPage: FC = () => {
  // START: useEffect のサンプル
  // コンポーネントを起動したとき一度だけ実行するには空の配列を渡す
  useEffect(() => {
    // apiの取得とかを行うといい
    console.log("読み込み時一度呼ばれる");
  }, []);

  // 値が変更されたタイミングで再度実行される(ReactDevToolでStateをいじったりするとテストできます)
  const [example, setExample] = useState({ value: 0 });
  useEffect(() => {
    console.log("値の変更ごとに呼ばれる");
  }, [example]);

  // コンポーネントがなくなるタイミングで実行される
  useEffect(() => {
    return () => {
      console.log("なくなるタイミングで一度実行される");
    };
  }, []);
  // END: useEffect のサンプル

  const { users, toggleUser } = useUserList();

  return (
    <React.Fragment>
      <h1>UserIndex</h1>
      <Link to="/users/1">ユーザーA</Link>
      {/* {console.log(toggleUser)} */}
      <UserList users={users} toggleUser={toggleUser} />
    </React.Fragment>
  );
};
