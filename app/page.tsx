"use client"

import { 
  Container, 
  Heading,
  Text,
  Box,
  Center,
  Wrap,
  useColorModeValue,
  useColorMode,
  Highlight,
  HStack,
  Link
} from '@chakra-ui/react'
import Selfie from '@/components/selfie'
import Projects from '@/components/projects'
import Socials from '@/components/socials'
import Skills from '@/components/skills'
import Footer from '@/components/footer'
import Nav from '@/components/navbar'
import Interests from '@/components/interests'
import About from '@/components/about'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <main>
      <Nav/>
      <Selfie/>
      <Container alignContent={'center'} maxWidth={'5xl'}>
        <Heading 
          textAlign={'center'} 
          fontSize={'5xl'}
          fontWeight={'black'}
          marginTop={'5'}
          // color={useColorModeValue('teal.400', 'teal.100')}
          // bgGradient={'linear(to-r, green.500, cyan.400)'}
          bgGradient={useColorModeValue('linear(to-l, #6a1eac, #FF0080)', 'linear(to-l, #0ce8cc, cyan.600)')}
          // bgGradient={'linear(to-l, #6a1eac, #FF0080)'}
          bgClip={'text'}
        >
          Raven Nuega
        </Heading>
        <Heading textAlign={'center'} padding={4.0} fontSize={'xl'} fontFamily={'monospace'} fontWeight={'black'}>
          ML Engineer 👨🏻‍💻 / Basketball Jones 🏀 / Anime Lover 🥷🏼
        </Heading>
        <Box paddingTop={'10'} fontSize={'lg'} textAlign={'center'}>
          I&apos;m a software engineer developing scalable ML solutions and components at Capital One.
          Current interests include autonomous systems, generative AI, and overall just building intelligent things.
        </Box>
        <Socials/>
        <About/>
        <Interests/>
        <Skills/> 
        <Projects/>
      </Container>
      <Footer/>
    </main>
  )
}
//useColorModeValue('twitter.500', 'twitter.200')
