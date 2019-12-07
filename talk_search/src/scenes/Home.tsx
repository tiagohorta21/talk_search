// Modules
import React from "react";
// Components
import { Header, Icon, Menu } from "semantic-ui-react";

const Home: React.FunctionComponent = () => {
    return (
        <Menu>
            <Menu.Item>
                <Icon
                    circular
                    inverted
                    color={"teal"}
                    name={"microphone"}
                    size={"large"}
                />
            </Menu.Item>
            <Menu.Item name={"application name"}>
                <Header size="medium">{"Talk Search"}</Header>
            </Menu.Item>
        </Menu>
    );
};

export default Home;
