import React from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
} from 'native-base';

const ProductBuilder = props => {
  const {source, name} = props;
  return (
    <Center flex={1} style={{width: '100%'}}>
      <Box
        alignItems="center"
        style={{width: '100%', margin: 3, marginBottom: 8}}>
        <Box
          maxW="98%"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.400"
          borderWidth="1"
          _dark={{
            borderColor: 'red.200',
            backgroundColor: 'gray.700',
          }}
          web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: 'gray.50',
          }}>
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image source={source} alt="image" w="100%" />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {name}
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: 'violet.500',
                }}
                _dark={{
                  color: 'violet.400',
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1">
                Made in the Largest Mill of Telangana
              </Text>
            </Stack>
            <Text fontWeight="400">
              Rice is the seed of the grass species Oryza sativa or less
              commonly Oryza glaberrima. The name wild rice is usually used for
              species of the genera Zizania and Porteresia...
            </Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="400">
                  Know More
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export default ProductBuilder;
