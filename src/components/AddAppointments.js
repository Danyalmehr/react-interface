import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

class AddAppointments extends Component {
  constructor() {
    super();
    this.state = {
      currency: '',
      amount: '',
      aptDate: '',
      aptTime: '',
      type: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

/*Saving the data into a temprorary const*/
  handleAdd(e) {
    e.preventDefault();
    let tempApt = {
      currency: this.state.currency,
      amount: this.state.amount,
      aptDate: this.state.aptDate + ' ' + this.state.aptTime,
      type: this.state.type
    };

    this.props.addAppointment(tempApt);

    this.setState({
      currency: '',
      amount: '',
      aptDate: '',
      aptTime: '',
      type: ''
    });
    this.props.toggleForm();
  }

  /* Getting the value of each row for update*/
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div
        className={
          'card textcenter mt-3 ' +
          (this.props.formDisplay ? '' : 'add-appointment')
        }
      >
        <div
          className="apt-addheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}
        >
          <FaPlus /> Add Transaction
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate onSubmit={this.handleAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="currency"
                readOnly
              >
                Currency
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="currency"
                  placeholder="Currency"
                  value={this.state.currency}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="amount"
              >
                Amount
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="amount"
                  placeholder="Amount"
                  value={this.state.amount}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="type">
                Type
              </label>
              <div className="col-md-10">
              <input
                  type="text"
                  className="form-control"
                  name="type"
                  placeholder="Type"
                  value={this.state.type}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptDate"
              >
                Date
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="aptDate"
                  id="aptDate"
                  value={this.state.aptDate}
                  onChange={this.handleChange}
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptTime"
              >
                Time
              </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="aptTime"
                  id="aptTime"
                  value={this.state.aptTime}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Transaction
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddAppointments;