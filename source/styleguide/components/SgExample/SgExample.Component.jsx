import {
  SgExample_Wrapper,
  SgExample_Header,
  SgExample_Tab,
  SgExample_Section
} from './SgExample';

export default class SgExampleComponent extends React.Component {
  static propTypes = {
    slug: PropTypes.string,
    exampleName: PropTypes.string,
    exampleClasses: PropTypes.string,
    exampleOuput: PropTypes.string,
    reactOuput: PropTypes.string,
    htmlOuput: PropTypes.string,
    jsonOuput: PropTypes.string
  }

  state = {
    activeTab: 'example'
  }

  onTabClick = (name) => () => {
    this.setState({
      activeTab: name
    });
  }

  TabItem = ({ name, children }) => (
    <SgExample_Tab
      slug={this.props.slug}
      name={name}
      isActive={this.state.activeTab === name}
      onClick={this.onTabClick(name)}
    >
      {children}
    </SgExample_Tab>
  )

  render = () => (
    <SgExample_Wrapper slug={this.props.slug}>
      <SgExample_Header exampleName={this.props.exampleName}>
        <this.TabItem name="example">Example</this.TabItem>
        <this.TabItem name="react">React</this.TabItem>
        <this.TabItem name="html">HTML</this.TabItem>
        <this.TabItem name="json">JSON</this.TabItem>
      </SgExample_Header>

      <SgExample_Section
        title="Example"
        type="example"
        className={this.props.exampleClasses}
        isActive={this.state.activeTab === 'example'}
        dangerouslySetInnerHTML={{ __html: this.props.exampleOuput }}
      />

      <SgExample_Section
        title="React"
        type="react"
        isActive={this.state.activeTab === 'react'}
        dangerouslySetInnerHTML={{ __html: this.props.reactOuput }}
      />

      <SgExample_Section
        title="HTML"
        type="html"
        isActive={this.state.activeTab === 'html'}
        dangerouslySetInnerHTML={{ __html: this.props.htmlOuput }}
      />

      <SgExample_Section
        title="JSON"
        type="json"
        isActive={this.state.activeTab === 'json'}
        dangerouslySetInnerHTML={{ __html: this.props.jsonOuput }}
      />
    </SgExample_Wrapper>
  )
}
