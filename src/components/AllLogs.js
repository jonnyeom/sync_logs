import React from 'react';

const LogComponent = (props) => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.content_type}</td>
      <td>{props.query_path}</td>
      <td>{props.sync_start_timestamp}</td>
      <td>{props.success_count}</td>
      <td>{props.fail_count}</td>
      <td>{props.skipped_count}</td>
      <td>{props.time_of_log}</td>
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