'use client'

import { 
	Heading,
	Progress,
	Text,
	useColorModeValue,
	Stack,
	Box,
} from '@chakra-ui/react'

export default function About() {
    return (
      <Box marginTop={'20'}>
        <Heading 
          fontWeight={'black'} 
          fontSize={'4xl'} 
          bgGradient={useColorModeValue('linear(to-l, #6a1eac, #FF0080)', 'linear(to-r, #0ce8cc, cyan.600)')}
          bgClip={'text'}
          px={'-12'}
        >
          Hi, mi Raven.
        </Heading>
       <Text fontSize={'lg'} marginTop={'10'}>
          A curious case of a man fascinated with stories, AI, physics, philosophy, anime power structures,
          and the invisible thread that connects all disparate things and ideas. In my free time, I play a lot of basketball,
          watch anime, and start fun software projects! I have a beautiful wife 👩🏿‍⚕️. I take care of a dog named Frankie Ocean 🐶.
          Overall, I&apos;m working on being active on Github and actively working to share my overflowing glob of ideas on my blog. ✌🏼
        </Text> 
      </Box>
    )
}
