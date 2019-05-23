import React from 'react';

const LogComponent = (props) => {
  let start_time = new Date(props.sync_start_timestamp * 1000);
  start_time = start_time.toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })

  let time_of_log = new Date(props.time_of_log * 1000);
  time_of_log = time_of_log.toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })

  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.content_type}</td>
      <td>{props.query_path}</td>
      <td>{start_time}</td>
      <td>{props.success_count}</td>
      <td>{props.fail_count}</td>
      <td>{props.skipped_count}</td>
      <td>{time_of_log}</td>
    </tr>
  );
};

const AllLogs = (props) => {
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
    <div className="row row-cards">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Overview</h3>
          </div>

          <div className="table-responsive">
            <table className="table card-table">
              <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Content Type</th>
                <th scope="col">Query Path</th>
                <th scope="col">Start Time</th>
                <th scope="col"># Success</th>
                <th scope="col"># Failed</th>
                <th scope="col"># Skipped</th>
                <th scope="col">Log Time</th>
              </tr>
              </thead>
              <tbody>
              {logItems}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllLogs;