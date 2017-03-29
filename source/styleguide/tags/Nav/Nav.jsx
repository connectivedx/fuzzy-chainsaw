import React from 'react';
import ReactModal from 'react-modal';
import Rhythm from 'SgTags/Rhythm/Rhythm';

import {
  pagesIndexData,
  componentsIndexData,
  tagsIndexData,
  FileIndex
} from 'SgTags/FileIndex/FileIndex';


class Nav extends React.Component {
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
          className="sg-nav__content"
          overlayClassName="sg-nav__modal-overlay"
          closeTimeoutMS={300}
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

          <Rhythm size="large" className="sg-nav__modal-content">
            <FileIndex
              items={pagesIndexData}
              title="Pages"
              size="small"
            />
            <FileIndex
              items={componentsIndexData}
              title="Components"
              size="small"
            />
            <FileIndex
              items={tagsIndexData}
              title="Tags"
              size="small"
            />
          </Rhythm>
        </ReactModal>
      </div>
    );
  }
}

export default Nav;
