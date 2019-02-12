class Configs {
  static ContentTypeConfigs = {
    all: {
      label: 'Overview'
    },
    person: {
      label: 'Person'
    },
    product: {
      label: 'Product'
    },
    course_item: {
      label: 'Course Item'
    },
    session: {
      label: 'Session'
    },
    event: {
      label: 'Event'
    }
  };

  static getContentTypeLabel(type) {
    if (this.ContentTypeConfigs[type]) {
      return this.ContentTypeConfigs[type].label;
    }

    return type;
  }
}

export default Configs;
