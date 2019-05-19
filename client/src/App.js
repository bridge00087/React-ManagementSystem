import React, { Component } from 'react';
import Customer from './Components/Customer';
import CustomerAdd from './Components/CustomerAdd';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    oberflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    magin: theme.spacing.unit * 2
  }
})

/* ReactのComponentライフサイクル

1) constructor()
2) componentWillMount()
3) render()
4) componentDidMount()

*/

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi().then(res => this.setState({customers: res})).catch(err => console.log(err));
  }

  componentDidMount() {
    // 0.02秒ごとにprogress(ローディングバー)を実行
    this.timer = setInterval(this.progress, 20);
　  // APIを非同期でよび出す
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  // サーバーから個客リストを取得する
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  // ローディングバーの定義
  progress =() => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
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
              <TableCell>設定</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c => {
              return <Customer　stateRefresh={this.stateRefresh} key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
            }) :
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
      <CustomerAdd stateRefresh={this.stateRefresh}/>
      </div>
      
    );
  }
}

export default withStyles(styles)(App);
