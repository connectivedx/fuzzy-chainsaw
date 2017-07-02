import Heading from 'SgTags/SgHeading/SgHeading';
import Rhythm from 'SgTags/SgRhythm/SgRhythm';

const pagesContext = require.context('Pages/', true, /^(?!.*\.test|.*\.example).*\.jsx$/);
const tagsContext = require.context('Tags/', true, /^(?!.*\.test|.*\.example).*\.jsx$/);
const componentsContext = require.context('Components/', true, /^(?!.*\.test|.*\.example).*\.jsx$/);


const isRenderableModule = (key) => (
  key.indexOf('.jsx') !== -1 && // grab jsx files
  key.indexOf('.test.jsx') === -1 && // skip test files
  key.substr(0, 1) !== '_' // skip partial files
);

// builds a path:module object
// { './source/page.jsx': require('./source/page.jsx') }
const requireAllpages = () =>
  pagesContext.keys()
    .filter(isRenderableModule)
    .reduce((modules, key) => {
      const newKey = key.replace(/\.jsx$/, '.html');
      modules[newKey] = pagesContext(key).default;
      return modules;
    }, { });

const requireAllComponents = (context, prefix) =>
  context.keys()
    .filter(isRenderableModule)
    .reduce((modules, key) => {
      const name = key.substr(2).split('/')[0];
      modules[prefix + name] = context(key).default;
      return modules;
    }, {});

const path2LinkList = (baseUrl = '') => (data) => {
  const normalPath = data.path.substr(
    0,
    data.path.lastIndexOf('.') !== -1
    ? data.path.lastIndexOf('.')
    : undefined
  );

  return {
    ...data,
    url: `${baseUrl}/${normalPath}.html`, // remove html on dev
    content:
      data.path
        .replace('.html', '')
        .split('/')
        .map((s) => s.substr(0, 1).toUpperCase() + s.substr(1))
        .join(' / ')
  };
};

const sortFoldersFirst = (a, b) =>
  a.path.split('/').length - b.path.split('/').length;

const sortAlphabetical = (a, b) => {
  const A = a.path.toLowerCase();
  const B = b.path.toLowerCase();
  return (A < B)
    ? -1
    : (A > B) ? 1 : 0;
};

const groupData = (res, data) => {
  if (data.theme) {
    if (res.themes[data.theme] === undefined && res.themes[data.theme] !== null) {
      res.themes[data.theme] = [];
    }

    res.themes[data.theme].push(data);
  } else if (data.pageType === 'index') {
    res.indexes.push(data);
  } else {
    res.pages.push(data);
  }

  return res;
};

const pageData = requireAllpages(pagesContext);
export const allPagesIndexData =
  Object.keys(pageData)
    .map((p) => ({
      path: p.substr(2),
      pageType: pageData[p].pageType,
      theme: pageData[p].theme
    }))
    .reduce(groupData, {
      indexes: [],
      pages: [],
      themes: {}
    });

export const pagesIndexData =
  allPagesIndexData.pages
    .sort(sortFoldersFirst)
    .sort(sortAlphabetical)
    .map(path2LinkList(process.env.BASE_URL.slice(0, -1)));

export const indexesIndexData =
  allPagesIndexData.indexes
    .sort(sortFoldersFirst)
    .sort(sortAlphabetical)
    .map(path2LinkList(process.env.BASE_URL.slice(0, -1)));

export const themedPagesIndexData =
  Object.keys(allPagesIndexData.themes)
    .reduce((res, key) => {
      res[key] =
        allPagesIndexData.themes[key]
          .sort(sortFoldersFirst)
          .sort(sortAlphabetical)
          .map(path2LinkList(process.env.BASE_URL.slice(0, -1)));

      return res;
    }, { });

export const componentsIndexData =
  Object.keys(requireAllComponents(componentsContext, '/styleguide/components/'))
    .filter((p) => p.indexOf('/components/') !== -1)
    .map((p) => ({
      path: p.substr(p.indexOf('/components/') + '/components/'.length)
    }))
    .map(path2LinkList(`${process.env.BASE_URL}styleguide/components`));


export const tagsIndexData =
  Object.keys(requireAllComponents(tagsContext, '/styleguide/tags/'))
    .map((p) => ({
      path: p.substr(p.indexOf('/tags/') + '/tags/'.length)
    }))
    .map(path2LinkList(`${process.env.BASE_URL}styleguide/tags`));


const SgFileIndex__ItemThemed = (props) => {
  const { url, content } = props.item;
  const themes = [{
    id: 'generic',
    name: 'Generic'
  }];

  return (
    <li>
      <a className="SgFileIndex__name" href={`${url}?theme=${themes[0]}`}>{content}</a>
      { themes.length > 1 &&
        <span className="SgFileIndex__links">
          &nbsp;
          ({ themes
              .map((t) => (
                <a href={`${url}?theme=${t.id}`}>{t.name}</a>
              ))
          })
        </span>
      }
    </li>
  );
};

SgFileIndex__ItemThemed.propTypes = {
  item: PropTypes.object
};


const SgFileIndex__Item = (props) => {
  const { url, content } = props.item;

  return (
    <li>
      <a className="SgFileIndex__name" href={`${url}`}>{content}</a>
    </li>
  );
};

SgFileIndex__Item.propTypes = {
  item: PropTypes.object
};


export const SgFileIndex = (props) => {
  const {
    themeLinks,
    items,
    className,
    headingSize,
    size,
    title,
    RhythmComponent,
    HeadingComponent,
    ...attrs
  } = props;

  return items.length
    ? (
      <RhythmComponent size={size} className="SgFileIndex">
        { title && <HeadingComponent level={headingSize}>{title}</HeadingComponent> }
        <ul className={className} {...attrs}>
          { items.map((item) => (
            item.theme === undefined && item.theme !== null
              ? <SgFileIndex__ItemThemed key={item.url} item={item} />
              : <SgFileIndex__Item key={item.url} item={item} />
          )) }
        </ul>
      </RhythmComponent>
    )
    : null;
};

SgFileIndex.defaultProps = {
  themeLinks: false,
  items: [],
  className: '',
  headingSize: 'h2',
  size: 'default',
  RhythmComponent: Rhythm,
  HeadingComponent: Heading
};

SgFileIndex.propTypes = {
  themeLinks: PropTypes.bool,
  items: PropTypes.array,
  className: PropTypes.string,
  headingSize: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  RhythmComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ]),
  HeadingComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ])
};


export default SgFileIndex;
