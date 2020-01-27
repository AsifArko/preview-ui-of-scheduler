import React from "react";
import {Icon, Pagination, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class ListTable extends React.Component {
    handlePageChange = (e, pageInfo) => {
        const {callback} = this.props;
        callback(pageInfo.activePage)
    };

    onRetryClick = (id) => {
        const {retryCallback} = this.props;
        retryCallback(id);
    };

    render() {
        let {data} = this.props;
        let headers = ["ID", "Name", "progress", "Delay", "Timestamp", "Attempts", "FinishedAt", "ProcessedAt", "Action"];
        let headerCells = headers.map(header => {
            return (
                <Table.HeaderCell key={header} textAlign={"center"}>{header}</Table.HeaderCell>
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
                            <Table.Cell textAlign={"center"}>{each.id}</Table.Cell>
                            <Table.Cell textAlign={"center"}>{each.name}</Table.Cell>
                            <Table.Cell textAlign={"center"}>{each.progress}</Table.Cell>
                            <Table.Cell textAlign={"center"}>{each.delay}</Table.Cell>
                            <Table.Cell textAlign={"center"}>{time.toISOString()}</Table.Cell>
                            <Table.Cell textAlign={"center"}>{each.attemptsMade}</Table.Cell>
                            <Table.Cell textAlign={"center"}>{finished.toISOString()}</Table.Cell>
                            <Table.Cell textAlign={"center"}>{processed.toISOString()}</Table.Cell>
                            <Table.Cell textAlign={"center"}>
                                <Link to={`/job/${each.id}`}>
                                    <Icon name={"bars"}/>
                                </Link>
                                {(this.props.retry === true) ? (
                                    <Icon name={"wrench"} onClick={() => {
                                        this.onRetryClick(each.id)
                                    }}/>
                                ) : null}
                            </Table.Cell>
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
                <div style={{float: 'right'}}>
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={10}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        )
    }
}