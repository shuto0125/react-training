import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const TopPage: FC = () => {
  return (
    <React.Fragment>
      <div>TopPage</div>
      <Link to="/users">ユーザー一覧</Link>
    </React.Fragment>
  )
}