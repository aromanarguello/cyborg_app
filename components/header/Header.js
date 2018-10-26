import React, { Component } from 'react';
import {
  withStyles,
  Button,
  List,
  Divider,
  ListItem,
  ListItemText,
  Drawer,
} from '@material-ui/core';
import styled from 'styled-components';

const styles = {
  list: { width: 250 },
  fullList: { width: 'auto' },
};

const DrawerButton = styled.div`
      float: right;
`;
class SideBar extends Component {
    state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
    };


    toggleDrawer = (side, open) => () => {
      this.setState({ [side]: open });
    };

    render() {
      const { classes } = this.props;
      const { left } = this.state;

      const sideList = (
        <div className={classes.list}>
          <List>
            {['Perfil', 'Ordenes', 'Contactenos'].map(text => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map(text => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
      return (
        <div>
          <DrawerButton>
            <Button onClick={this.toggleDrawer('left', true)}>Menu</Button>
          </DrawerButton>
          <Drawer open={left} onClose={this.toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              {sideList}
            </div>
          </Drawer>
        </div>
      );
    }
}

export default withStyles(styles)(SideBar);