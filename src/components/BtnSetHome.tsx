import React from 'react'
import { config } from '@gluestack-ui/config'
import { GluestackUIProvider, View, HStack, Button, ButtonIcon, ButtonText, ShareIcon } from '@gluestack-ui/themed'

const BtnSetHome = (props: any) => {
    return (
        <GluestackUIProvider config={config}>
            <View>
                <HStack space='md'>
                    {/* <Box w='$80' h='$10' bg='$blue400' style={{ borderRadius: 10, alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Heading style={[props.style]} alignSelf='center'>Title</Heading>
                    </Box> */}

                    <Button size="md" variant="solid" style={{ backgroundColor: "#f5631fea" }} >
                        <ButtonText color='#111111c1'>Shuffle </ButtonText>
                        <ButtonIcon as={ShareIcon} size='$5' color='#111111c1' />
                    </Button>
                </HStack>
            </View>
        </GluestackUIProvider>
    )
}

export default BtnSetHome