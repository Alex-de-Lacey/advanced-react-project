import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          flexDirection="column" // stack items vertically
          maxWidth="1024px"
          height={24} // give it a bit more height
          textAlign="center"
        >
          <p>Alex • © {currentYear}</p>
          <p>Developed as part of the Coursera Meta Advanced React course.</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;