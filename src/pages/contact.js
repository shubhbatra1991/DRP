import React from "react";
import { Component } from "react";
import Layout from "../components/layout";
import {
  ContactContainer,
  FormContainer,
  HeadingText,
  LabelContainer,
  TextInput,
  TextArea,
  SelectInput,
  SubmitButton
} from "../components/styles/Contact";
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: ""
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value
    });
  };

  handleTopicChange= (event) => {
    this.setState({
      topic: event.target.value
    });
  };

  handleSubmit =(event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault();
  }

  render() {
    const { username, comments, topic } = this.state;
    return (
      <Layout>
        <ContactContainer>
          <HeadingText>
            Why don't you share your thoughts about the next topic!
          </HeadingText>
          <FormContainer>
            <form onSubmit={this.handleSubmit}>
              <LabelContainer>
                <label htmlFor="username">Your Name</label>
                <TextInput
                  type="text"
                  id="username"
                  value={username}
                  onChange={this.handleUsernameChange}
                />
              </LabelContainer>

              <LabelContainer>
                <label htmlFor="comments">Comments</label>
                <TextArea
                  id="comments"
                  value={comments}
                  onChange={this.handleCommentsChange}
                ></TextArea>
              </LabelContainer>

              <LabelContainer>
                <label htmlFor="topic">Topic</label>
                <SelectInput
                  name="select"
                  id="topic"
                  value={topic}
                  onChange={this.handleTopicChange}
                >
                  <option value="next Topic">Next topic decided by You</option>
                  <option value="new destination">Vlog of New Destination</option>
                  <option value="Formal Chat">Formal Chat vlog</option>
                </SelectInput>
              </LabelContainer>
              <SubmitButton type="submit">Submit</SubmitButton>
            </form>
          </FormContainer>
        </ContactContainer>
      </Layout>
    );
  }
}

export default Contact;