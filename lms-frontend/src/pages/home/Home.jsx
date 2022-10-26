import React, { Component } from 'react';
import AppHeaderBar from '../../components/appbar/AppHeaderBar';
import AppDrawer from '../../components/drawer/AppDrawer';

class Home extends Component {
    render() {
        return (
            <div>
                <AppHeaderBar/>
                <AppDrawer/>
            </div>
        );
    }
}

export default Home;