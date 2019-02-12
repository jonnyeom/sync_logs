import React from 'react';
import './ContentTypeSelector.css';

class ContentTypeButton extends React.Component {
  onSelect = event => {
    this.props.onSelect(this.props.content_type);
  };

  render() {
    return (
      <div className="col-6 col-sm-4 col-lg-2">
        <div className="content-selector card" onClick={() => this.props.onSelect(this.props.content_type)}>
          <div className="card-body p-3 text-center">
            <div className="text-right text-green">6%</div>
            <div className="h3 m-0">{this.props.label}</div>
            <div className="text-muted mb-4">{this.props.content_type}</div>
          </div>
        </div>
      </div>
    )
  }
}

const ContentTypeQueries = (props) => {
  // @TODO: Make this a Class and Loop over all Queries to make dynamic buttons.
  return (
    <div className="col-sm-6 col-lg-3">
      <div className="card p-3">
        <div className="d-flex align-items-center">
          <div>
            <h4 className="m-0"><a href="javascript:void(0)">{props.name} <small>@TODO</small></a></h4>
            <small className="text-muted">Description</small>
          </div>
        </div>
      </div>
    </div>
  )
};

class ContentTypeSelector extends React.Component {

  render() {
    return (
      <div className="row">
        <ContentTypeButton label='All' content_type='all' onSelect={this.props.onSelect}/>
        <ContentTypeButton label='Person' content_type='person' onSelect={this.props.onSelect}/>
        <ContentTypeButton label='Product' content_type='product' onSelect={this.props.onSelect}/>
        <ContentTypeButton label='Course Item' content_type='course_item' onSelect={this.props.onSelect}/>
        <ContentTypeButton label='Session' content_type='session' onSelect={this.props.onSelect}/>
        <ContentTypeButton label='Event' content_type='event' onSelect={this.props.onSelect}/>
        <ContentTypeQueries name='Query 1'/>
        <ContentTypeQueries name='Query 2'/>
        <ContentTypeQueries name='Query 3'/>
        <ContentTypeQueries name='Query 4'/>
      </div>
    );
  }
}

export default ContentTypeSelector;