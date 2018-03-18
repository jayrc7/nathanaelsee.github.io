import React, { Component } from "react";
import { Header, Image, List, Segment, Divider } from "semantic-ui-react";
import "./App.css";

class PersonalHeader extends Component {

  render() {
    const {name, logo, description, location, email, github, linkedin, resume} = this.props.info;

    return (
      <Segment basic inverted textAlign = "center">
        {logo && <Image circular centered size = "tiny" src = {logo} />}
        <Header inverted as = "h1">
          {name        && <Header.Content   content = {name.first + " " + name.last} />}
          {description && <Header.Subheader content = {description} />}
        </Header>
        <Divider inverted />
        <List horizontal size = "large" style = {{margin: "0"}}>
          {location && <List.Item icon = "marker"
                                  content = {location} />}
          {email    && <List.Item icon = "mail"
                                  content = {<a target = "_blank" title = "Email me" href = {"mailto:" + email}>Email</a>} />}
          {github   && <List.Item icon = "github"
                                  content = {<a target = "_blank" title = "Check out my repos" href = {"https://github.com/" + github}>Github</a>} />}
          {linkedin && <List.Item icon = "linkedin"
                                  content = {<a target = "_blank" title = "Connect with me" href = {"https://linkedin.com/in/" + linkedin}>LinkedIn</a>} />}
          {resume   && <List.Item icon = "file pdf outline"
                                  content = {<a target = "_blank" title = "View my resume" href = {"https://docs.google.com/viewer?url=" + resume}>Resume (PDF)</a>} />}
        </List>
      </Segment>
    );
  }
}

export default PersonalHeader;