import React, { useCallback } from 'react'
import { Capacitor, Plugins } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function SplashScreenPlugin() {
    const { SplashScreen } = Plugins

    const showSplashScreen = useCallback(async () => {
        if (Capacitor.isNative) {
            await SplashScreen.show({ autoHide: true })
        } else {
            console.log('Please use native app')
        }
    }, [])

    const showSplashScreenWithDelay = useCallback(async () => {
        if (Capacitor.isNative) {
            await SplashScreen.show({ autoHide: true, showDuration: 2000 })
        } else {
            console.log('Please use native app')
        }
    }, [])

    const hideSplashScreen = useCallback(async () => {
        if (Capacitor.isNative) {
            await SplashScreen.hide()
        } else {
            console.log('Please use native app')
        }
    }, [])

    return (
        <Section title="Splash Screen" web={false}>
            <Button variant="contained" onClick={showSplashScreen}>
                Show
            </Button>
            <Button variant="contained" onClick={showSplashScreenWithDelay}>
                Show with delay
            </Button>
            <Button variant="contained" onClick={hideSplashScreen}>
                Hide
            </Button>
        </Section>
    )
}
