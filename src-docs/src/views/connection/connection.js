import React from 'react';

import { Connection } from '../../../../src/components';

export default () => {
  return (
    <>
      <Connection isConnected={false} />
      <Connection isConnected={true} />
    </>
  );
};
