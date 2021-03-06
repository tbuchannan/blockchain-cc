import React from 'react';
import '../../styles/balance.css';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

class Balance extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.info.address !== nextProps.info.address ||
    this.props.info.total_received !== nextProps.info.total_received ||
    this.props.info.total_sent !== nextProps.info.total_sent ||
    this.props.info.final_balance !== nextProps.info.final_balance ? true : false;
  }
  render() {
    const { info } = this.props;
    const balanceKeys = [1, 2, 3, 4, 5];
    const balanceInfo = !info.address ? [] : [
      <Divider />,
      <ListItem key={balanceKeys[0]}>Address: {info.address}</ListItem>,
      <ListItem key={balanceKeys[1]}>Total Received: {info.total_received / 100000000} BTC</ListItem>,
      <ListItem key={balanceKeys[2]}>Total Sent: {info.total_sent / 100000000} BTC</ListItem>,
      <ListItem key={balanceKeys[3]}>Remaining Balance: {info.final_balance / 100000000} BTC</ListItem>,
    ];

    return (
      <div className="balance">
        <Paper className="paper" zDepth={1} >
          <List>
            <ListItem key={balanceKeys[4]} open={true} nestedItems={balanceInfo}>Balance</ListItem>
          </List>
        </Paper>
      </div>
    );
  }
}

export default Balance;