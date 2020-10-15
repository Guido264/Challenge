import React from 'react';

import Header from './Header';
import TableContent from './TableContent';

const Table = () => {

  return (
    <div className="table">
      <Header title="Products content" />
      <TableContent />
    </div>
  );
}

export default Table;
