import { Grid, Heading, Text } from '@chakra-ui/react';

export const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="4xl" fontWeight="bold" color={"gray"}>
        CarrotStack
      </Heading>

      <Text fontSize="xs">
        Stack Your Spending Wisely.
      </Text>
    </Grid>
  );
};
