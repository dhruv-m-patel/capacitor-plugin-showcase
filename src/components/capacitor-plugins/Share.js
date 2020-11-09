import React, { useCallback } from 'react'
import { Capacitor, Plugins } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function SharePlugin() {
    const { Share } = Plugins

    const showShareDialog = useCallback(async () => {
        if (Capacitor.isNative) {
            await Share.share({
                title: 'Share stuff',
                text: 'You should check this out',
                url: 'http://capacitorjs.com',
                dialogTitle: 'Share stuff!',
            })
        } else {
            console.log('Please use native app')
        }
    }, [])

    return (
        <Section title="Share" web={false}>
            <Button variant="contained" onClick={showShareDialog}>
                Share
            </Button>
        </Section>
    )
}
