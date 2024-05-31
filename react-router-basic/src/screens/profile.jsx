import React from 'react';
import { Outlet } from 'react-router-dom';

const profile = () => {
    return (
        <div style={{ display: 'flex', gap: 50 }}>
            <div>
                <h1>Username: Trần Đăng Khoa</h1>
                <img src="data:image/png;base64,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" />
            </div>
            <div className='outlet'>
                <Outlet />
            </div>
        </div>
    )
}

export default profile;