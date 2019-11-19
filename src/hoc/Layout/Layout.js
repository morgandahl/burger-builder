import React, {useState} from 'react';
import classes from './Layout.module.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../Aux/Aux';

const Layout = (props) => {

  const [showSideDrawer, setShowSideDrawer] = useState(true);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => {
      return !prevState;
    });
  }

  return (
    <Aux>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler}/>
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
}

export default Layout;