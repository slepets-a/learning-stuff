import React from 'react';
import {TableCell, TableRow} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

const DataTableRow = props => {
  const {
    id,
    description,
    type,
    isActive,
  } = props.membership;

  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{type}</TableCell>
      <TableCell>
        <Checkbox
          checked={isActive}
        />
      </TableCell>
    </TableRow>
  )
};

export default DataTableRow;
