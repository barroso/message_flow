import React from "react";
import { Button, Form } from "react-bootstrap";

interface Info {
  name: string;
}

interface State {
  year: number;
  email: string;
  password: string;
}

class About extends React.Component<Info, State> {
  constructor(props: Info) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      year: 2020,
      email: "",
      password: "",
    };
  }

  handleChange(event: any) {
    this.setState({email: event.target.value});
  }

  changeYear() {
    this.setState({ year: 1999 });
  }

  submit() {
    console.log(this.state.email)
  }

  render() {
    return (
      <div>
        <h2>About {this.props.name}</h2>
        <p>Year {this.state.year}</p>

        <Button variant="primary" onClick={() => this.setState({ year: 1999 })}>
          Set 1999
        </Button>

        <hr />

        <Form className="justify-content-md-center" style={{ width: "500px" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" onClick={() => this.submit()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default About;
