import React from 'react';
import { connect } from 'react-redux';
import SidebarComp from '../components/Sidebar';

const Sidebar = (props) => {
    return (
        <SidebarComp
            users={props.users}
        />
    )
}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps)(Sidebar);
