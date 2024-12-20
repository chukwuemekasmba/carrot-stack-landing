import { Button } from '@/components/ui/button';
import {
  Box,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  Flex,
} from '@chakra-ui/react';
import Link from 'next/link';

export const Page404 = () => {
  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <Image
        margin="0 auto"
        width={{ base: '100%', sm: '70%', md: '60%' }}
        src="/404 Error-pana.svg"
        alt="Error 404 not found Illustration"
      />
      <Text textAlign="center" fontSize="xs" color="gray">
        <ChakraLink
          href="https://stories.freepik.com/web"
          target="_blank"
          rel="noopener noreferrer"
        >
          Illustration by Freepik Stories
        </ChakraLink>
      </Text>

      <Box marginY={4}>
        <Heading textAlign="center" size="lg">
          Page not Found.
        </Heading>

        <Box display={"flex"} flexDirection="column" justifyContent={"space-between"}  alignItems="center" gap={5} textAlign="center" marginTop={4}>
          <Button asChild size="sm">
            <Link href="/">Go Back Home</Link>
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
