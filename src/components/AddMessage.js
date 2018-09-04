import React from 'react';

const AddMessage = (props) => {
    const onHandleKeyPress = (e) => {
        console.log("Key pressed:");
        if (e.key === 'Enter') {
            console.log("Enter Pressed");
            props.message(this.input.value, 'Me')
            this.input.value = '';
        }
    };

    return (
        <div className="new-message">
            <input
                onKeyPress={(e) => onHandleKeyPress(e)}
                type="text"
                ref={(node) => { this.input = node }} />
        </div>
    )
}

export default AddMessage;