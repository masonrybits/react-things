import React from 'react';

//obj.key is fine
//obj.key-with-hyphen not fine

export default props => (
  <>
    <h1>Welcome</h1>
    <h2>{props['thing-count']}</h2>
  </>
)