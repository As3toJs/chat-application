import { connect } from 'react-redux';
import MessageListComp from '../components/MessageList';

const AddMessagesList = connect(state => ({
    messages: state.messages
}), {})(MessageListComp)

export default AddMessagesList;