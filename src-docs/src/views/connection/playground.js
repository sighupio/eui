import { Connection } from '../../../../src/components/connection';
import { propUtilityForPlayground } from '../../services/playground';

export const connectionConfig = () => {
  const docgenInfo = Array.isArray(Connection.__docgenInfo)
    ? Connection.__docgenInfo[0]
    : Connection.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.isConnected = true;

  return {
    config: {
      componentName: 'Connection',
      props: { propsToUse },
      scope: {
        Connection,
      },
      imports: {
        '@elastic/eui': {
          named: ['Connection'],
        },
      },
    },
  };
};
