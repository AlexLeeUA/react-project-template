import React from 'react';
import PropTypes from 'prop-types';

const TextLink = ({ id, text, url, classnames }) => {
  return (
    <div className="link-container">
      <a href={url} id={id} className={classnames}>
        {text}
      </a>
    </div>
  );
};

export default TextLink;

TextLink.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  classnames: PropTypes.string,
};
