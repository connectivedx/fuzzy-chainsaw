// creates a function for fetching variables

module.exports = (ns) => (name = 'default', variant) => {
  if (variant) {
    return `var(--${ns}-${name}--${variant})`;
  }

  return `var(--${ns}-${name})`;
};
