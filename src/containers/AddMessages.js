import React from 'react';
import { connect } from 'react-redux';
import AddMessageComponent from '../components/AddMessage';
import { addMessage } from '../actions';

const AddMessages = (props) => {
    return (
        <AddMessageComponent
            message={props.onMessageHandle}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    onMessageHandle: (message, author) => {
        dispatch(addMessage(message, author))
    }
})

export default connect(undefined, mapDispatchToProps)(AddMessages)
