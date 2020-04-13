import React from 'react';

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
