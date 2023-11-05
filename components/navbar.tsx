"use client"

import { ReactNode } from 'react';
import {
  Box,
  Heading,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HamburgerIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

const MiRavenLogo = () => {
    return (
      (<Link href="/">
  
        <LogoBox>
          <Avatar
          size={'sm'}
          src={'https://avatars.githubusercontent.com/u/53028144?v=4'}
          />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight="bold"
            ml={3}
          >
            miraven
          </Text>
        </LogoBox>
  
      </Link>)
    );
};

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box as='nav' position='fixed' zIndex={2} w='100%' css={{ backdropFilter: 'blur(10px)' }} px={4}>
      {/* bg={useColorModeValue('#ffffff40', '#20202380')} */}
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            {/* <Text
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontWeight="bold"
                ml={3}
            >
            miraven
            </Text> */}
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <MiRavenLogo />
          </Heading>
          <Flex alignItems={'center'}>
            <Stack 
              direction={{ base: 'column', md: 'row' }}
              display={{ base: 'none', md: 'flex' }}
              width={{ base: 'full', md: 'auto' }}
              alignItems="center"
              flexGrow={1}
              spacing={5}
              padding={5}
              mt={{ base: 4, md: 0 }}
            >
                <Link href='/resume_2023.pdf'>                    
                    <Box
                        // color={useColorModeValue('teal.100', 'teal.500')}
                        // colorScheme='teal'
                        textColor={'white'}
                        as='button'
                        rounded={'md'}
                        bgGradient= {useColorModeValue('linear(to-l, #0ce8cc, cyan.600)', 'linear(to-l, #6a1eac, #FF0080)')}
                        // bgGradient={'linear(to-l, #6a1eac, #FF0080)'}
                        paddingX={'4'}
                        paddingY={'2'}
                        fontWeight="bold"
                    >
                        Resume
                    </Box>
                </Link>
                {/* <Link href='projects'>                    
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontWeight="normal"
                    >
                        Projects
                    </Text>
                </Link> */}
                <Link href='/blog'>                    
                <Box
                        // color={useColorModeValue('teal.100', 'teal.500')}
                        // colorScheme='teal'
                        textColor={'white'}
                        as='button'
                        rounded={'md'}
                        bgGradient= {useColorModeValue('linear(to-r, #0ce8cc, cyan.600)', 'linear(to-r, #6a1eac, #FF0080)')}
                        // bgGradient={'linear(to-l, #6a1eac, #FF0080)'}
                        paddingX={'4'}
                        paddingY={'2'}
                        fontWeight="bold"
                    >
                        Blog
                    </Box>
                </Link>
            </Stack>
            <Box flex={1}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>

              <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                <Menu isLazy id="navbar-menu">
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="outline"
                    aria-label="Options"
                  />
                  <MenuList>
                    <MenuItem as={Link} href="/resume_2023.pdf">
                      Resume
                    </MenuItem>
                    <MenuItem as={Link} href="/blog">
                      Blog
                    </MenuItem>
                    <MenuItem
                      as={Link}
                      href="https://github.com/miraven/miraven.github.io/tree/master"
                    >
                      Source
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}


            //   <Menu>
            //     <MenuButton
            //       as={Button}
            //       rounded={'full'}
            //       variant={'link'}
            //       cursor={'pointer'}
            //       minW={0}>
            //       <Avatar
            //         size={'sm'}
            //         src={'https://avatars.githubusercontent.com/u/53028144?v=4'}
            //       />
            //     </MenuButton>
            //     <MenuList alignItems={'center'}>
            //       <br />
            //       <Center>
            //         <Avatar
            //           size={'2xl'}
            //           src={'https://avatars.githubusercontent.com/u/53028144?v=4'}
            //         />
            //       </Center>
            //       <br />
            //       <Center>
            //         <p>Username</p>
            //       </Center>
            //       <br />
            //       <MenuDivider />
            //       <MenuItem>Your Servers</MenuItem>
            //       <MenuItem>Account Settings</MenuItem>
            //       <MenuItem>Logout</MenuItem>
            //     </MenuList>
            //   </Menu>

        //     <Box>
        //     <Flex
        //       bg={useColorModeValue("white", "gray.800")}
        //       color={useColorModeValue("gray.600", "white")}
        //       minH={"60px"}
        //       py={{ base: 2 }}
        //       px={{ base: 4, md: 20, lg: 32 }}
        //       borderBottom={1}
        //       borderStyle={"solid"}
        //       borderColor={useColorModeValue("gray.200", "gray.900")}
        //       align={"center"}
        //     >
        //       <Flex
        //         flex={{ base: 1, md: "auto" }}
        //         ml={{ base: -2 }}
        //         display={{ base: "flex", md: "none" }}
        //       >
        //         <IconButton
        //           onClick={onToggle}
        //           icon={
        //             isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
        //           }
        //           variant={"ghost"}
        //           aria-label={"Toggle Navigation"}
        //         />
        //       </Flex>
        //       <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
        //         <Text
        //           textAlign={useBreakpointValue({ base: "center", md: "left" })}
        //           fontFamily={"heading"}
        //           color={useColorModeValue("gray.800", "white")}
        //         >
        //           <Button as="a" href="/" variant={"link"}>
        //             Logo
        //           </Button>
        //         </Text>
      
        //         <Flex display={{ base: "none", md: "flex" }} ml={10}>
        //           <DesktopNav />
        //         </Flex>
        //       </Flex>
      
        //       <Stack
        //         flex={{ base: 1, md: 0 }}
        //         justify={"flex-end"}
        //         direction={"row"}
        //         spacing={6}
        //       >
        //         <Button
        //           as={"a"}
        //           fontSize={"sm"}
        //           fontWeight={400}
        //           variant={"link"}
        //           href="/signin"
        //         >
        //           Sign In
        //         </Button>
        //         <Button
        //           as={"a"}
        //           display={{ base: "none", md: "inline-flex" }}
        //           fontSize={"sm"}
        //           fontWeight={600}
        //           color={"white"}
        //           href="/signup"
        //           bg={"pink.400"}
        //           _hover={{
        //             bg: "pink.300",
        //           }}
        //         >
        //           Sign Up
        //         </Button>
        //       </Stack>
        //     </Flex>
        //   </Box>
