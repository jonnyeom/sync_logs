import React from 'react';

const ContentTypeLog = (props) => {
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

      let progressStyle = {
        width: progressWidth + "%",
      };
      console.log(progressStyle);

      records.push(
        <tr>
          <td>{props.records[key].query_path}</td>
          <td>{startTime.getMonth()}/{startTime.getDate()} {startTime.getHours()}:{startTime.getMinutes()}</td>
          <td>
            <div>{successCount} Synced</div>
            {failedCount > 0 ? <div>{failedCount} Failed</div> : ''}
            {skippedCount > 0 ? <div>{skippedCount} Skipped</div> : ''}

            <div className="progress progress-xs">
              <div className={`progress-bar bg-${progressColor}`} role="progressbar"
                   style={{width: progressWidth + '%'}} aria-valuenow={`"${progressWidth}"`}
                   aria-valuemin="0" aria-valuemax="100"/>
            </div>
          </td>
        </tr>
      )
    }
  }

  if (latestTime) {
    latestTime = new Date(latestTime * 1000);
    latestTime = latestTime.getMonth() + '/' + latestTime.getDate() + ' at ' + latestTime.getHours() + ':' + latestTime.getMinutes();
  }

  return (
    <div className="row row-cards">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">{props.title}</h3>
            <div className="card-options">
              Last Synced: {latestTime}
            </div>
          </div>

          <div className="table-responsive">
            <table className="table card-table">
              <thead>
              <tr>
                <th scope="col">Query Path</th>
                <th scope="col">Start Time</th>
                <th scope="col">Results</th>
              </tr>
              </thead>
              <tbody>{records}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ContentTypeLog;