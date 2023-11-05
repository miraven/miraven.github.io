'use client'
import { 
  Container, 
  Heading,
  Box,
  Text,
  Button,
  Flex,
  Center,
  Image,
} from '@chakra-ui/react'

export default function Selfie() {
  return (
    <Center paddingTop={'20'}>
      <Image
        src='/selfie.jpeg'
        alt='Raven Nuega'
        borderRadius={'full'}
        boxSize={'250px'}
        objectFit={'cover'}
      /> 
    </Center>
  )
}


    // <Box maxW='32rem'>
    //   <Heading mb={4}>Modern online and offline payments for Africa</Heading>
    //   <Text fontSize='xl'>
    //     Paystack helps businesses in Africa get paid by anyone, anywhere in the
    //     world
    //   </Text>
    //   <Button size='lg' colorScheme='green' mt='24px'>
    //     Create a free account
    //   </Button>
    // </Box> 