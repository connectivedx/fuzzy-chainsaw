import Heading from '@atoms/Heading/Heading';
import Rhythm from '@atoms/Rhythm/Rhythm';
import Link from '@atoms/Link/Link';
import List from '@atoms/List/List';
import SgPageWrapper from '@sg-atoms/SgPageWrapper/SgPageWrapper';
import {
  SgPageShell,
  SgPageShell__header,
  SgPageShell__navigation,
  SgPageShell__main,
  SgPageShell__body
} from '@sg-molecules/SgPageShell/SgPageShell';
import SgGlobalHeader from '@sg-organisms/SgGlobalHeader/SgGlobalHeader';
import SgNavigation from '@sg-organisms/SgNavigation/SgNavigation';

const page = () => (
  <SgPageShell>
    <SgPageShell__header>
      <SgGlobalHeader />
    </SgPageShell__header>
    <SgPageShell__body>
      <SgPageShell__navigation>
        <SgNavigation />
      </SgPageShell__navigation>
      <SgPageShell__main>
        <SgPageWrapper>
          <Rhythm>
            <Heading>Fuzzy Chainsaw Analytics Tracking</Heading>
            <p>
              Analytics tracking within Fuzzy Chainsaw is setup using data-tracking attribute on elements. Each data-tracking attribute describes what event will trigger the tracking, a label for tracked action and data for tracked action.
            </p>
            <p>
              A listener at the body level of the document is constantly listenening for a match between an element in question, and its set event type within the data-tracking attribute. Once a the body watcher has found a match, the tracking for that element performed.
            </p>
            <p>
              Analytics Tracking is vendor agnostic, meaning you can turn different analytics vendors such as GTM, AEM on or off at both global or individual tracking levels.
            </p>
          </Rhythm>
          <Rhythm>
            <List variant="blank">
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event':'click',
                    'label': 'Simple Example',
                    'data': 'Clicked Simple Example Element'
                  }]"
                >
                  Simple click
                </Link>
              </li>
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event':'click',
                    'label': 'Hidden Value Example',
                    'data': '.hidden-text-area'
                  }]"
                >
                  Value from another element
                </Link>
                <p className="hidden-text-area" style={{ display: 'none' }}>Im hidden text, but still used in tracking</p>
              </li>
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event':'click',
                    'label': 'Multi Example',
                    'data': 'First Data Value'
                  },{
                    'event':'click',
                    'label': 'Multi Example',
                    'data': 'Second Data Value'
                  }]"
                >
                  Multi-tracking
                </Link>
                <p className="hidden-text-area" style={{ display: 'none' }}>Im hidden text, but still used in tracking</p>
              </li>
            </List>
          </Rhythm>
          <Rhythm>
            <div className="Tracking">
              <textarea
                data-tracking="[{
                  'event': 'keydown',
                  'label': 'Keyboard Events',
                  'data': 'Element Keydown'
                }]"
                value="Keydown tracking"
              />

              <textarea
                data-tracking="[{
                  'event': 'keyup',
                  'label': 'Keyboard Events',
                  'data': 'Elemenet Keyup'
                }]"
                value="Keyup tracking"
              />

              <textarea
                data-tracking="[{
                  'event': 'keypress',
                  'label': 'Keyboard Events',
                  'data': 'Element Keypress'
                }]"
                value="Keypress tracking"
              />
            </div>
          </Rhythm>
          <Rhythm>
            <List variant="blank">
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event': 'mouseenter',
                    'label': 'Mouse Events',
                    'data': 'Mouse enter link'
                  }]"
                >
                  Mouse enter
                </Link>
              </li>
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event': 'mouseover',
                    'label': 'Mouse Events',
                    'data': 'Mouse over link'
                  }]"
                >
                  Mouse over
                </Link>
              </li>
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event': 'mousemove',
                    'label': 'Mouse Events',
                    'data': 'Mouse move link'
                  }]"
                >
                  Mouse move
                </Link>
              </li>
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event': 'mousedown',
                    'label': 'Mouse Events',
                    'data': 'Mouse down link'
                  }]"
                >
                  Mouse down
                </Link>
              </li>
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event': 'mouseup',
                    'label': 'Mouse Events',
                    'data': 'Mouse up link'
                  }]"
                >
                  Mouse up
                </Link>
              </li>
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event': 'mouseout',
                    'label': 'Mouse Events',
                    'data': 'Mouse out link'
                  }]"
                >
                  Mouse out
                </Link>
              </li>
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event': 'mouseleave',
                    'label': 'Mouse Events',
                    'data': 'Mouse leave link'
                  }]"
                >
                  Mouse leave
                </Link>
              </li>
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event': 'auxclick',
                    'label': 'Mouse Events',
                    'data': 'Aux click link'
                  }]"
                >
                  Aux click
                </Link>
              </li>
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event': 'click',
                    'label': 'Mouse Events',
                    'data': 'Mouse click link'
                  }]"
                >
                  Mouse click
                </Link>
              </li>
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event': 'dblclick',
                    'label': 'Mouse Events',
                    'data': 'Mouse double click link'
                  }]"
                >
                  Mouse double click
                </Link>
              </li>
            </List>
          </Rhythm>
          <Rhythm>
            <textarea data-tracking="[{'event': 'scroll', 'label': 'Scroll Event', 'data': 'Element Scrolled'}]" value="Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll TextareaScroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll TextareaScroll Textarea Scroll Textarea" />
          </Rhythm>
          <Rhythm>
            <textarea data-tracking="[{'event': 'cut', 'label': 'Clipboard Events', 'data': 'Cut to clipboard'}]" value="Highlight and cut text from this textarea" />
            <textarea data-tracking="[{'event': 'copy', 'label': 'Clipboard Events', 'data': 'Copy to clipboard'}]" value="Highlight and copy text from this textarea" />
            <textarea data-tracking="[{'event': 'paste', 'label': 'Clipboard Events', 'data': 'Paste to clipboard'}]" value="Paste text here" />
          </Rhythm>
          <Rhythm>
            <div data-tracking="[{'event': 'drag', 'label': 'Drag Drop Events', 'data': 'Drag Element'}]" style={{ padding: '2rem', backgroundColor: 'red' }} draggable="true" title="drag element">Drag</div>
            <div data-tracking="[{'event': 'dragend', 'label': 'Drag Drop Events', 'data': 'Drag End Element'}]" style={{ padding: '2rem', backgroundColor: 'blue', color: 'white' }} draggable="true" title="Drag element, then press esc">Drag End</div>
            <div data-tracking="[{'event': 'dragover' 'label': 'Drag Drop Events', 'data': 'Drag Over Element'}]" style={{ padding: '2rem', backgroundColor: 'green' }} draggable="true" title="Drag element over another draggable element">Drag Over</div>
            <div data-tracking="[{'event': 'dragleave', 'label': 'Drag Drop Events', 'data': 'Drag Leave Element'}]" style={{ padding: '2rem', backgroundColor: 'yellow' }} draggable="true" title="Drag element out of valid drop zone">Drag Leave</div>
          </Rhythm>
          <Rhythm>
            <video
              width="640"
              height="360"
              controls
              data-tracking="[{
                'event': 'play', 'label': 'Video Play', 'data': 'Played Video'
              },{
                'event': 'pause', 'label': 'Video Pause', 'data': 'Paused Video'
              },{
                'event': 'seeking', 'label': 'Video Seek', 'data': 'Video Seeking'
              },{
                'event': 'change', 'label': 'Video Volume', 'data': 'Changed Video Volume'
              }]"
            >
              <track kind="captions" />
              <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
            </video>
          </Rhythm>
        </SgPageWrapper>
      </SgPageShell__main>
    </SgPageShell__body>
  </SgPageShell>
);

page.pageTitle = 'Style Guide | Colors';
page.pageType = 'index';

export default page;
