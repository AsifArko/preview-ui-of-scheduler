import React from "react";
import {Icon, Menu} from 'semantic-ui-react'

export class TopMenu extends React.Component {
    render() {
        return (
            <div className={"TopMenu"}>
                <Menu>
                    <Menu.Item name='queue'>
                        <Icon name={"circle"}/>
                        <b>Queue</b>
                    </Menu.Item>

                    <Menu.Item name='passed-jobs'>
                        Passed List
                    </Menu.Item>

                    <Menu.Item name='passed-jobs'>
                        Waiting List
                    </Menu.Item>

                    <Menu.Item name='failed-jobs'>
                        Failed List
                    </Menu.Item>

                    <Menu.Item name='failed-jobs'>
                        Stalled List
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}