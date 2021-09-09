import { PropTypes } from 'react-view';
import { FuryConnection } from '../../../../src/components';
// import Connection from './connection';
import { propUtilityForPlayground } from '../../services/playground';

export const connectionConfig = () => {
  const docgenInfo = Array.isArray(FuryConnection.__docgenInfo)
    ? FuryConnection.__docgenInfo[0]
    : FuryConnection.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.isConnected = {
    ...propsToUse.isConnected,
    required: true,
    type: PropTypes.Boolean,
    defaultValue: false,
  };

  return {
    config: {
      componentName: 'Connection',
      props: propsToUse,
      scope: {
        FuryConnection,
      },
      imports: {
        '@elastic/eui': {
          named: ['Connection'],
        },
      },
    },
  };
};
