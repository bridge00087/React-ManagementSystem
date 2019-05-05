import React, { Component } from 'react';
import Customer from './Components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    oberflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '山田　太郎',
  'birthday': '961222',
  'gender': '男',
  'job': '大学生'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '鈴木　二郎',
  'birthday': '970521',
  'gender': '男',
  'job': '会社員'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': '宮崎　優子',
  'birthday': '890801',
  'gender': '女',
  'job': '会社員'
}
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>番号</TableCell>
              <TableCell>イメージ</TableCell>
              <TableCell>お名前</TableCell>
              <TableCell>生年月日</TableCell>
              <TableCell>性別</TableCell>
              <TableCell>職業</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
