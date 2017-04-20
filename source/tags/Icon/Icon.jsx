export const Icon = (props) => {
  const {
    className,
    size,
    variant,
    name,
    ...attrs
  } = props;

  const classStack = Rucksack.createClassName([
    'icon',
    Rucksack.createVariants('icon--', size),
    Rucksack.createVariants('icon--', name),
    Rucksack.createVariants('icon--', variant),
    className
  ]);

  return (
    <svg className={classStack} {...attrs}>
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

Icon.defaultProps = {
  size: 'normal',
  variant: 'default'
};

Icon.propTypes = {
  className: React.PropTypes.string,
  size: React.PropTypes.string,
  variant: React.PropTypes.string,
  name: React.PropTypes.string.isRequired
};

export default Icon;
