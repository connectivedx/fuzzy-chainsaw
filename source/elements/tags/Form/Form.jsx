import {
  List,
  List__item
} from '@tags/List/List';

export const Form = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Form',
    `Form--${variant}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Form.defaultProps = {
  tagName: 'form',
  variant: 'default'
};

Form.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node
};

export const Form__fieldset = (props) => {
  const {
    tagName: Fieldset,
    className,
    variant,
    children,
    labelHidden,
    isEdited,
    isInvalid,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Form__fieldset',
    `Form__fieldset--${variant}`,
    labelHidden && 'Form__fieldset--label-hidden',
    isInvalid && 'is-invalid',
    isEdited && 'is-expanded',
    className
  ]);

  return (
    <Fieldset className={classStack} {...attrs}>
      {children}
    </Fieldset>
  );
};

Form__fieldset.defaultProps = {
  tagName: 'fieldset',
  variant: 'default'
};

Form__fieldset.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'collapsible']),
  isEdited: PropTypes.bool,
  labelHidden: PropTypes.bool,
  isInvalid: PropTypes.bool,
  children: PropTypes.node
};

export const Form__legend = (props) => {
  const {
    tagName: Legend,
    className,
    children,
    legendHidden,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Form__legend',
    legendHidden && 'Form__legend-hidden',
    className
  ]);

  return (
    <Legend className={classStack} {...attrs}>{children}</Legend>
  );
};

Form__legend.defaultProps = {
  tagName: 'legend'
};

Form__legend.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  legendHidden: PropTypes.bool,
  children: PropTypes.node
};

export const Form__label =
  FcUtils.createBasicComponent({
    name: 'Label',
    variants: ['default'],
    defaultProps: {
      tagName: 'label',
      variant: 'default'
    }
  });

export const Form__input = (props) => {
  const {
    tagName: input,
    forId,
    type = 'text',
    className,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Form__input',
    `Form__input--${type}`,
    className
  ]);

  return (
    <input id={forId} type={type} className={classStack} {...attrs} />
  );
};

Form__input.defaultProps = {
  tagName: 'input'
};

Form__input.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  forId: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'checkbox', 'radio', 'email', 'url', 'search', 'password', 'number', 'color', 'range', 'date', 'file', 'time', 'month', 'tel'])
};

export const Form__inputOptionSet = (props) => {
  const {
    tagName,
    className,
    inputClassName,
    labelClassName,
    variant,
    id,
    type,
    legend,
    label,
    value,
    isRequired,
    labelHidden,
    legendHidden,
    options,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'Form__inputOptionSet',
    `Form__inputOptionSet--${variant}`,
    className
  ]);

  const listItemClassStack = FcUtils.createClassStack([
    'Form__inputOptionSet__option',
    `Form__inputOptionSet__option--${variant}`,
    className
  ]);

  const inputClassStack = FcUtils.createClassStack([
    'Form__inputOptionSet__input',
    inputClassName
  ]);

  const labelClassStack = FcUtils.createClassStack([
    'InputOptionSet__label',
    labelClassName
  ]);

  return (
    <fieldset
      className={classStack}
      labelHidden={labelHidden}
      {...attrs}
    >
      {
        legend &&
        <Form__legend>
          {legend}
        </Form__legend>
      }
      {
        legendHidden &&
        <Form__legend className="visuallyhidden">
          {legendHidden}
        </Form__legend>
      }
      {children}
      <List>
        { options.map((option, i) => {
          const extraOptions = {};
          if (option.radioToggleId) {
            extraOptions['data-radio-toggle-id'] = option.radioToggleId;
          }
          return (
            <List__item key={i} className={listItemClassStack}>
              <input
                className={inputClassStack}
                type={type}
                id={`${id}-${i}`}
                name={id}
                value={option.value}
                defaultChecked={option.value === value}
                required={isRequired}
                {...extraOptions}
              />
              <label htmlFor={`${id}-${i}`} className={labelClassStack} dangerouslySetInnerHTML={{ __html: option.text }} />
            </List__item>
          );
        }) }
      </List>
    </fieldset>
  );
};

Form__inputOptionSet.defaultProps = {
  tagName: 'fieldset',
  variant: 'default',
  options: []
};

Form__inputOptionSet.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  legendHidden: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'table', 'required']),
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  legend: PropTypes.string,
  label: PropTypes.string,
  labelHidden: PropTypes.bool,
  isRequired: PropTypes.bool,
  isInvalid: PropTypes.bool,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
      PropTypes.string
    ]).isRequired
  })).isRequired
};

export const Form__textarea = (props) => {
  const {
    tagName: Textarea,
    forId,
    rows,
    cols,
    children,
    ...attrs
  } = props;

  return (
    <Textarea id={forId} rows={rows} cols={cols} {...attrs}>{children}</Textarea>
  );
};

Form__textarea.defaultProps = {
  tagName: 'textarea'
};

Form__textarea.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  forId: PropTypes.bool,
  rows: PropTypes.string,
  cols: PropTypes.string,
  children: PropTypes.node
};

export const Form__inputSelect = (props) => {
  const {
    id,
    options,
    isRequired
  } = props;

  return (
    <select
      required={isRequired}
      name={id}
      id={id}
      className="Form__inputSelect__input"
    >
      { options && options.map((option, i) => (
        <option key={i} value={option.value}>{option.text}</option>
      )) }
    </select>
  );
};

Form__inputSelect.defaultProps = {
  variant: 'default'
};

Form__inputSelect.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  isRequired: PropTypes.bool
};

export default Form;
