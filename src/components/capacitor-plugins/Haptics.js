import React, { useCallback } from 'react'
import { Plugins, HapticsImpactStyle, Capacitor } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function HapticsPlugin() {
    const { Haptics } = Plugins

    const setHeavyHaptics = useCallback(() => {
        if (Capacitor.isNative) {
            Haptics.impact({
                style: HapticsImpactStyle.Heavy,
            })
        } else {
            console.log('Please use native app')
        }
    }, [])

    const setMediumHaptics = useCallback(() => {
        if (Capacitor.isNative) {
            Haptics.impact({
                style: HapticsImpactStyle.Medium,
            })
        } else {
            console.log('Please use native app')
        }
    }, [])

    const setLightHaptics = useCallback(() => {
        if (Capacitor.isNative) {
            Haptics.impact({
                style: HapticsImpactStyle.Light,
            })
        } else {
            console.log('Please use native app')
        }
    }, [])

    const vibrate = useCallback(() => {
        if (Capacitor.isNative) {
            Haptics.vibrate()
        } else {
            console.log('Please use native app')
        }
    }, [])

    const hapticsStart = useCallback(() => {
        if (Capacitor.isNative) {
            Haptics.selectionStart()
        } else {
            console.log('Please use native app')
        }
    }, [])

    const hapticsChange = useCallback(() => {
        if (Capacitor.isNative) {
            Haptics.selectionChanged()
        } else {
            console.log('Please use native app')
        }
    }, [])

    const hapticsEnd = useCallback(() => {
        if (Capacitor.isNative) {
            Haptics.selectionEnd()
        } else {
            console.log('Please use native app')
        }
    }, [])

    return (
        <Section title="Haptics" web={false}>
            <Button variant="contained" onClick={setHeavyHaptics}>
                Set Heavy Haptics
            </Button>
            <Button variant="contained" onClick={setMediumHaptics}>
                Set Medium Haptics
            </Button>
            <Button variant="contained" onClick={setLightHaptics}>
                Set Light Haptics
            </Button>
            <Button variant="contained" onClick={vibrate}>
                Vibrate
            </Button>
            <Button variant="contained" onClick={hapticsStart}>
                Haptics Start
            </Button>
            <Button variant="contained" onClick={hapticsChange}>
                Haptics Change
            </Button>
            <Button variant="contained" onClick={hapticsEnd}>
                Haptics End
            </Button>
        </Section>
    )
}
