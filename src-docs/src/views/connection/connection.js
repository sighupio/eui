import React from 'react';

import { FuryConnection } from '../../../../src/components';

export default () => {
  return (
    <>
      <div style={{ width: 200 }}>
        <FuryConnection isConnected={false} />
        <br />
        <FuryConnection isConnected={true} />
      </div>
    </>
  );
};
