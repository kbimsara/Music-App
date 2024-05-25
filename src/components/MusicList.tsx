import React from 'react'
import { config } from '@gluestack-ui/config'
import { GluestackUIProvider, Text, Image, Heading, Box, HStack, View, Divider, VStack, ChevronRightIcon, Icon } from '@gluestack-ui/themed'

const MusicList = (props: any) => {
    return (
        <GluestackUIProvider config={config}>
            {/* <Divider my="$0.5" /> */}
            <View style={{ borderRadius: 8, flexDirection: 'row' }}>
                <HStack alignContent='center'>
                    {/* <Box w='$12' h='$12' bg='$blue700' style={{ borderRadius: 8 }} /> */}
                    <Image w='$12' h='$12' source={require('../img/music dark.png')} style={{ borderRadius: 8 }} />
                    <VStack>
                        <Text mb="$1" size="md" style={props.style} marginLeft={10}>
                            Music Name
                        </Text>
                        <HStack marginLeft={10}>
                            <Text mb="$1" size="xs" style={props.style} alignSelf='center'>
                                Artist
                            </Text>
                            <Text mb="$1" size="xs" style={props.style} alignSelf='center' marginLeft={5} marginRight={5}>
                                |
                            </Text>
                            <Text mb="$1" size="xs" style={props.style} alignSelf='center'>
                                Albam
                            </Text>
                        </HStack>
                    </VStack>

                </HStack>
                <Icon as={ChevronRightIcon} m="$2" w="$6" h="$6" alignContent='center' alignItems='center' alignSelf='center' />
            </View>


        </GluestackUIProvider>
    )
}

export default MusicList