import React, { useCallback } from 'react'
import { Plugins } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function NetworkPlugin() {
    const { Network } = Plugins

    const getStatus = useCallback(async () => {
        const result = await Network.getStatus()
        console.log('result: ', result)
    }, [])

    const setupListener = useCallback(() => {
        Network.addListener('networkStatusChange', (status) => {
            console.log('Network status changed', status)
        })
    }, [])

    const removeListener = useCallback(() => {
        Network.removeAllListeners()
    }, [])

    return (
        <Section title="Network">
            <Button variant="contained" onClick={getStatus}>
                Get Status
            </Button>
            <Button variant="contained" onClick={setupListener}>
                Setup Listener
            </Button>
            <Button variant="contained" onClick={removeListener}>
                Remove Listener
            </Button>
        </Section>
    )
}
