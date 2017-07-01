import ReactModal from 'react-modal';
import SgTableOfContents from 'SgTags/SgTableOfContents/SgTableOfContents';

export class SgNav extends React.Component {
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
    const classStack = FcUtils.createClassStack([
      'SgNav',
      this.state.isExpanded && 'is-expanded'
    ]);

    return (
      <div className={classStack}>
        <button
          ref={(ref) => { this.btnOpen = ref; }}
          onClick={this.onOpen}
          className="SgNav__button"
        >
          <span className="SgNav__button-icon" />
          <span>Table of Contents</span>
        </button>

        <ReactModal
          isOpen={this.state.isExpanded}
          contentLabel="Table of contents"
          portalClassName="SgNav__portal"
          className="SgNav__modal"
          overlayClassName="SgNav__modal-overlay"
          closeTimeoutMS={500}
          onRequestClose={this.onClose}
          onAfterOpen={this.onModalOpen}
        >
          <button
            ref={(ref) => { this.btnClose = ref; }}
            onClick={this.onClose}
            className="SgNav__close"
          >
            <span>Close</span>
          </button>

          <div size="large" className="SgNav__modal-content">
            <div className="SgNav__modal-wrapper">
              <SgTableOfContents />
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default SgNav;
