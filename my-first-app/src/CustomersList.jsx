import React, { Component } from "react";
export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        adress: { city: "New York" },
        photo: "https://picsum.photos/id/1005/60",
      },
      {
        id: 2,
        name: "Ryan",
        phone: null,
        adress: { city: "Las Vegas" },
        photo: "https://picsum.photos/id/1008/60",
      },
      {
        id: 3,
        name: "Chris",
        phone: "489-286",
        adress: { city: "Racoon" },
        photo: "https://picsum.photos/id/1009/60",
      },
      {
        id: 4,
        name: "William",
        phone: null,
        adress: { city: "Lviv" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 5,
        name: "Albert",
        phone: "184-777",
        adress: { city: "Racoon" },
        photo: "https://picsum.photos/id/1045/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  // Executes when user clicks the refresh button
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => this.onChangePictureClick(cust, index)}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.adress.city}</td>
        </tr>
      );
    });
  };

  // Executes when user click "Change Picture"
  // Recieves the "customer" object and index of the currently clicked object

  onChangePictureClick = (cust, index) => {
    // console.log(cust);
    // console.log(index);

    // get existing customers
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60";

    // update customers photo
    this.setState({ customers: custArr });
  };
}
