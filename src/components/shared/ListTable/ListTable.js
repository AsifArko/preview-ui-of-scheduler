import React from "react";
import {Table} from "semantic-ui-react";

export default class ListTable extends React.Component {
    render() {
        let {data} = this.props;
        let headers = ["ID", "Name", "progress", "Delay", "Timestamp", "Attempts", "FinishedAt", "ProcessedAt"];
        let headerCells = headers.map(header => {
            return (
                <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
            )
        });

        let rows;
        if (data !== null && data !== undefined) {
            rows = data.map((each, idx) => {
                if (idx < 11) {
                    let time = new Date(each.timestamp);
                    let finished = new Date(each.finishedOn);
                    let processed = new Date(each.processedOn);
                    return (
                        <Table.Row key={each.id}>
                            <Table.Cell>{each.id}</Table.Cell>
                            <Table.Cell>{each.name}</Table.Cell>
                            <Table.Cell>{each.progress}</Table.Cell>
                            <Table.Cell>{each.delay}</Table.Cell>
                            <Table.Cell>{time.toISOString()}</Table.Cell>
                            <Table.Cell>{each.attemptsMade}</Table.Cell>
                            <Table.Cell>{finished.toISOString()}</Table.Cell>
                            <Table.Cell>{processed.toISOString()}</Table.Cell>
                        </Table.Row>
                    )
                }
                return null
            })
        }

        return (
            <div style={{padding: '40px'}}>
                <Table celled compact={true}>
                    <Table.Header>
                        <Table.Row key={"header"}>
                            {headerCells}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {rows}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}