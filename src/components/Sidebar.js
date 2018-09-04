import React from 'react';

const Sidebar = ({ users }) => {
    return (
        <div className="sidebar">
            <ul>{users.map(u => {
                return (
                    <li key={u.id}>
                        {u.name}
                    </li>
                )
            })}</ul>
        </div>
    )
}

export default Sidebar;