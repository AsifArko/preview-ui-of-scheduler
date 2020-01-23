import React from "react";
import {Grid, Header, Segment, Table} from "semantic-ui-react";

export default class DetailsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    render() {
        const {data} = this.props;
        let metaRows;
        let metaHeaders = [
            "id", "name", "progress",
            "delay", "attemptsMade", "finishedOn",
            "processedOn", "timestamp", "failedReason"
        ];

        if (data !== null) {
            let keys = Object.keys(data);
            metaRows = keys.map(key => {
                let value = data[key];
                if (key === "finishedOn" || key === "processedOn" || key === "timestamp") {
                    value = new Date(data[key]).toISOString()
                }
                if (metaHeaders.includes(key)) {
                    return (
                        <Table.Row key={key}>
                            <Table.Cell><h4>{key}</h4></Table.Cell>
                            <Table.Cell key={key}>{value}</Table.Cell>
                        </Table.Row>
                    )
                }
                return null;
            })
        }

        let dataRows;
        if (data !== null) {
            let keys = Object.keys(data.data);
            dataRows = keys.map(key => {
                return (
                    <Table.Row key={key}>
                        <Table.Cell><h4>{key}</h4></Table.Cell>
                        <Table.Cell key={key}>{data.data[key]}</Table.Cell>
                    </Table.Row>
                )
            })
        }

        let optRows;
        if (data !== null) {
            let keys = Object.keys(data.opts);
            optRows = keys.map(key => {
                let value = data.opts[key];
                if (key === "timestamp") {
                    value = new Date(data.opts[key]).toISOString()
                }
                return (
                    <Table.Row key={key}>
                        <Table.Cell><h4>{key}</h4></Table.Cell>
                        <Table.Cell key={key}>{value}</Table.Cell>
                    </Table.Row>
                )
            })
        }

        return (
            <div style={{padding: '30px'}}>
                <Segment basic>
                    <Grid stackable={true} columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <div style={{padding: '5px'}}>
                                    <Header as="h4">
                                        <Header.Content>
                                            Job Meta Data
                                        </Header.Content>
                                    </Header>
                                </div>
                                <Table celled>
                                    <Table.Body>{metaRows}</Table.Body>
                                </Table>
                            </Grid.Column>

                            <Grid.Column>
                                <div style={{padding: '5px'}}>
                                    <Header as="h4">
                                        <Header.Content>
                                            Payload
                                        </Header.Content>
                                    </Header>
                                </div>
                                <Table celled>
                                    <Table.Body>{dataRows}</Table.Body>
                                </Table>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column>
                                <div style={{padding: '5px'}}>
                                    <Header as="h4">
                                        <Header.Content>
                                            Payload Options
                                        </Header.Content>
                                    </Header>
                                </div>
                                <Table celled>
                                    <Table.Body>{optRows}</Table.Body>
                                </Table>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    }
}