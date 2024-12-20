import { Box, Flex, Text } from '@chakra-ui/react';

import { ColorModeButton } from '@/components/ui/color-mode';

import Link from 'next/link';

export const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Box width={"full"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Link href={"/"}>
          <Text color={"gray.500"} fontWeight={"bold"} fontFamily={"mono"}>CarrotStack</Text>
        </Link>
        <ColorModeButton />
      </Box>
    </Flex>
  );
};
