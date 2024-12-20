'use client';

import { Flex } from '@chakra-ui/react';

import { FaCarrot } from 'react-icons/fa';
import { BsStack } from 'react-icons/bs';

export const SomeImage = () => {
  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <FaCarrot/>
      <BsStack/>
    </Flex>
  );
};
