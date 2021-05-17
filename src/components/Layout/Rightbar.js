import React, { Fragment } from 'react';

import ToContact from '../Contact/ToContact';
import ToProfile from '../Profile/ToProfile';

export default function Rightbar() {
    return (
        <Fragment>
            <ToContact />
            <ToProfile />
        </Fragment>
    )
}
