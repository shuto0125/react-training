import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const UserIndexPage: FC = () => {
  return (
    <React.Fragment>
      <div>UserIndex</div>
      <Link to="/users/1">ユーザーA</Link>
    </React.Fragment>
  )
}