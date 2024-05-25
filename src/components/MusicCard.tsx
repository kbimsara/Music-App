import { View, Text } from 'react-native'
import React from 'react'
import { config } from '@gluestack-ui/config'
import { Box,Image, GluestackUIProvider } from '@gluestack-ui/themed'

const MusicCard = (props:any) => {
    return (
        <GluestackUIProvider config={config}>
            <View>
                {/* <Box w='$20' h='$20' bg='$blue700' style={{ alignItems: 'baseline',borderRadius:10 }} /> */}
                    <Image w='$20' h='$20' source={require('../img/music dark.png')} style={{ alignItems: 'baseline',borderRadius:10 }} />
                <Text style={[props.style,{fontSize:11,marginLeft:5,marginTop:3}]}>Title</Text>
            </View>

        </GluestackUIProvider>
    )
}

export default MusicCard