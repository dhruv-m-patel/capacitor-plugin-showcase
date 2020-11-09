import React, { useCallback } from 'react'
import { Plugins } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function DevicePlugin() {
    const { Device } = Plugins

    const detectDevice = useCallback(async () => {
        const info = await Device.getInfo()
        console.log('Device info: ', info)
    }, [])

    const getBatteryInfo = useCallback(async () => {
        const info = await Device.getBatteryInfo()
        console.log('Battery info: ', info)
    }, [])

    const getLanguageCode = useCallback(async () => {
        const info = await Device.getLanguageCode()
        console.log('Language Code: ', info)
    }, [])

    return (
        <Section title="Device">
            <Button variant="contained" onClick={detectDevice}>
                Detect Device
            </Button>
            <Button variant="contained" onClick={getBatteryInfo}>
                Battery Info
            </Button>
            <Button variant="contained" onClick={getLanguageCode}>
                Language Code
            </Button>
        </Section>
    )
}
