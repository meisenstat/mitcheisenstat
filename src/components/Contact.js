import React from 'react';
import axios from 'axios';
import './App.css';

class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-header-text">Contact</h1>
                </header>
                <div className="App-body">
                    <p>
                        To contact me, send me an email at <a href="mailto: mitcheisenstat20@gmail.com" style={{color:"red"}}>mitcheisenstat20@gmail.com</a>
                    </p>
                    <p>
                        If you'd prefer me to reach out to you, please fill out this form!
                    </p>
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-input">
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="Your name" 
                            value={this.state.name} 
                            onChange={e => this.setState({ name: e.target.value })}
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="Your email" 
                            value={this.state.email} 
                            onChange={e => this.setState({ email: e.target.value })}
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="A message to me..." 
                            value={this.state.message} 
                            onChange={e => this.setState({ message: e.target.value })}
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                        <div>
                            { this.state.mailSent &&
                                <div className="emailSent">Thank you for contacting me. I will reach out shortly.</div>
                            }
                            { this.state.error && 
                                <div className="emailError">Contact submission error. Please email me personally.</div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        var URL = 'https://950k8p9bpa.execute-api.us-east-1.amazonaws.com/new-stage/submit';
        axios({
            method: 'POST',
            url: URL,
            headers: { 
                'content-type': 'application/json'
            },
            data: JSON.stringify(this.state),
        })
        .then(result => {
            this.setState({
                name: '',
                email: '',
                message: '',
                mailSent: result.status
            })
          })
          .catch(error => {
            this.setState({ error: error.message })
          }
        );
    }
}

export default Contact;