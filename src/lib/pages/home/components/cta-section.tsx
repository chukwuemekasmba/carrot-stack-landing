import { Box, Flex, Text, Link, Button } from '@chakra-ui/react';

export const CTASection = () => {
  return (
    <Box textAlign="center">
      <Box transform="scale(0.85)">
        <Flex marginY={4} justifyContent="center" gap={2}>
          <Link 
            href={"/get-started"} 
            _hover={{ textDecoration: "none"}}
          >
            <Button display={"flex"} gap={1} colorScheme={"green"} variant={"solid"}>
              <Text color={"green.500"}>Get Started</Text>
            </Button>
          </Link>

          <Link 
            href={"/pricing"} 
            _hover={{ textDecoration: "none"}}
          >
            <Button display={"flex"} gap={1} variant={"outline"}>
              <Text color={"orange.600"}>View Pricing</Text>
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};
