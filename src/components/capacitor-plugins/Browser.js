import React, { useCallback } from 'react'
import { Plugins } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function BrowserPluginDemo() {
    const openBrowser = useCallback(async () => {
        const { Browser } = Plugins
        await Browser.open({ url: 'https://capacitorjs.com/docs/apis' })
    }, [])

    return (
        <Section title="Browser">
            <Button variant="contained" onClick={openBrowser}>
                Open Browser
            </Button>
        </Section>
    )
}
