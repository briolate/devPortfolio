import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const contactData = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    // TODO: this.props.sendEmail(contactData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-3 mb-4">Contact</h1>
              <p className="lead">
                Feel free use the form below to drop me a line.
              </p>
              <form onSubmit={this.onSubmit}>
                <input
                  className="form-control form-control-lg mb-3"
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  info="Enter your name"
                />
                <input
                  className="form-control form-control-lg mb-3"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  info="Enter your email address"
                />
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Message"
                  name="message"
                  value={this.state.message}
                  onChange={this.onChange}
                  info="Type your message"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4 "
                />
              </form>
            </div>
            <div className="social-media">
              <a href="" className="social-link">
                <i className="fas fa-envelope" />
              </a>
              <a href="" className="social-link">
                <i className="fab fa-github" />
              </a>
              <a href="" className="social-link">
                <i className="fab fa-facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
