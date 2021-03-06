import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Navbar from './Menu';


@inject('rootStore')
@observer
class Wellness extends Component {
    render() {
        const { rootStore } = this.props;
        if (!rootStore.ui.loginStatus()) return <Redirect to="/" />;
        return (
            <div>
                <Navbar />
                <h2>Wellness Page</h2>
            </div>
        );
    }
}

export default Wellness;
