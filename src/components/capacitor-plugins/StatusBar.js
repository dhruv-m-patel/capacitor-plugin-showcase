import React, { useCallback, useState } from 'react'
import { Capacitor, Plugins, StatusBarStyle } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function StatusBarPlugin() {
    const [isStatusBarLight, setIsStatusBarLight] = useState(true)
    const { StatusBar } = Plugins

    const getInfo = useCallback(async () => {
        if (Capacitor.isNative) {
            const info = await StatusBar.getInfo()
            console.log('info: ', info)
        } else {
            console.log('Please use native app')
        }
    }, [])

    const setStyle = useCallback(async () => {
        if (Capacitor.isNative) {
            await StatusBar.setStyle({
                style: isStatusBarLight ? StatusBarStyle.Dark : StatusBarStyle.Light,
            })
            setIsStatusBarLight((status) => !status)
        } else {
            console.log('Please use native app')
        }
    }, [isStatusBarLight])

    const setBackgroundColor = useCallback(async () => {
        if (Capacitor.isNative) {
            await StatusBar.setBackgroundColor({ color: 'black' })
        } else {
            console.log('Please use native app')
        }
    }, [])

    const setOverlaysWebview = useCallback(async () => {
        if (Capacitor.isNative) {
            await StatusBar.setOverlaysWebView({
                overlay: true,
            })
        } else {
            console.log('Please use native app')
        }
    }, [])

    const showStatusBar = useCallback(async () => {
        if (Capacitor.isNative) {
            await StatusBar.show()
        } else {
            console.log('Please use native app')
        }
    }, [])

    const hideStatusBar = useCallback(async () => {
        if (Capacitor.isNative) {
            await StatusBar.hide()
        } else {
            console.log('Please use native app')
        }
    }, [])

    return (
        <Section title="Status Bar" web={false}>
            <Button variant="contained" onClick={getInfo}>
                Get Info
            </Button>
            <Button variant="contained" onClick={setStyle}>
                Set Style
            </Button>
            <Button variant="contained" onClick={setBackgroundColor}>
                Set Background Color
            </Button>
            <Button variant="contained" onClick={setOverlaysWebview}>
                Set Overlays Webview
            </Button>
            <Button variant="contained" onClick={showStatusBar}>
                Show
            </Button>
            <Button variant="contained" onClick={hideStatusBar}>
                Hide
            </Button>
        </Section>
    )
}
