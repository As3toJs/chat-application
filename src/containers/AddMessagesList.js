import React from 'react';
import { connect } from 'react-redux';
import MessageListComp from '../components/MessageList';

const AddMessagesList = (props) => {
    return (
        <MessageListComp
            messages={props.messages}
        />
    )
}
const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps)(AddMessagesList);
