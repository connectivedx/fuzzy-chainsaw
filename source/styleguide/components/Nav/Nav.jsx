import ReactModal from 'react-modal';

import {
  pagesIndexData,
  componentsIndexData,
  tagsIndexData,
  FileIndex
} from 'SgTags/FileIndex/FileIndex';


export class Nav extends React.Component {
  state = {
    isExpanded: false
  }

  onOpen = () => this.setState({ isExpanded: true })

  onModalOpen = () => {
    setTimeout(() => this.btnClose.focus());
  }

  onClose = () => {
    this.setState({ isExpanded: false });
    this.btnOpen.focus();
  }

  render() {
    return (
      <div className={`sg-nav ${this.state.isExpanded ? 'is-expanded' : ''}`}>
        <button
          ref={(ref) => { this.btnOpen = ref; }}
          onClick={this.onOpen}
          className="sg-nav__button"
        >
          <span className="sg-nav__button-icon" />
          <span>Table of Contents</span>
        </button>

        <ReactModal
          isOpen={this.state.isExpanded}
          contentLabel="Table of contents"
          portalClassName="sg-nav__portal"
          className="sg-nav__modal"
          overlayClassName="sg-nav__modal-overlay"
          closeTimeoutMS={500}
          onRequestClose={this.onClose}
          onAfterOpen={this.onModalOpen}
        >
          <button
            ref={(ref) => { this.btnClose = ref; }}
            onClick={this.onClose}
            className="sg-nav__close"
          >
            <span>Close</span>
          </button>

          <div size="large" className="sg-nav__modal-content">
            <FileIndex title="Pages" items={pagesIndexData} />
            <FileIndex title="Components" items={componentsIndexData} />
            <FileIndex title="Tags" items={tagsIndexData} />
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Nav;
