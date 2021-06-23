import React from "react";
import axios from "axios";
import { Button, Form, InputGroup } from "react-bootstrap";

interface Info {
  title: string;
}

interface State {
  loading: boolean;
  messages: Message[];
  email: string;
  region: string;
}

interface Message {
  id: string;
  email: string;
  subject: string;
  body: string;
}

class ListMessages extends React.Component<Info, State> {
  constructor(props: Info) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      loading: false,
      messages: [],
      email: "",
      region: "",
    };
  }

  private interval: any;

  componentDidMount() {
    this.interval = setInterval(() => this.getMessages(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  private async getMessages() {
    this.setState({ loading: true });
    console.log("Loading...");
    
    axios.get("http://localhost:3000/messages").then((res) => {
      const messages = res.data;
      this.setState({ messages, loading: false });
      console.log("Load", messages);    
    });
  }

  private gridMessage() {
    const list = this.state.messages.map((message: Message) => (
      <div key={message.id} className="row">
        <div className="col">{message.id} - {message.email}</div>
        <div className="col">{message.subject}</div>
      </div>
    ));

    return (
      <div className="container grid" hidden={this.state.loading}>
        {list}
      </div>
    );
  }

  private sendEmail() {
    const email = this.state.email;
    axios.post("http://localhost:3000/messages", { email }).then((res) => {
      console.log("Send email...", res.data);
      this.setState({ email: "" });
    });
  }

  private getRegion() {
    axios.get("http://localhost:3000/customer_io_services/region", { }).then((res) => {
      console.log("Get region...", res.data);
      this.setState({ region: JSON.stringify(res.data) });
    });
  }

  handleChange(event: any) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div>
        <hr />
        <Button
                type="button"
                onClick={() => this.getRegion()}
                className="btn btn-success"
              >
                Test API :: Get Region
              </Button>
              <p>{this.state.region}</p>
        <hr />
        <Form className="form">
        <InputGroup className="mb-3 w-50">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <InputGroup.Append>
              <Button
                type="button"
                onClick={() => this.sendEmail()}
                className="btn btn-primary"
              >
                Send Email
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>

        <h2>{this.props.title}</h2>

        <div
          hidden={!this.state.loading}
          className="spinner-border text-primary"
          role="status"
        />

        {this.gridMessage()}
      </div>
    );
  }
}

export default ListMessages;
