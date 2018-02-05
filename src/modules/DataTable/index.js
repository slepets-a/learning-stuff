import React from 'react';
import {withStyles} from 'material-ui/styles';
import DataTableRow from '../DataTableRow';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import store from '../../store';
import {FILTER_MEMBERSHIPS_PHRASE} from "./store/actions";

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
      memberships: generatedData,
      filteredMemberships: generatedData,
    };
  }

  filterMemberships = (filter, memberships) => memberships.filter(membership => membership.description.includes(filter));

  onChangeFilterHandler = (event) => {
    const {
      value,
    } = event.target;
    //
    store.dispatch(FILTER_MEMBERSHIPS_PHRASE(value));
    store.subscribe(() => {
      console.log(store.getState());
    });
    //
    this.setState((prevState) => ({
      filter: value,
      filteredMemberships: this.filterMemberships(value, prevState.memberships),
    }))
  };

  render() {
    const {
      classes,
    } = this.props;
    const {
      filter,
      filteredMemberships,
    } = this.state;
    const dataTableRows = filteredMemberships.map(membership => <DataTableRow key={membership.id} membership={membership}/>);

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
            {dataTableRows}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(DataTable);
