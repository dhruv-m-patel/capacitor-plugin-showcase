import React, { useCallback } from 'react'
import { Plugins } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function ClipboardPlugin() {
    const { Clipboard } = Plugins
    const writeToClipboard = useCallback((text) => {
        Clipboard.write({ string: text })
    }, [])

    const readFromClipboard = useCallback(async () => {
        const result = await Clipboard.read()
        console.log('Got', result.type, 'from clipboard:', result.value)
    }, [])

    return (
        <Section title="Clipboard">
            <Button variant="contained" onClick={() => writeToClipboard('Capacitor.js PWA app')}>
                Write
            </Button>
            <Button variant="contained" onClick={readFromClipboard}>
                Read
            </Button>
        </Section>
    )
}
