import Heading from '@sg-atoms/SgHeading/SgHeading';
import Rhythm from '@sg-atoms/SgRhythm/SgRhythm';
import SgExpander from '@sg-atoms/SgExpander/SgExpander';
import { themes } from '@source/fc-config';


const SgFileIndex__ItemThemed = (props) => {
  const { url, content } = props.item;
  const spacedContent = content.replace(/([a-zA-Z])(?=[A-Z])/g, '$1 ');

  const firstTheme = themes.length ? `?theme=${themes[0].id}` : '';

  return (
    <li>
      <a className="SgFileIndex__name" href={`${url}${firstTheme}`}>{spacedContent}</a>
      { themes.length > 1 &&
        <span className="SgFileIndex__links">
          ({ themes
            .map((t) => (
              <a key={t.id} href={`${url}?theme=${t.id}`}>{t.name}</a>
            ))
            .reduce((list, item, i) => {
              if (i > 0) list.push(<span key={`seperator-${i}`}>/</span>);
              list.push(item);
              return list;
            }, [])
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
  const spacedContent = content.replace(/([a-zA-Z])(?=[A-Z])/g, '$1 ');

  return (
    <li>
      <a className="SgFileIndex__name" href={`${url}`}>{spacedContent}</a>
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

  const cleanTitle = `toggle-${title.toLowerCase().replace(/\s/g, '-')}`;

  return (
    <RhythmComponent className="SgFileIndex">
      { title &&
        <HeadingComponent level={headingSize} className="SgStyleguide__toggleTrigger SgStyleguide__toggleTrigger--reverse" id={cleanTitle}>
          { title }
          <SgExpander />
          &nbsp;
          { items.length > 0 &&
            <small className="SgFileIndex__count">{items.length}</small>
          }
        </HeadingComponent>
      }
      { items.length > 0
        ? (
          <ul className={`SgStyleguide__toggleTarget Rhythm ${className}`} {...attrs}>
            { items.map((item) => (
              item.theme === undefined && item.theme !== null
                ? <SgFileIndex__ItemThemed key={item.url} item={item} />
                : <SgFileIndex__Item key={item.url} item={item} />
            )) }
          </ul>
        )
        : <ul className={`SgStyleguide__toggleTarget Rhythm ${className}`} {...attrs} />
      }
    </RhythmComponent>
  );
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
