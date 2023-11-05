'use client'

import { 
  Text,
  Link,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai'

export default function Socials() {
  return (
    <HStack
      fontSize={'6xl'}
      spacing={'16'}
      marginTop={'10'}
      justify={'center'}
    >
      <Link href='https://twitter.com/DraculeMiRaven'>
        <Text
          bgGradient={useColorModeValue('linear(to-l, #0ce8cc, cyan.600)', 'linear(to-l, #6a1eac, #FF0080)')}
          rounded={'full'}
          bgClip={'content-box'}
          textColor={'white'}
        > 
          <AiFillTwitterCircle/>
        </Text>
      </Link>

      <Link href='https://github.com/miraven'>
        <Text
          bgGradient={useColorModeValue('linear(to-l, #0ce8cc, cyan.600)', 'linear(to-l, #6a1eac, #FF0080)')}
          rounded={'full'}
          bgClip={'content-box'}
          textColor={'white'}
        > 
          <AiFillGithub/>
        </Text>
      </Link>
      <Link href='https://www.linkedin.com/in/raven-nuega-86406513b/'>
        <Text
          bgGradient={useColorModeValue('linear(to-l, #0ce8cc, cyan.600)', 'linear(to-l, #6a1eac, #FF0080)')}
          bgClip={'content-box'}
          textColor={'white'}
        > 
          <AiFillLinkedin/>
        </Text>
      </Link>
    </HStack>
  )
}
