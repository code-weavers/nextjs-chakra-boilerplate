import { Flex, FlexProps } from '@chakra-ui/react';
import { FC } from 'react';

export const Form: FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex as={'form'} {...props}>
      {children}
    </Flex>
  );
};
