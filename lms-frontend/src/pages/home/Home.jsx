import React, { Component } from 'react';
import AppDrawer from '../../components/drawer/AppDrawer';
import RecruitmentCard from '../../components/drawer/RecruitmentCard/RecruitmentCard';


class Home extends Component {
    render() {
        return (
            <div>
                <AppDrawer/>
                <RecruitmentCard/>
            </div>
        );
    }
}

export default Home;