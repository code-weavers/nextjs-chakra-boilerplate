import { extendTheme, ComponentStyleConfig } from '@chakra-ui/react';
import { buttonStyles } from './button.styles';

export const theme = extendTheme({
  components: {
    Button: buttonStyles,
  },
});
