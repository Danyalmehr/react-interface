import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class ListAppointments extends Component {
  render() {
    return (
      <div className="appointment-list item-list mb-3">
        {this.props.appointments.map(item => (
          <div className="pet-item col media py-3" key={item.transId}>
            <div className="mr-3">
              <button
                className="pet-delete btn btn-sm btn-danger"
                onClick={() => this.props.deleteAppointment(item)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="pet-info media-body">
              <div className="pet-head d-flex">
              <span className="label-item">Currency: </span>
                <span
                  className="owner-name"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={e =>
                    this.props.updateInfo(
                      'currency',
                      e.target.innerText,
                      item.transId
                    )
                  }
                >
                  {item.currency}
                </span>
                <span className="apt-date ml-auto">
                  <Moment
                    date={item.aptDate}
                    parse="YYYY-MM-dd hh:mm"
                    format="MMM-d h:mma"
                  />
                </span>
              </div>

              <div className="owner-name">
                <span className="label-item">Amount: </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={e =>
                    this.props.updateInfo(
                      'amount',
                      e.target.innerText,
                      item.transId
                    )
                  }
                >
                  {item.amount}
                </span>
              </div>

              <div className="apt-notes">
                <span className="label-item">Type: </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={e =>
                    this.props.updateInfo(
                      'type',
                      e.target.innerText,
                      item.transId
                    )
                  }
                >
                  {item.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListAppointments;