import React from "react";
import {Card, Menu} from "semantic-ui-react";

export class Statistics extends React.Component {
    render() {
        return (
            <div style={{padding: '10px'}}>
                <Menu borderless={true} compact={true}>
                    <Menu.Item>
                        <Card>
                            <Card.Content header={"Active"}/>
                            <Card.Content extra>
                                36
                            </Card.Content>
                        </Card>
                    </Menu.Item>
                    <Menu.Item>
                        <Card>
                            <Card.Content header={"Waiting"}/>
                            <Card.Content extra>
                                21
                            </Card.Content>
                        </Card>
                    </Menu.Item>
                    <Menu.Item>
                        <Card>
                            <Card.Content header={"Completed"}/>
                            <Card.Content extra>
                                187
                            </Card.Content>
                        </Card>
                    </Menu.Item>
                    <Menu.Item>
                        <Card>
                            <Card.Content header={"Failed"}/>
                            <Card.Content extra>
                                13
                            </Card.Content>
                        </Card>
                    </Menu.Item>
                    <Menu.Item>
                        <Card>
                            <Card.Content header={"Stalled"}/>
                            <Card.Content extra>
                                7
                            </Card.Content>
                        </Card>
                    </Menu.Item>
                    <Menu.Item>
                        <Card>
                            <Card.Content header={"Delayed"}/>
                            <Card.Content extra>
                                1
                            </Card.Content>
                        </Card>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}