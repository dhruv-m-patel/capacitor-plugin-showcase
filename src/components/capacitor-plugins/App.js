import React, { useCallback } from 'react'
import { Plugins } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function App() {
    const { App } = Plugins

    const setUpListeners = useCallback(async () => {
        App.addListener('appStateChange', (state) => {
            // state.isActive contains the active state
            console.log('App state changed. Is active?', state.isActive)
        })

        App.addListener('appUrlOpen', (data) => {
            console.log('App opened with URL: ' + data.url)
        })

        App.addListener('appRestoredResult', (data) => {
            console.log('Restored state:', data)
        })
    }, [])

    const removeListeners = useCallback(() => {
        App.removeAllListeners()
    }, [])

    const checkUrl = useCallback(async (url) => {
        const result = await App.canOpenUrl({ url })
        console.log(`Can open url (${url}): ${result.value}`)
    }, [])

    const openUrl = useCallback(async (url) => {
        const result = await App.openUrl({ url })
        console.log(`Open url (${url}) response: ${result}`)
        console.log('result: ', result)
    }, [])

    const getLaunchUrl = useCallback(async () => {
        const result = await App.getLaunchUrl()
        if (typeof result?.url !== 'undefined') {
            console.log(`App opened with URL: ${result.url === '' ? '""' : result.url}`)
        }
    }, [])

    return (
        <Section title="App">
            <Button variant="contained" onClick={() => setUpListeners}>
                Setup Listeners
            </Button>
            <Button variant="contained" onClick={() => removeListeners}>
                Remove Listeners
            </Button>
            <Button variant="contained" onClick={() => checkUrl('com.pwademo.app')}>
                Check URL
            </Button>
            <Button variant="contained" onClick={() => openUrl('com.pwademo.app://page?id=ionicframework')}>
                Open URL
            </Button>
            <Button variant="contained" onClick={() => getLaunchUrl('com.pwademo.app')}>
                Get Launch URL
            </Button>
        </Section>
    )
}
