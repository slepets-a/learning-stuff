import React from 'react';
import {withStyles} from 'material-ui/styles';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  root: {
    margin: `0 ${theme.spacing.unit * 2}px`,
    padding: theme.spacing.unit,
  },
  title: {
    alignItems: 'baseline',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 2rem 0 1rem',
  },
});

const generatedData = [
  {
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ipsam.',
    type: 'free',
    isActive: false,
  },
  {
    id: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum debitis mollitia omnis reprehenderit sed.',
    type: 'trial',
    isActive: true,
  },
  {
    id: 3,
    description: 'Lorem ipsum dolor sit amet.',
    type: 'premium',
    isActive: false,
  },
  {
    id: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    type: 'premium',
    isActive: false,
  },
  {
    id: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, modi molestiae.',
    type: 'trial',
    isActive: true,
  },
  {
    id: 6,
    description: 'Lorem ipsum dolor.',
    type: 'free',
    isActive: false,
  },
];

class DataTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }

  render() {
    const {
      classes,
    } = this.props;
    const {
      filter,
    } = this.state;
    const tableRows = generatedData.map(({id, description, type, isActive}) => {
      return (
        <TableRow key={id}>
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
    });

    onChangeFilterHandler = (event) => {
      console.log(event);
    };

    return (
      <Paper className={classes.root}>
        <div className={classes.title}>
          <h3>Data table</h3>
          <TextField
            name="search"
            label="Search"
            margin="normal"
            value={filter}
            onChange={this.onChangeFilterHandler}
          />
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(DataTable);
