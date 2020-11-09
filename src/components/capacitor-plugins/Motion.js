import React, { useCallback } from 'react'
import { Plugins } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function MotionPlugin() {
    const { Motion } = Plugins

    const setupListeners = useCallback(async () => {
        try {
            await DeviceMotionEvent.requestPermission()
            // Once the user approves, can start listening:
            Motion.addListener('accel', (event) => {
                console.log('Motion event accel fired:', event)
            })
        } catch (e) {
            console.log('Permission to DeviceMotionEvent was denied: ', e)
        }
    }, [])

    const removeListeners = useCallback(() => {
        Motion.removeAllListeners()
    }, [])

    return (
        <Section title="Motion">
            <Button variant="contained" onClick={setupListeners}>
                Setup Listeners
            </Button>
            <Button variant="contained" onClick={removeListeners}>
                Remove Listeners
            </Button>
        </Section>
    )
}
