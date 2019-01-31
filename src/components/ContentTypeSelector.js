import React from 'react';

class ContentTypeButton extends React.Component {
  onSelect = event => {
    console.log(event);
    this.props.onSelect(this.props.content_type);
  };

  render() {
    return (
      <div className="col-6 col-sm-4 col-lg-2">
        <div className="card" onClick={this.onSelect}>
          <div className="card-body p-3 text-center">
            <div className="text-right text-green">6%</div>
            <div className="h1 m-0">{this.props.label}</div>
            <div className="text-muted mb-4">{this.props.content_type}</div>
          </div>
        </div>
      </div>
    )
  }
}


class ContentTypeSelector extends React.Component {

  render() {
    return (
      <div className="row">
        <ContentTypeButton label='All' content_type='' onSelect={this.props.onSelect}/>
        <ContentTypeButton label='Event' content_type='event' onSelect={this.props.onSelect}/>
        <ContentTypeButton label='Course Item' content_type='course_item' onSelect={this.props.onSelect}/>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-green">
                6%
              </div>
              <div className="h1 m-0">43</div>
              <div className="text-muted mb-4">New Tickets</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-green">
                6%
              </div>
              <div className="h1 m-0">43</div>
              <div className="text-muted mb-4">New Tickets</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-green">
                6%
              </div>
              <div className="h1 m-0">43</div>
              <div className="text-muted mb-4">New Tickets</div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <div>
                <h4 className="m-0"><a href="javascript:void(0)">Query 1 <small>Sales</small></a></h4>
                <small className="text-muted">12 waiting payments</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <div>
                <h4 className="m-0"><a href="javascript:void(0)">Query 2 <small>Sales</small></a></h4>
                <small className="text-muted">12 waiting payments</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <div>
                <h4 className="m-0"><a href="javascript:void(0)">132 <small>Sales</small></a></h4>
                <small className="text-muted">12 waiting payments</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <div>
                <h4 className="m-0"><a href="javascript:void(0)">132 <small>Sales</small></a></h4>
                <small className="text-muted">12 waiting payments</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentTypeSelector;