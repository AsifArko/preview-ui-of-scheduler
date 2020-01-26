import React from "react";
import {Icon, Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";

export class TopMenu extends React.Component {
    render() {
        return (
            <div className={"TopMenu"}>
                <Menu>
                    <Link to={"/"}>
                        <Menu.Item name='queue'>
                            <Icon name={"circle"}/>
                            <b>Queue</b>
                        </Menu.Item>
                    </Link>

                    <Link to={"completed"}>
                        <Menu.Item name='passed-jobs'>
                            Completed List
                        </Menu.Item>
                    </Link>

                    <Link to={"active"}>
                        <Menu.Item name='active-jobs'>
                            Active List
                        </Menu.Item>
                    </Link>

                    <Link to={"waiting"}>
                        <Menu.Item name='waiting-jobs'>
                            Waiting List
                        </Menu.Item>
                    </Link>

                    <Link to={"delayed"}>
                        <Menu.Item name='delayed-jobs'>
                            Delayed List
                        </Menu.Item>
                    </Link>

                    <Link to={"failed"}>
                        <Menu.Item name='failed-jobs'>
                            Failed List
                        </Menu.Item>
                    </Link>
                </Menu>
            </div>
        )
    }
}