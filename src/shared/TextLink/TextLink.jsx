import React from 'react';

const TextLink = ({ id, text, url, classnames, containerStyles }) => {
  return (
    <div className="link" style={containerStyles}>
      <a href={url} id={id} className={classnames}>
        {text}
      </a>
    </div>
  );
};

export default TextLink;
