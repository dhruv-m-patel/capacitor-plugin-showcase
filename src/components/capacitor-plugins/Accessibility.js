import React, { useCallback, useEffect } from 'react'
import { Capacitor, Plugins } from '@capacitor/core'
import Section from '../Section'
import { Button } from '@material-ui/core'

export default function Accessibility() {
    const { Accessibility, Modals } = Plugins

    const isVoiceOverEnabled = useCallback(async () => {
        if (Capacitor.isNative) {
            const result = await Accessibility.isScreenReaderEnabled()
            alert(`Voice over ${result.value ? 'is' : 'is not'} enabled`)
        } else {
            alert('Please try native app')
        }
    }, [])

    const promptAccessibilityModal = useCallback(async () => {
        if (Capacitor.isNative) {
            var result = await Modals.prompt({
                title: 'Value to speak',
                message: 'Enter the value to speak',
            })

            Accessibility.speak({ value: result.value })
        } else {
            alert('Please try native app')
        }
    }, [])

    useEffect(() => {
        Accessibility.addListener('accessibilityScreenReaderStateChange', (state) => {
            alert(`accessibilityScreenReaderStateChange: ${state.value}`)
        })

        return () => Accessibility.removeAllListeners()
    }, [])

    return (
        <Section title="Accessibility">
            <Button variant="contained" onClick={isVoiceOverEnabled}>
                Check Voiceover
            </Button>
            <Button variant="contained" onClick={promptAccessibilityModal}>
                Text to Speech
            </Button>
        </Section>
    )
}
