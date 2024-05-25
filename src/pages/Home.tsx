import { StyleSheet } from 'react-native'
import React from 'react'
import { config } from '@gluestack-ui/config'
import { View, Text, GluestackUIProvider, Box, Heading, HStack, ScrollView, Center, VStack, AddIcon, ButtonIcon, ButtonText, Button } from '@gluestack-ui/themed'
import MusicCard from '../components/MusicCard'
import MusicList from '../components/MusicList'
import BtnSetHome from '../components/BtnSetHome'

export default function Home({ navigation }) {
    return (
        <GluestackUIProvider config={config}>
            <View style={{ flex: 1, backgroundColor: '#1f1f1f', paddingLeft: 5, paddingRight: 5, paddingTop: 20, }}>
                <ScrollView h="$120" w="$100">
                    <Heading style={styles.light} size='3xl'>Music</Heading>
                    {/* Scroll playlist horizontal*/}
                    <ScrollView horizontal={true} marginLeft={5} marginRight={-5} marginTop={20}>
                        <HStack space="sm" marginBottom={5}>
                            <MusicCard txt="Aaaa" style={styles.light} />
                            <MusicCard txt="Aaaa" style={styles.light} />
                            <MusicCard txt="Aaaa" style={styles.light} />
                            <MusicCard txt="Aaaa" style={styles.light} />
                            <MusicCard txt="Aaaa" style={styles.light} />
                        </HStack>
                    </ScrollView>
                    <HStack space="4xl" alignSelf='center' marginTop={10}>
                        <BtnSetHome style={styles.light}/>
                    </HStack>
                    {/* Music list */}
                    <Heading style={styles.light} size='2xl' marginTop={5}>List</Heading>
                    <VStack space="sm" marginTop={10} marginLeft={5}>
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                        <MusicList style={styles.light} />
                    </VStack>
                </ScrollView>
            </View>

        </GluestackUIProvider>
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