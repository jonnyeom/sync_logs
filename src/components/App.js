import React from 'react';
import "tabler-react/dist/Tabler.css";
import './App.css';

import { Page } from 'tabler-react';
import { LogListComponent, LogListCardsComponent } from "./Logs";
import Loading from './Loading';

class App extends React.Component {
  state = { data: null, keyedData: []};

  componentWillMount() {
    // this.loadLogData();
    this.updateSampleData();
  }

  loadLogData() {
    const url = '/admin/imis-sync/logs/api';

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then((data) => this.updateData(data))
      .catch(err => console.log('Error: '.err))
  }

  updateData(responseData) {
    let data = [];
    for (let key in responseData) {
      if (responseData.hasOwnProperty(key))
        data = data.concat(responseData[key]);
    }

    this.setState({data: data, keyedData: responseData}, () => console.log(this.state));
  }

  updateSampleData() {
    let sampleKeyedData = '{"course_item":[{"id":"1723","content_type":"course_item","query_path":"$\\/Drupal\\/Content\\/TrainingRate","sync_start_timestamp":"1540218018","success_count":"9","fail_count":"0","time_of_log":"1540218020","skipped_count":"0"},{"id":"1722","content_type":"course_item","query_path":"$\\/Drupal\\/Content\\/TrainingItems","sync_start_timestamp":"1540218014","success_count":"6","fail_count":"0","time_of_log":"1540218018","skipped_count":"0"},{"id":"1713","content_type":"course_item","query_path":"$\\/Drupal\\/Content\\/TrainingRate","sync_start_timestamp":"1540203358","success_count":"5","fail_count":"0","time_of_log":"1540203359","skipped_count":"0"},{"id":"1712","content_type":"course_item","query_path":"$\\/Drupal\\/Content\\/TrainingItems","sync_start_timestamp":"1540203354","success_count":"7","fail_count":"0","time_of_log":"1540203358","skipped_count":"0"},{"id":"1703","content_type":"course_item","query_path":"$\\/Drupal\\/Content\\/TrainingRate","sync_start_timestamp":"1540160416","success_count":"5","fail_count":"0","time_of_log":"1540160417","skipped_count":"0"}],"event":[{"id":"1821","content_type":"event","query_path":"$\\/Drupal\\/Content\\/EventTrack","sync_start_timestamp":"1540239682","success_count":"3","fail_count":"0","time_of_log":"1540239818","skipped_count":"0"},{"id":"1820","content_type":"event","query_path":"$\\/Drupal\\/Content\\/EventAttendees","sync_start_timestamp":"1540239678","success_count":"3","fail_count":"0","time_of_log":"1540239818","skipped_count":"0"},{"id":"1818","content_type":"event","query_path":"$\\/Drupal\\/Content\\/Event","sync_start_timestamp":"1540239665","success_count":"1","fail_count":"0","time_of_log":"1540239818","skipped_count":"0"},{"id":"1819","content_type":"event","query_path":"$\\/Drupal\\/Content\\/Event","sync_start_timestamp":"1540239665","success_count":"3","fail_count":"1","time_of_log":"1540239818","skipped_count":"0"},{"id":"1817","content_type":"event","query_path":"$\\/Drupal\\/Content\\/EventExhibitor","sync_start_timestamp":"1540236680","success_count":"0","fail_count":"1","time_of_log":"1540236682","skipped_count":"0"}]}';
    sampleKeyedData = JSON.parse(sampleKeyedData);
    this.updateData(sampleKeyedData);
  }

  renderContent() {
    if (this.state.keyedData) {
      return <LogListCardsComponent keyedData={this.state.keyedData}/>;
    }

    if (this.state.data) {
      return <LogListComponent logs={this.state.data}/>;
    }

    return <Loading/>;
  }

  render() {
    return (
      <div className={'page'}>
        <div className={'page-main'}>
          <div className={'container'}>{this.renderContent()}</div>
        </div>
      </div>
    )
  }
}

export default App;
