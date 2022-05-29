import { Tabs } from 'antd';
import "./__authorization.scss";
const { TabPane } = Tabs;

const Authorization = () => {


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
                    Login
                </TabPane>
                <TabPane tab="Register" key="2">
                    Register
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Authorization;