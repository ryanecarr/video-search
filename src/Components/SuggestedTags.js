import React, { memo } from 'react';

const SuggestedTags = ({ tags, onTagClick }) => {
  for (let i = tags.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tags[i], tags[j]] = [tags[j], tags[i]];
  }
  const newList = tags.slice(0, Math.floor(Math.random() * tags.length + 1));
  const tagList = newList.map((tag) => (
    <button
      className='circular ui icon button'
      style={{ marginBottom: '5px' }}
      onClick={() => onTagClick(tag)}
      key={tag}
    >
      <span>{`#${tag}`}</span>
    </button>
  ));
  return <div>{tagList}</div>;
};

export default memo(SuggestedTags);
