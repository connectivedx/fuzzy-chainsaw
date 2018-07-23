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

            <Heading level="h4">Basic click examples</Heading>
            <Rhythm tagName="ul">
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
                <p>Event specifiys what clientside event will perform a tracking. Label allows you to cutomize our tracking entry identity. Data allows you to pass custom data along with our tracking entry.</p>
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
                  Inner from another element
                </Link>
                <p className="hidden-text-area" style={{ display: 'none' }}>Im hidden text, but still used in tracking</p>
                <p>Instead of setting data as a explicit string, you can set data as a element selector. This will pass an elements innerHTML as a string to our tracking entry.</p>
              </li>
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event':'click',
                    'label': 'Hidden Value Example',
                    'data': '.input-attribute:attr(title)'
                  }]"
                >
                  Attribute from another element
                </Link>
                <Link href="#/" className="input-attribute" title="I'm a link title attribute value!" style={{ display: 'none' }}>A simple string of content for example purposes only.</Link>
                <p>Further more, you can use the :attr() flag to grab the value of a specific element attribute instead of innHTML.</p>
              </li>
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event':'click',
                    'label': 'Data Spread Example',
                    'data': {'hello': 'world', 'howdy': 'user'}
                  }]"
                >
                  Data spreading
                </Link>
                <p>Instead of passing a string or a selector, you can pass an object that spreads out within your tracking inplace of data.</p>
              </li>
              <li>
                <Heading level="h4">
                  Data spreading (with selectors)
                </Heading>
                <div
                  style={{ display: 'flex', padding: '1rem', justifyContent: 'space-around' }}
                  data-tracking="[{
                    'event':'click',
                    'label': 'Data Spread Examplev2',
                    'elements': 'option',
                    'data': {'selectOne': '#selectOne:attr(value)', 'selectTwo': '#selectTwo:attr(value)'}
                  }]"
                >
                  <div className="FormSelect__one">
                    <select id="selectOne">
                      <option value="one">Option one</option>
                      <option value="two">Option two</option>
                      <option value="three">Option three</option>
                    </select>
                  </div>

                  <div className="FormSelect__two">
                    <select id="selectTwo">
                      <option value="one">Option one</option>
                      <option value="two">Option two</option>
                      <option value="three">Option three</option>
                    </select>
                  </div>
                </div>
                <p>Lastly, you can use selectors in pass data spread objects to grab innerHTML or :attr(values).</p>
              </li>
            </Rhythm>

            <Heading level="h4">Advanced examples</Heading>
            <Rhythm tagName="ul">
              <li>
                <Link
                  href="#/"
                  data-tracking="[{
                    'event':'click',
                    'label': 'Multi Example',
                    'data': 'First Data Value'
                  },{
                    'event':'mousemove',
                    'label': 'Multi Example',
                    'data': 'Second Data Value'
                  }]"
                >
                  Multi event tracking
                </Link>
                <p>Sometimes you might have the need to sent out two differnt tracking entries based on different user events.</p>
              </li>
              <li>
                <List
                  data-tracking="[{
                    'event':'click',
                    'label': 'Data Points Example',
                    'data': 'A multi-element was clicked',
                    'elements': '.link'
                  }]"
                  className="mult-element-list"
                >
                  <li><Link href="#/">Multi element tracking link</Link></li>
                  <li><Link href="#/">Multi element tracking link</Link></li>
                  <li><Link href="#/">Multi element tracking link</Link></li>
                </List>
              </li>
            </Rhythm>

            <p>Instead of placing the tracking data attribute across many elements, set it on a parent and pass a elements selector instead.</p>

            <Heading level="h4">Keyboard examples</Heading>
            <div className="Tracking">
              <textarea
                data-tracking="[{
                  'event': 'keydown',
                  'label': 'Keyboard Events',
                  'data': 'Element Keydown'
                }]"
                placeholder="Keydown tracking"
              />
            </div>
            <div className="Tracking">
              <textarea
                data-tracking="[{
                  'event': 'keyup',
                  'label': 'Keyboard Events',
                  'data': 'Elemenet Keyup'
                }]"
                placeholder="Keyup tracking"
              />
            </div>
            <div className="Tracking">
              <textarea
                data-tracking="[{
                  'event': 'keypress',
                  'label': 'Keyboard Events',
                  'data': 'Element Keypress'
                }]"
                placeholder="Keypress tracking"
              />
            </div>

            <Heading level="h4">Mouse examples</Heading>
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

            <Heading level="h4">Scroll examples</Heading>
            <textarea data-tracking="[{'event': 'scroll', 'label': 'Scroll Event', 'data': 'Element Scrolled'}]" value="Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll TextareaScroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll Textarea Scroll TextareaScroll Textarea Scroll Textarea" />

            <Heading level="h4">Cut, Copy, Pasete examples</Heading>
            <textarea data-tracking="[{'event': 'cut', 'label': 'Clipboard Events', 'data': 'Cut to clipboard'}]" value="Highlight and cut text from this textarea" />
            <textarea data-tracking="[{'event': 'copy', 'label': 'Clipboard Events', 'data': 'Copy to clipboard'}]" value="Highlight and copy text from this textarea" />
            <textarea data-tracking="[{'event': 'paste', 'label': 'Clipboard Events', 'data': 'Paste to clipboard'}]" value="Paste text here" />

            <Heading level="h4">Drag / Drop examples</Heading>
            <div data-tracking="[{'event': 'drag', 'label': 'Drag Drop Events', 'data': 'Drag Element'}]" style={{ padding: '2rem', backgroundColor: 'red' }} draggable="true" title="drag element">Drag</div>
            <div data-tracking="[{'event': 'dragend', 'label': 'Drag Drop Events', 'data': 'Drag End Element'}]" style={{ padding: '2rem', backgroundColor: 'blue', color: 'white' }} draggable="true" title="Drag element, then press esc">Drag End</div>
            <div data-tracking="[{'event': 'dragover', 'label': 'Drag Drop Events', 'data': 'Drag Over Element'}]" style={{ padding: '2rem', backgroundColor: 'green' }} draggable="true" title="Drag element over another draggable element">Drag Over</div>
            <div data-tracking="[{'event': 'dragleave', 'label': 'Drag Drop Events', 'data': 'Drag Leave Element'}]" style={{ padding: '2rem', backgroundColor: 'yellow' }} draggable="true" title="Drag element out of valid drop zone">Drag Leave</div>

            <Heading level="h4">Video examples</Heading>
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
