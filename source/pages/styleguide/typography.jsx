import Heading from '@tags/Heading/Heading';
import Link from '@tags/Link/Link';
import { List, List__item } from '@tags/List/List';
import Rhythm from '@tags/Rhythm/Rhythm';
import Wrapper from '@tags/Wrapper/Wrapper';

const page = () => (
  <Wrapper tagName="section">
    <Rhythm size="large">
      <Link href="../" title="">&laquo; Back to Style Guide</Link>

      <Rhythm size="small">
        <Heading level="h1">Level One Heading</Heading>
        <Heading level="h1" weight="thin">Level One Heading (Thin)</Heading>
        <Heading level="h2">Level Two Heading</Heading>
        <Heading level="h2" weight="thin">Level Two Heading (Thin)</Heading>
        <Heading level="h3">Level Three Heading</Heading>
        <Heading level="h3" weight="thin">Level Three Heading (Thin)</Heading>
        <Heading level="h4">Level Four Heading</Heading>
        <Heading level="h4" weight="thin">Level Four Heading (Thin)</Heading>
        <Heading level="h5">Level Five Heading</Heading>
        <Heading level="h5" weight="thin">Level Five Heading (Thin)</Heading>
        <Heading level="h6">Level Six Heading</Heading>
        <Heading level="h6" weight="thin">Level Six Heading (Thin)</Heading>
      </Rhythm>

      <hr />

      <Rhythm>
        <Heading level="h1">Level One Heading</Heading>
        <p>This is a paragraph of text. Some of the text may be <em>emphasized</em> and some it might even be <strong>strongly emphasized</strong>. Occasionally <q>quoted text</q> may be found within a paragraph... and of course <Link href="/#" title="This is an example link">a link</Link> may appear at any point in the text. The average paragraph contains five or six sentences although some may contain as little or one or two while others carry on for anything up to ten sentences and beyond.</p>

        <blockquote cite="https://en.wikipedia.org/wiki/Block_quotation">
          <p>A block quotation (also known as a long quotation or extract) is a quotation in a written document that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size font.</p>
        </blockquote>

        <Heading level="h2">Level Two Heading</Heading>
        <p>Lorem ipsum dolor sit amet, <em>consectetur adipiscing elit</em>. Integer <q>egestas ante et dolor</q> suscipit malesuada nec eu elit. In lobortis massa a <Link href="/#" title="This is an example link">sapien pharetra pellentesque</Link>. Donec euismod suscipit dictum. <strong>Sed sed euismod erat.</strong> Morbi vel lobortis dolor. Suspendisse egestas scelerisque est, et semper leo viverra vitae. Sed nec urna id dolor eleifend ultricies. Fusce consequat pellentesque venenatis.</p>

        <List>
          <List__item>Duis id ornare dui.</List__item>
          <List__item>
            Suspendisse venenatis lorem at odio rutrum cursus.
            <List>
              <List__item>Fusce ultricies id nulla vel faucibus.</List__item>
              <List__item>Ut mauris turpis, pellentesque nec scelerisque sit amet</List__item>
            </List>
          </List__item>
          <List__item>Vestibulum interdum, quam ultricies consequat mollis, libero ipsum sagittis massa, nec molestie lacus nibh sed mi.</List__item>
          <List__item>Aenean eget massa posuere, porttitor leo vitae, scelerisque lacus.</List__item>
        </List>

        <Heading level="h3">Level Three Heading</Heading>
        <p>Donec venenatis id libero et pretium. Duis semper dui magna, <em>sit amet mattis magna porttitor</em> eget. Vestibulum interdum scelerisque dolor a aliquet. Vestibulum convallis blandit accumsan. Vestibulum eros magna, <Link href="/#" title="This is an example link">volutpat vel volutpat quis</Link>, lobortis feugiat odio. Quisque <q>bibendum massa sed</q> faucibus porta. Curabitur mollis convallis dictum. <strong>Cras ipsum odio</strong>, aliquam ac luctus a, blandit ac sapien.</p>

        <List variant="ordered">
          <List__item>Duis id ornare dui.</List__item>
          <List__item>
            Suspendisse venenatis lorem at odio rutrum cursus.
            <List>
              <List__item>Fusce ultricies id nulla vel faucibus.</List__item>
              <List__item>Ut mauris turpis, pellentesque nec scelerisque sit amet</List__item>
            </List>
          </List__item>
          <List__item>Vestibulum interdum, quam ultricies consequat mollis, libero ipsum sagittis massa, nec molestie lacus nibh sed mi.</List__item>
          <List__item>Aenean eget massa posuere, porttitor leo vitae, scelerisque lacus.</List__item>
        </List>

        <Heading level="h4">Level Four Heading</Heading>
        <p>Praesent nec condimentum turpis. Aenean non posuere ligula. <strong>Vestibulum quis cursus lectus.</strong> Suspendisse ut tortor sit <Link href="/#" title="This is an example link">amet quam ullamcorper efficitur</Link> sit amet nec neque. Fusce justo ipsum, feugiat eget tristique sit amet, blandit id lectus. Phasellus pharetra sed lacus id sollicitudin. <q>Never gonna give you up, never gonna let you down, never gonna run around and desert you.</q> In varius dolor non bibendum feugiat. Morbi <em>elementum sed orci</em> ac hendrerit.</p>
      </Rhythm>
    </Rhythm>
  </Wrapper>
);

page.pageTitle = 'Typography';
page.pageType = 'index';

export default page;
