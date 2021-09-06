import React from 'react'
import './topBar.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PrimarySearchAppBar from './AppBar';
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     root: {
//       backgroundColor: 'red',
//       height : '26px',
//     },
//   });

function TopBar() {

    // const classes = useStyles();

    return (
        <div>
            <div className="wrap">
            <div className="wrap_left">
                <div className="float_left">
                    <span className="text_wrap">
                        Hi! Sign in or register
                    </span>
                </div>
                <div className="float_left">
                    <span className="text_wrap">
                        Daily Deals
                    </span>
                </div>
                <div className="float_left">
                    <span className="text_wrap">
                        Help & Contact
                    </span>
                </div>
            </div>
            <div className="wrap_right">
                <div className="float_left">
                    <span className="text_wrap">
                        Ship to
                    </span>
                </div>
                <div className="float_left">
                    <span className="text_wrap">
                        Sell
                    </span>
                </div>
                <div className="float_left">
                    <span className="text_wrap">
                        My eBay
                    </span>
                </div>
                <div className="float_left">
                    <NotificationsNoneIcon />
                </div>
                <div className="float_left">
                    <ShoppingCartIcon />
                </div>
            </div>

            {/* <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <IconButton  color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="sm" color="inherit" >
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar> */}
        </div>
        <hr className="hr1"/>
        </div>
        
    )
}

export default TopBar
