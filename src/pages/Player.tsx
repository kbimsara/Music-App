import React from 'react'
import { StyleSheet } from 'react-native'
import { config } from '@gluestack-ui/config'
import { Image, GluestackUIProvider, VStack, View, PlayIcon, ChevronsLeftIcon, ChevronsRightIcon, Icon, StarIcon, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Heading, Text, RemoveIcon, Button, AddIcon, ButtonIcon, ButtonText, Radio, RadioGroup, RadioIcon, RadioIndicator, CircleIcon } from '@gluestack-ui/themed'
import { HStack } from '@gluestack-ui/themed'
// import { Button } from 'react-native'

export default function Player(props) {
    return (
        <GluestackUIProvider config={config}>
            <View style={{ flex: 1, backgroundColor: '#1f1f1f', paddingLeft: 5, paddingRight: 5, paddingTop: 50, }}>
                <View style={{alignItems:'flex-start'}}>
                    <Button size="md" variant="solid" style={{ backgroundColor: "#ffffff0" }} >
                        <ButtonIcon as={ChevronsLeftIcon} size='$7' color='#ffffff89' />
                    </Button>
                </View>
                <VStack alignSelf='center' paddingTop={30}>
                    {/* <Box w="$16" h="$16" bg="$blue500" /> */}
                    {/* <Image size="2xl" borderRadius="$3xl" source={require('../img/music dark.png')} /> */}
                    <Image w={300} h={300} borderRadius="$3xl" source={require('../img/music dark.png')} />
                    <HStack marginTop={10} marginBottom={10}>
                        <VStack>
                            <Heading style={styles.light} m={0} size="xl">Music Title</Heading>
                            <Text style={styles.light} m={0} size="sm">Artist</Text>
                        </VStack>
                        {/* <Icon as={StarIcon} marginLeft={140} w="$10" h="$10" alignSelf='center' /> */}
                        <RadioGroup marginLeft={140} alignSelf='center' >
                            <Radio value="change" size="lg" isInvalid={true} isDisabled={false}>
                                <RadioIndicator as={StarIcon}>
                                    <RadioIcon as={StarIcon} strokeWidth={1} />
                                </RadioIndicator>
                            </Radio>
                        </RadioGroup>

                    </HStack>
                    {/* music Time */}
                    <HStack alignSelf='center' marginTop={30} marginBottom={30}>
                        <Slider defaultValue={50} size="sm" orientation="horizontal" w={270}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </HStack>
                    {/* Play push next btn */}
                    <HStack alignSelf='center' alignContent='center' alignItems='center' marginTop={30} marginBottom={60}>

                        <Button size="md" variant="solid" style={{ backgroundColor: "#ffffff0" }} >
                            <ButtonIcon as={ChevronsLeftIcon} size='$8' color='#ffffffac' />
                        </Button>
                        <Button size="md" variant="solid" style={{ backgroundColor: "#ffffff0" }} >
                            <ButtonIcon as={PlayIcon} size='$12' color='#ffffff' />
                        </Button>
                        <Button size="md" variant="solid" style={{ backgroundColor: "#ffffff0" }} >
                            <ButtonIcon as={ChevronsRightIcon} size='$8' color='#ffffffac' />
                        </Button>

                    </HStack>
                    {/* Soun level */}
                    <HStack alignSelf='center' alignContent='center' alignItems='center'>

                        <Icon as={AddIcon} m="$2" w="$4" h="$4" color='#208cf7' />
                        <Slider defaultValue={20} size="sm" orientation="horizontal" w={200}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                        <Icon as={RemoveIcon} m="$2" w="$4" h="$4" color='#208cf7' />

                    </HStack>
                </VStack>
            </View>

        </GluestackUIProvider >
    )
}

const styles = StyleSheet.create({
    light: {
        // backgroundColor: myColors.light,
        color: '#eaf8ff',
    },
    dark: {
        color: '#1f1f1f',
    },

});