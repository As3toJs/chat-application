import { connect } from 'react-redux'
import SidebarComp from '../components/Sidebar'

const Sidebar = connect(state => ({
    users: state.users
}), {})(SidebarComp)

export default Sidebar;