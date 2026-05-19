import React from 'react';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      department: ''
    };
  }

  render() {
    return (
      <div>
        <h2>Employee Form</h2>
      </div>
    );
  }
}

export default EmployeeForm;