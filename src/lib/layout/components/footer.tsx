import { 
  Box,
  Button,
  Container, 
  Link,
  Grid, 
  GridItem, 
  Text } from '@chakra-ui/react';

import { FaApple, FaAndroid } from "react-icons/fa";

export const Footer = () => {

  return (
    <Container
      display="flex"
      flexDirection={'column'}
      justifyContent="space-between"
      alignItems="center"
      paddingInline="5"
      css={{ backdropFilter: 'blur(100px)' }}
      zIndex={2}
      gap={10}
      padding={4}
      maxWidth={'container.2xl'}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}  
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}  
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={5}
        >
          <Grid templateColumns='repeat(2, 1fr)' gap={2}>
            <GridItem w={"100%"}>
              <Link 
                href={"#faq"}
                color="gray"
                fontWeight="500"
              >
                FAQ
              </Link>
            </GridItem>
            <GridItem w={"100%"}>
              <Link 
              href={"#features"}
              color="gray"
              fontWeight="500"
              >
                Features
              </Link>
            </GridItem>
            <GridItem w={"100%"}>
              <Link 
                href={"#pricing"}
                color="gray"
                fontWeight="500"
              >
                Pricing
              </Link>
            </GridItem>
            <GridItem w={"100%"}>
              <Link 
                href={"/blog"}
                color="gray"
                fontWeight="500"
              >
                Blog
              </Link>
            </GridItem>
          </Grid>
        </Box>
        <Box
          display={"flex"} 
          flexDirection={"column"} 
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          width={"300px"}
          padding={4}
          gap={5}
          borderRadius={"1.2rem"}
          >
          <Box 
            display={"flex"} 
            flexDirection={"column"} 
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            gap={2}
          >
            <Text
              textTransform={"uppercase"}
              fontWeight={"700"}
              fontSize={"16"}
              letterSpacing={-1}
            >Get The App</Text>
            <Text
              textTransform={"normal"}
              fontWeight={"500"}
              fontSize={"14"}
              letterSpacing={-1}
              color='gray'
            >Stack your spending wisely.
            </Text>
          </Box>
         
         <Box 
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          >
          <Link 
            href={"https://carrot-stack.com"} 
            _hover={{ textDecoration: "none"}}
          >
            <Button display={"flex"} gap={1}>
              <FaApple color="green" />
              <Text>iOS</Text>
            </Button>
          </Link>

          <Link 
            href={"https://carrot-stack.com"}
            _hover={{ textDecoration: "none"}} 
          >
            <Button display={"flex"} gap={1}>
              <FaAndroid color="orange" />
              <Text>Android</Text>
            </Button>
          </Link>
         </Box>
        </Box>
      </Box>
      <Box 
        width={"100%"}>
        <Text 
          fontWeight={"500"} 
          textAlign={"center"}
          marginTop={"5"}
          >
            All rights reserved. CarrotStack ©️ 2024
        </Text>
      </Box>
    </Container>
  )
};