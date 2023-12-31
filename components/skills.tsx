	'use client'

	import { 
		Heading,
    Flex,
		Progress,
		Text,
    Center,
		useColorModeValue,
		Stack,
		Box,
    Image,
		IconButton,
		Card,
		Container,
		CardBody,
		useBreakpointValue,
    Wrap
	} from '@chakra-ui/react'

	import React from 'react'

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
	export default function Skills() {

		// As we have used custom buttons, we need a reference variable to
		// change the state
		const [slider, setSlider] = React.useState<Slider | null>(null)

		// These are the breakpoints which changes the position of the
		// buttons as the screen size changes
		const top = useBreakpointValue({ base: '90%', md: '50%' })
		const side = useBreakpointValue({ base: '30%', md: '40px' })

		return (
			<Stack marginTop={'20'}>
				<Heading 
					fontWeight={'black'} 
					fontSize={'4xl'} 
					bgGradient={useColorModeValue('linear(to-l, #6a1eac, #FF0080)', 'linear(to-r, #0ce8cc, cyan.600)')}
					bgClip={'text'}
					px={'-12'}
				>
					Skills
				</Heading>
        <Box marginTop={'5'} position={'relative'} >
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
          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            <Flex justifyContent='center' alignContent='center'>
                <Card marginTop={'5'} >
                  <Center>
                    <CardBody padding={'10'} alignContent={'center'} >
                      <Heading paddingBottom={'7'} textAlign={'center'} justifyContent={'center'}>
                        Competencies
                      </Heading>
                      <Text padding={4.0} fontSize={'lg'} fontWeight={'bold'} px={'-12'}>
                        Python Development
                      </Text>
                      <Progress hasStripe isAnimated value={75} size={'sm'} colorScheme={useColorModeValue('cyan', 'purple')}/>
                      <Text padding={4.0} fontSize={'lg'} fontWeight={'bold'} px={'-12'}>
                        SQL 
                      </Text>
                      <Progress hasStripe isAnimated value={25} size={'sm'} colorScheme={useColorModeValue('cyan', 'purple')}/>
                      <Text padding={4.0} fontSize={'lg'} fontWeight={'bold'} px={'-12'}>
                        ML Fundamentals
                      </Text>
                      <Progress hasStripe isAnimated value={50} size={'sm'} colorScheme={useColorModeValue('cyan', 'purple')}/>
                      <Text padding={4.0} fontSize={'lg'} fontWeight={'bold'} px={'-12'}>
                        ML pipelines and orchestration
                      </Text>
                      <Progress hasStripe isAnimated value={65} size={'sm'} colorScheme={useColorModeValue('cyan', 'purple')}/>
                      <Text padding={4.0} fontSize={'lg'} fontWeight={'bold'} px={'-12'}>
                        Trying Hard ... last 1% is hardly trying 😉
                      </Text>
                      <Progress hasStripe isAnimated value={99} size={'sm'} colorScheme={useColorModeValue('cyan', 'purple')}/>
                      <Text padding={4.0} fontSize={'lg'} fontWeight={'bold'} px={'-12'}>
                        PyTorch, LLMs, Deep Q Learning, ROS
                      </Text>
                      <Progress hasStripe isIndeterminate size={'sm'} colorScheme={useColorModeValue('cyan', 'purple')}/>
                    </CardBody>
                  </Center>
                </Card> 
            </Flex>
          </Slider>
          <Flex 
            gap={{ base: 16, lg: 16, md: 16, sm: 14, xs: 10 }}
            wrap="wrap"
            p={{ base: 10, lg: 10, md: 10, sm: 10, xs: 0 }}
            pt={{ base: 10, lg: 10, md: 10, sm: 10, xs: 10 }}
            pb={{ base: 10, lg: 10, md: 10, sm: 10, xs: 10 }}
            my={{ base: 0, lg: 0, md: 0, sm: 4, xs: 10 }}
            alignItems="center"
            justify="center" 
          >
            <Center>
              <Card marginTop={'10'} >
                <CardBody padding={'10'} >
                  <Heading textAlign={'center'} justifyContent={'center'}>
                    Tech Stack
                  </Heading>
                  <Wrap justify={'center'} p={'10'} spacing={'8'}>
                    <Image 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      alt="python logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="cover"
                    />
                    <Image 
                      src="https://companieslogo.com/img/orig/SNOW-35164165.png?t=1634190631" 
                      alt="snowflake logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="scale-down"
                    />
                    <Image 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="cover"
                    />
                    <Image 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="cover"
                    />
                    <Image 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="cover"
                    />
                    <Image 
                      src="https://icon.icepanel.io/Technology/svg/scikit-learn.svg" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="cover"
                    />
                    <Image 
                      src="https://asset.brandfetch.io/id72svQ_Rq/ido9m2u7iI.png?updated=1692638484407" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="scale-down"
                    />
                    <Image 
                      src="https://h2o.ai/company/brand-kit/_jcr_content/root/container/section/par/advancedcolumncontro/columns1/advancedcolumncontro/columns0/image.coreimg.png/1683145585206/h-2-o-logo.png" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="cover"
                    />
                    <Image 
                      src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      bgColor={'white'}
                      borderRadius={'full'}
                      p={'2'}
                      objectFit="scale-down"
                    />
                    <Image
                      src="https://docs.dask.org/en/stable/_images/dask_icon.svg" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="scale-down"
                    />
                    <Image 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="cover"
                    />
                    <Image 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="cover"
                    />
                    <Image 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="cover"
                    />
                    <Image 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="cover"
                    />
                    <Image 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="cover"
                    />
                    <Image 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="cover"
                    />
                    <Image 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="cover"
                    />
                    <Image 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original-wordmark.svg" 
                      alt="logo"
                      cursor="pointer"
                      boxSize="100px"
                      objectFit="cover"
                    />
                  </Wrap>
                </CardBody>
              </Card> 
            </Center>
          </Flex>
        </Box>
			</Stack>
		)
	}
