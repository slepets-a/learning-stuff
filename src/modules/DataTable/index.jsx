import React from 'react';
import {withStyles} from 'material-ui/styles';
import {compose} from 'redux';
import {connect} from 'react-redux';
import DataTableRow from '../DataTableRow';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import store from '../../store';
import {GET_MEMBERSHIPS, FILTER_MEMBERSHIPS} from "./store/actions";

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

  componentDidMount() {
    store.dispatch(GET_MEMBERSHIPS(generatedData));
  }

  render() {
    const {
      classes,
      memberships,
      filter,
      onChangeFilterHandler,
    } = this.props;
    const dataTableRows = memberships
      .filter(membership => membership.description.includes(filter))
      .map(membership => <DataTableRow key={membership.id} membership={membership}/>)
    ;

    return (
      <Paper className={classes.root}>
        <div className={classes.title}>
          <h3>Data table</h3>
          <TextField
            name="search"
            label="Search"
            margin="normal"
            value={filter}
            onChange={onChangeFilterHandler}
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

const mapStateToProps = state => {
  const {
    filter,
    memberships,
  } = state.dataTable;
  return {
    filter,
    memberships,
  }
};

const mapDispatchToProps = dispatch => ({
  onChangeFilterHandler: event => {
    dispatch(FILTER_MEMBERSHIPS(event.target.value))
  }
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(DataTable);
