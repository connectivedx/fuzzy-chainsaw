import Table from './Table';

export default [{
  name: 'Table with caption',
  component: (
    <Table>
      <caption>
        Table caption
      </caption>
      <thead>
        <tr>
          <th>Rating</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Lorem Ipsum</th>
          <td>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nostrum numquam officiis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </td>
        </tr>
        <tr>
          <th>Lorem Ipsum</th>
          <td>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nostrum numquam officiis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </td>
        </tr>
        <tr>
          <th>Lorem Ipsum</th>
          <td>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nostrum numquam officiis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </td>
        </tr>
        <tr>
          <th>Lorem Ipsum</th>
          <td>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nostrum numquam officiis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}, {
  name: 'Auto sizing table',
  component: (
    <Table variant="auto">
      <thead>
        <tr>
          <th>This thing</th>
          <th>&nbsp;</th>
          <th>That thing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>With this</td>
          <td><small>or</small></td>
          <td>With that</td>
        </tr>
        <tr>
          <td>With this</td>
          <td><small>or</small></td>
          <td>With that</td>
        </tr>
        <tr>
          <td>With this</td>
          <td><small>or</small></td>
          <td>With that</td>
        </tr>
      </tbody>
    </Table>
  )
}, {
  name: 'Responsive Table',
  component: (
    <Table variant="responsive">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Amount</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-heading="Name">First item</td>
          <td data-heading="Value">$10</td>
          <td data-heading="Amount">41</td>
          <td data-heading="Count">3</td>
        </tr>
        <tr>
          <td data-heading="Name">Second item</td>
          <td data-heading="Value">$20</td>
          <td data-heading="Amount">82</td>
          <td data-heading="Count">58</td>
        </tr>
        <tr>
          <td data-heading="Name">Third item</td>
          <td data-heading="Value">$30</td>
          <td data-heading="Amount">34</td>
          <td data-heading="Count">9</td>
        </tr>
        <tr>
          <td data-heading="Name">Fourth item</td>
          <td data-heading="Value">$40</td>
          <td data-heading="Amount">58</td>
          <td data-heading="Count">21</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td data-heading="Name">Total summary</td>
          <td data-heading="Value">$150</td>
          <td data-heading="Amount">265</td>
          <td data-heading="Count">97</td>
        </tr>
      </tfoot>
    </Table>
  )
}, {
  name: 'Responsive Table with Inline Data',
  component: (
    <Table variant="inline-data">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Amount</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-heading="Name">First item</td>
          <td data-heading="Value">$10</td>
          <td data-heading="Amount">41</td>
          <td data-heading="Count">3</td>
        </tr>
        <tr>
          <td data-heading="Name">Second item</td>
          <td data-heading="Value">$20</td>
          <td data-heading="Amount">82</td>
          <td data-heading="Count">58</td>
        </tr>
        <tr>
          <td data-heading="Name">Third item</td>
          <td data-heading="Value">$30</td>
          <td data-heading="Amount">34</td>
          <td data-heading="Count">9</td>
        </tr>
        <tr>
          <td data-heading="Name">Fourth item</td>
          <td data-heading="Value">$40</td>
          <td data-heading="Amount">58</td>
          <td data-heading="Count">21</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td data-heading="Name">Total summary</td>
          <td data-heading="Value">$150</td>
          <td data-heading="Amount">265</td>
          <td data-heading="Count">97</td>
        </tr>
      </tfoot>
    </Table>
  )
}];
