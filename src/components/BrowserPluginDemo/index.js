import React, { useCallback } from 'react'
import { Plugins } from '@capacitor/core'
import Section from '../Section'
import { Button } from '@material-ui/core'

export default function BrowserPluginDemo() {
    const openBrowser = useCallback(async () => {
        const { Browser } = Plugins
        await Browser.open({ url: 'https://ecompliance.com' })
    }, [])

    return (
        <Section title="Browser Plugin">
            <Button variant="contained" onClick={openBrowser}>
                Open Browser
            </Button>
        </Section>
    )
}
