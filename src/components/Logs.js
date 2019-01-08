import { Card, Table, Progress, ProgressCard } from "tabler-react";
import React from "react";

function LogComponent(props) {
  return (
    <Table.Row>
      <Table.Col>{props.id}</Table.Col>
      <Table.Col>{props.content_type}</Table.Col>
      <Table.Col>{props.query_path}</Table.Col>
      <Table.Col>{props.sync_start_timestamp}</Table.Col>
      <Table.Col>{props.success_count}</Table.Col>
      <Table.Col>{props.fail_count}</Table.Col>
      <Table.Col>{props.skipped_count}</Table.Col>
      <Table.Col>{props.time_of_log}</Table.Col>
    </Table.Row>
  );
}

function LogListComponent(props) {
  const logs = props.logs;
  const logItems = logs.map((log) =>
    <LogComponent key={log.id}
                  id={log.id}
                  content_type={log.content_type}
                  query_path={log.query_path}
                  sync_start_timestamp={log.sync_start_timestamp}
                  success_count={log.success_count}
                  fail_count={log.fail_count}
                  time_of_log={log.time_of_log}
                  skipped_count={log.skipped_count}/>
  );

  return (
    <Table responsive={true}>
      <Table.Header>
        <Table.Row>
          <Table.ColHeader>ID</Table.ColHeader>
          <Table.ColHeader>Content Type</Table.ColHeader>
          <Table.ColHeader>Query Path</Table.ColHeader>
          <Table.ColHeader>Start Time</Table.ColHeader>
          <Table.ColHeader># Success</Table.ColHeader>
          <Table.ColHeader># Failed</Table.ColHeader>
          <Table.ColHeader># Skipped</Table.ColHeader>
          <Table.ColHeader>Log Time</Table.ColHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>{logItems}</Table.Body>
    </Table>
  )
}

function LogListCardsComponent(props) {
  let logCards = [];
  for (let content_type in props.keyedData) {
    if (props.keyedData.hasOwnProperty(content_type)) {
      logCards.push(
        <ContentTypeLogCard key={content_type} title={content_type} records={props.keyedData[content_type]}/>
      )
    }
  }

  return (
    logCards
  )
}

function ContentTypeLogCard(props) {
  let records = [];

  let latestTime;
  for (let key in props.records) {
    if (props.records.hasOwnProperty(key)) {
      if (!latestTime || props.records[key].sync_start_timestamp > latestTime) {
        latestTime = props.records[key].sync_start_timestamp;
      }

      let startTime = new Date(props.records[key].sync_start_timestamp * 1000);
      let successCount = parseInt(props.records[key].success_count);
      let failedCount = parseInt(props.records[key].fail_count);
      let skippedCount = parseInt(props.records[key].skipped_count);
      let noProgressMade = failedCount + skippedCount;
      let progressWidth = 100;
      let progressColor = 'green';
      if (successCount > 0 && noProgressMade > 0) {
        progressWidth = Math.round(successCount / (successCount + noProgressMade) * 100);
      }
      if (noProgressMade > 0) {
        progressColor = (successCount > 0) ? 'yellow' : 'red';
      }

      records.push(
        <Table.Row key={props.records[key].id}>
          <Table.Col>{props.records[key].query_path}</Table.Col>
          <Table.Col>{startTime.getMonth()}/{startTime.getDate()} {startTime.getHours()}:{startTime.getMinutes()}</Table.Col>
          <Table.Col>
            <div>{successCount} Synced</div>
            {failedCount > 0 ? <div>{failedCount} Failed</div> : ''}
            {skippedCount > 0 ? <div>{skippedCount} Skipped</div> : ''}

            <Progress size={"xs"}>
              <Progress.Bar color={progressColor} width={progressWidth}/>
            </Progress>
          </Table.Col>
        </Table.Row>
      )
    }
  }

  if (latestTime) {
    latestTime = new Date(latestTime * 1000);
    latestTime = latestTime.getMonth() + '/' + latestTime.getDate() + ' at ' + latestTime.getHours() + ':' + latestTime.getMinutes();
  }

  return (
    <div className={"col col-sm-12 col-lg-6"}>
      <Card>
        <Card.Header>
          <Card.Title>{props.title}</Card.Title>
          <Card.Options>Last Synced: {latestTime}</Card.Options>
        </Card.Header>
        <Card.Body>
          <Table responsive={true}>
            <Table.Header>
              <Table.Row>
                <Table.ColHeader>Query Path</Table.ColHeader>
                <Table.ColHeader>Start Time</Table.ColHeader>
                <Table.ColHeader>Results</Table.ColHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>{records}</Table.Body>
          </Table>
        </Card.Body>
      </Card>
    </div>
  )
}

export {
  LogListComponent,
  LogListCardsComponent
}