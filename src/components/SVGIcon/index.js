import React from 'react';
import PropTypes from 'prop-types';

const SVGIcon = ({
  icon,
  ...props
}) => (!(icon.viewBox && icon.url) ? (
  <img src={icon} alt="icon" {...props} />
) : (
  <svg
    {...props}
    viewBox={icon.viewBox}
    dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
      __html: `<use href="${icon.url.replace(/-usage$/, '')}" />`,
    }}
  />
));

SVGIcon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
};

SVGIcon.defaultProps = {
  icon: '',
};

export default SVGIcon;
