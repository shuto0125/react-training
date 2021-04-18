import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

export const TopPage: FC = () => {
  return (
    <React.Fragment>
      <div>TopPage</div>
      <Link to="/users">ユーザー一覧</Link>
      <div>
        <Button variant="contained" color="primary">Hello World</Button>
      </div>
    </React.Fragment>
  )
}