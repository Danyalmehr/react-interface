import React, { Component } from 'react';

class SearchTransactions extends Component {
  render() {
    return (
      <div className="search-appointments row justify-content-center my-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              id="searchTransactions"
              type="text"
              className="form-control"
              aria-label="Search Appointments"
              onChange={e => this.props.searchTransactions(e.target.value)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'currency' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('currency', this.props.orderDir)
                  }
                  href="#"
                >
                  Currency
                </button>
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'aptDate' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('aptDate', this.props.orderDir)
                  }
                  href="#"
                >
                  Date
                </button>
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'amount' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('amount', this.props.orderDir)
                  }
                  href="#"
                >
                  Amount
                </button>
                <div role="separator" className="dropdown-divider" />
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderDir === 'asc' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder(this.props.orderBy, 'asc')
                  }
                  href="#"
                >
                  Asc
                </button>
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderDir === 'desc' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder(this.props.orderBy, 'desc')
                  }
                  href="#"
                >
                  Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchTransactions;