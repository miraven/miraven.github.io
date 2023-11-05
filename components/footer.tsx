'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Link,
  Avatar,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ReactNode } from 'react'
import styled from '@emotion/styled'

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

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <MiRavenLogo />
        <Text>© 2023 Raven Nuega. The colorscheme of this website is inspired by Mihawk from One Piece. 🤗</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'https://twitter.com/DraculeMiRaven'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Github'} href={'https://github.com/miraven'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/raven-nuega-86406513b/'}>
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}