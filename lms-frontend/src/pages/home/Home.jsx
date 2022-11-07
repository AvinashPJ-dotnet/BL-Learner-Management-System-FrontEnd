import React, { Component } from 'react';
import AppDrawer from '../../components/drawer/AppDrawer';
import RecruitmentCard from '../../components/drawer/RecruitmentCard/RecruitmentCard';
import OnBoarding from '../../components/onBoarding/OnBoarding';


class Home extends Component {
    render() {
        return (
            <div>
                <AppDrawer/>
                {/* <RecruitmentCard/> */}
                {/* <OnBoarding/> */}

            </div>
        );
    }
}

export default Home;