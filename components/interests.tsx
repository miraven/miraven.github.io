'use client'

import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 7000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Interests() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'What is the One Piece?',
      text: "Is it a treasure, is it a piece of meat, or is it that one PEACE the world has been yearning for?",
      image:
        // 'https://64.media.tumblr.com/39de3258b6487e4edaf849aa2d0c3d96/2bb897dd85b0e690-49/s540x810/a3dd39be6446227d8ca90b70cad891cc5b332289.gif',
        '/one_piece.gif',
    },
    {
      title: 'Coding for Understanding',
      // text: "Andrej Karpathy once said in an old blog post -- 'everything became much clearer when I started writing code'. So, I will be coding for understanding when delving into any topic of interest.",
      text: "Inspired by Andrej Karpathy's old blog -- I will attempt to code anything that I'm trying to understand whether it's Gojo's infinity or how Q Learning works! Check the blog!",
      image:
        '/coding_anime.gif',
    },
    {
      title: "The cadence of Kyrie Irving's movement",
      text: "The way he effortlessly maneuvers, changes pace and finishes amongst taller defenders is mesmerizing. Always watching basketball to try and improve my game.",
      image:
        '/kyrie.gif',
    },
    {
      title: 'Understanding Self-Driving',
      text: "A Tesla drove me the other day. I've learned a little about sensor fusion, particle filters and object recognition, but how does it all work together end to end?!",
      image:
        '/self_driving.gif',
    },
    {
      title: 'I have no enemies',
      text: "Vinland saga is one of the most beautiful philosophical anime's I've seen and the concept of true love and true warriorship is something to be appreciated.",
      image:
        '/vinland.gif',
    },
  ]

  return (
    <Stack marginTop={'20'}>
      <Heading 
        fontWeight={'black'} 
        fontSize={'4xl'} 
        bgGradient={useColorModeValue('linear(to-l, #6a1eac, #FF0080)', 'linear(to-r, #0ce8cc, cyan.600)')}
        bgClip={'text'}
        px={'-12'}
      >
        Current Interests
      </Heading>
      <Box marginTop={'5'} position={'relative'} height={'600px'} width={'full'} overflow={'hidden'} borderRadius={'3xl'}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={'2xl'}
              position="sticky"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}>
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={'full'}
                  maxW={'lg'}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)">
                  <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={'whitesmoke'}>
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: 'md', lg: 'lg' }} fontWeight={"bold"} color="whitesmoke">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
    </Stack>
  )
}
