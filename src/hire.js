import React from 'react';
import Footer from './footer.js';



class Hire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      cName: '',
      email: '',
      phoneNumber: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleclick = this.handleclick.bind(this);
  }

  handleChange({ target }) {
    // console.log({ [target.name]: target.value });
    this.setState({
        [target.name]: target.value
    });
}

handleclick(e) {
    e.preventDefault();
    const fnameVal = this.state.fName;
    const cnameVal = this.state.cName;
    const emailVal = this.state.email;
    const phoneNumberVal = this.state.phoneNumber;

    console.log(`
        Full Name : ${fnameVal}
        Company Name : ${cnameVal}
        Email : ${emailVal}
        Phone Number : ${phoneNumberVal}
      `);

  }

  render() {
    return (
      <main class="hire-main">
        <form class="hire-container">
          <div class="hire-now">
            <h3>Hire Now</h3>
          </div>
          <input
            type="text"
            id="fName"
            name="fName"
            placeholder="full name here ..."
            value={this.state.fName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="cName"
            name="cName"
            placeholder="company name here ..."
            value={this.state.cName}
            onChange={this.handleChange}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email here ..."
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            type="text"
            id="pNumber"
            name="phoneNumber"
            onChange={this.handleChange}
            placeholder="phone number..."
            value={this.state.phoneNumber}
          />
          <button
            name="btn"
            type="submit"
            id="subscribe"
            onClick={this.handleclick}
          >
            Subscribe
          </button>
        </form>

        <Footer />
      </main>
    );
  }
}

export default Hire;
