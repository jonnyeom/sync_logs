import React from 'react';
import Configs from '../config/Configs';

class ContentTypeLog extends React.Component {

  static getProgressBarPiece(color, count, total) {
    let width = Math.round(count / total * 100);

    return (
      <div className={`progress-bar bg-${color}`} role="progressbar"
           style={{width: width + '%'}} aria-valuenow={width}
           aria-valuemin="0" aria-valuemax="100"/>
    )
  }

  static getProgressbar(record) {
    let startTime = new Date(record.sync_start_timestamp * 1000);
    startTime = startTime.toLocaleString('en-US', {
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    })
    let successCount = parseInt(record.success_count);
    let failedCount = parseInt(record.fail_count);
    let skippedCount = parseInt(record.skipped_count);
    let totalCount = successCount + failedCount + skippedCount;

    return (
      <tr>
        <td>{record.query_path}</td>
        <td>{startTime}</td>
        <td>
          <div className="d-flex justify-content-between">
            <div>{successCount} Synced</div>
            {failedCount > 0 ? <div>{failedCount} Failed</div> : ''}
            {skippedCount > 0 ? <div>{skippedCount} Skipped</div> : ''}
          </div>

          <div className="progress progress-xs d-flex">
            {this.getProgressBarPiece('green', successCount, totalCount)}
            {skippedCount > 0 ? this.getProgressBarPiece('yellow', skippedCount, totalCount) : ''}
            {failedCount > 0 ? this.getProgressBarPiece('red', failedCount, totalCount) : ''}
          </div>
        </td>
      </tr>
    )
  }

  render() {
    let records = [];

    let latestTime;
    for (let key in this.props.records) {
      if (this.props.records.hasOwnProperty(key)) {
        if (!latestTime || this.props.records[key].sync_start_timestamp > latestTime) {
          latestTime = this.props.records[key].sync_start_timestamp;
        }

        records.push(
          ContentTypeLog.getProgressbar(this.props.records[key])
        )
      }
    }

    if (latestTime) {
      latestTime = new Date(latestTime * 1000);
      latestTime = latestTime.toLocaleString('en-US', {
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      })
    }

    return (
      <div className="row row-cards">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Content Type: {Configs.getContentTypeLabel(this.props.title)}</h3>
              {latestTime &&
              <div className="card-options">
                Last Synced: {latestTime}
              </div>
              }
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
  }
}

export default ContentTypeLog;
