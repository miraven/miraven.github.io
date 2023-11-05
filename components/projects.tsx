'use client'

import {
  AiFillGithub,
} from 'react-icons/ai'

import {
  Box,
  Avatar,
  Button,
  Container,
  Flex,
  Link,
  Heading,
  Image,
  Icon,
  Center,
  Stack,
  Card,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Text,
  Tag,
  useColorModeValue,
  SimpleGrid,
  Wrap,
  HStack,
  Spacer,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc'

export default function Projects() {
  return (
    <Stack marginTop={'20'}>
      <Heading 
        fontWeight={'black'} 
        fontSize={'4xl'} 
        bgGradient={useColorModeValue('linear(to-l, #6a1eac, #FF0080)', 'linear(to-r, #0ce8cc, cyan.600)')}
        bgClip={'text'}
      >
          Projects
      </Heading>
      <Wrap spacing={'12'} justify={'center'} paddingBlock={'10'}>
        <Card maxW='md' height={'xl'}>
          <CardBody>
            <Image
              src='mars_glider.gif'
              alt='Particle Filter'
              borderRadius='lg'
              height={'3xs'}
              width={'md'}
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Mars Glider</Heading>
              <Text>
                As part of the OMSCS program, I took a course in AI Robotics Techniques. One of the projects
                revolved around Particle Filters and its role in Localization. The objective was to localize
                the purple target using instantiated particles. I really enjoyed this project since it required
                implementing the algorithm as well as tuning the movement of the particles. 
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <HStack spacing='2'>
              <Tag size='md' borderRadius='full' variant='subtle' colorScheme={useColorModeValue('pink', 'cyan')}>
                Particle Filter
              </Tag>
              <Tag size='md' borderRadius='full' variant='subtle' colorScheme={useColorModeValue('pink', 'cyan')}>
                Robotics
              </Tag>
            </HStack>
          </CardFooter>
        </Card>
        <LinkBox as='article'>
          <Card maxW='md' height={'xl'}>
            <CardBody>
              <Image
                src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDY2cnl6enl6dXY5d3lmNW9iMDViNG8xNjJvd3hybG01YzI2M3J3YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5wiXFL0LYJfZ2awDwK/giphy.gif'
                alt='Jester'
                borderRadius='lg'
                height={'3xs'}
                width={'md'}
              />
              <Stack mt='6' spacing='3'>
                <LinkOverlay href='https://www.youtube.com/watch?v=WUC9OGQcqt8'>
                  <Heading size='md'>Jester</Heading>
                </LinkOverlay>
                <Text>
                  Jester is a gesture recognition prototype developed for OXOS Medical in Atlanta
                  as part of my senior capstone project. Our team built the prototype on a 2D CNN
                  architecture using Tensorflow with manually collected image dataset. I later worked
                  at OXOS Medical the summer after graduation to enhance Jester with hand 
                  tracking and to work on other computer vision proof of concepts.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <HStack spacing='2'>
                <Tag size='md' borderRadius='full' variant='subtle' colorScheme={useColorModeValue('pink', 'cyan')}>
                  Gesture Recognition
                </Tag>
                <Tag size='md' borderRadius='full' variant='subtle' colorScheme={useColorModeValue('pink', 'cyan')}>
                  Computer Vision
                </Tag>
              </HStack>
            </CardFooter>
          </Card>
        </LinkBox>
        <LinkBox as='article'>
          <Card maxW='md' height={'xl'}>
            <CardBody>
              <Image
                src='/jokic.gif'
                alt='MVP'
                borderRadius='lg'
                height={'3xs'}
                width={'md'}
              />
              <Stack mt='6' spacing='3'>
                <LinkOverlay href='https://github.com/miraven/NBA_MVP_Predictions-'>
                  <Heading size='md'>NBA MVP Predictions</Heading>
                </LinkOverlay>
                <Text>
                  Back in 2019, I debated a friend on who is the rightful NBA MVP.
                  I was also in an Intro to ML class that year, and I thought I&apos;d make a notebook
                  predicting who the MVP should be given the statlines of past MVP&apos;s using an ensemble 
                  of common ML models. Needless to say, the data proves my argument -- James Harden deserved
                  to be MVP. 😤
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <HStack spacing='2'>
                <Tag size='md' borderRadius='full' variant='subtle' colorScheme={useColorModeValue('pink', 'cyan')}>
                  Analytics
                </Tag>
                <Tag size='md' borderRadius='full' variant='subtle' colorScheme={useColorModeValue('pink', 'cyan')}>
                  Data Science
                </Tag>
                <Tag size='md' borderRadius='full' variant='subtle' colorScheme={useColorModeValue('pink', 'cyan')}>
                  Machine Learning
                </Tag>
              </HStack>
            </CardFooter>
          </Card>
        </LinkBox>
        <LinkBox as='article'>
          <Card maxW='md' height={'xl'}>
            <CardBody>
              <Image
                src='/webdev.gif'
                alt='MVP'
                borderRadius='lg'
                height={'3xs'}
                width={'md'}
              />
              <Stack mt='6' spacing='3'>
                <LinkOverlay href='#'>
                  <Heading size='md'>Portfolio Website using Chakra UI</Heading>
                </LinkOverlay>
                <Text>
                  I&apos;ve never built a website before. I didn&apos;t want to use a template.
                  So I watched a few videos about building portfolio websites and
                  got to learn a little about the vast front-end world that is React, NextJS, and ChakraUI.
                  Although my React code is pretty noob (don&apos;t look 🫣), this site has a lot of me in it and I had a blast
                  developing it!
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <HStack spacing='2'>
                <Tag size='md' borderRadius='full' variant='subtle' colorScheme={useColorModeValue('pink', 'cyan')}>
                  NextJS
                </Tag>
                <Tag size='md' borderRadius='full' variant='subtle' colorScheme={useColorModeValue('pink', 'cyan')}>
                  Chakra UI
                </Tag>
                <Tag size='md' borderRadius='full' variant='subtle' colorScheme={useColorModeValue('pink', 'cyan')}>
                  React
                </Tag>
              </HStack>
            </CardFooter>
          </Card>
        </LinkBox>
      </Wrap>
    </Stack>
  )
}
