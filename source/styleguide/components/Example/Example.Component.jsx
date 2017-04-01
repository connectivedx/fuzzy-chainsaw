import React from 'react';
import {
  Example_Wrapper,
  Example_Header,
  Example_Tab,
  Example_Section
} from './Example';

export default class ExampleComponent extends React.Component {
  static propTypes = {
    slug: React.PropTypes.string,
    exampleName: React.PropTypes.string,
    exampleClasses: React.PropTypes.string,
    exampleOuput: React.PropTypes.string,
    reactOuput: React.PropTypes.string,
    htmlOuput: React.PropTypes.string,
    jsonOuput: React.PropTypes.string
  }

  state = {
    activeTab: 'example'
  }

  onTabClick = name => () => {
    this.setState({
      activeTab: name
    });
  }

  TabItem = ({ name, children }) => (
    <Example_Tab
      slug={this.props.slug}
      name={name}
      isActive={this.state.activeTab === name}
      onClick={this.onTabClick(name)}
    >
      {children}
    </Example_Tab>
  )

  render = () => (
    <Example_Wrapper slug={this.props.slug}>
      <Example_Header exampleName={this.props.exampleName}>
        <this.TabItem name="example">Example</this.TabItem>
        <this.TabItem name="react">React</this.TabItem>
        <this.TabItem name="html">HTML</this.TabItem>
        <this.TabItem name="json">JSON</this.TabItem>
      </Example_Header>

      <Example_Section
        title="Example"
        type="example"
        className={this.props.exampleClasses}
        isActive={this.state.activeTab === 'example'}
        dangerouslySetInnerHTML={{ __html: this.props.exampleOuput }}
      />

      <Example_Section
        title="React"
        type="react"
        isActive={this.state.activeTab === 'react'}
        dangerouslySetInnerHTML={{ __html: this.props.reactOuput }}
      />

      <Example_Section
        title="HTML"
        type="html"
        isActive={this.state.activeTab === 'html'}
        dangerouslySetInnerHTML={{ __html: this.props.htmlOuput }}
      />

      <Example_Section
        title="JSON"
        type="json"
        isActive={this.state.activeTab === 'json'}
        dangerouslySetInnerHTML={{ __html: this.props.jsonOuput }}
      />
    </Example_Wrapper>
  )
}
