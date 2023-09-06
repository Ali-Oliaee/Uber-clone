import {StackHeaderProps} from '@react-navigation/stack';

declare global {
  type NavigationProp = {
    navigation: StackHeaderProps['navigation'];
  };
}
