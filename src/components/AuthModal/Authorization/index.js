import React, { Component } from 'react';
import { Tabs } from 'antd';
import Login from "./Login";
import Register from './Register';
import "./__authorization.scss";
import Utilities from '../../../utilities';
const { TabPane } = Tabs;

class Authorization extends Component {

    constructor(props) {
        super(props);
        this.utilities = new Utilities();
    }
    

    render() {

        const authTabStyle = {
            width: "380px",
            paddingLeft: "70px"
        }

        return (
            <div>
                <Tabs
                    defaultActiveKey="1"
                    size={"large"}
                    tabBarStyle={authTabStyle}>
                    <TabPane tab="Login" key="1" >
                        <Login 
                            utilities={this.utilities}/>
                    </TabPane>
                    <TabPane tab="Register" key="2">
                        <Register 
                            utilities={this.utilities}/>
                    </TabPane>
                </Tabs>
            </div>
        )

    }

}

export default Authorization;