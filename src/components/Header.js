import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      selectedItem: ''
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }
  handleClose () {
    this.setState({open: false});
  }

  render() {
    const navbarStyle = {
      zIndex: '1',
    }
    return (
      <div>
        <div className="header">
        <span className="title">Pizza JukeBox</span>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;