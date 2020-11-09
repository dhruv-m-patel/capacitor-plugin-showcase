import React, { useCallback } from 'react'
import { Plugins } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function ToastPlugin() {
    const { Toast } = Plugins

    const showToast = useCallback(async () => {
        await Toast.show({ text: 'Hello!' })
    }, [])

    const showToastWithShortDuration = useCallback(async () => {
        await Toast.show({ text: 'Hello!', duration: 'short' })
    }, [])

    const showToastWithLongDuration = useCallback(async () => {
        await Toast.show({ text: 'Hello!', duration: 'long' })
    }, [])

    const showToastAtCenter = useCallback(async () => {
        await Toast.show({ text: 'Hello!', position: 'center' })
    }, [])

    const showToastAtTop = useCallback(async () => {
        await Toast.show({ text: 'Hello!', position: 'top' })
    }, [])

    const showToastAtBottom = useCallback(async () => {
        await Toast.show({ text: 'Hello!', position: 'bottom' })
    }, [])

    return (
        <Section title="Toast">
            <Button variant="contained" onClick={showToast}>
                Show
            </Button>
            <Button variant="contained" onClick={showToastWithShortDuration}>
                Short Duration
            </Button>
            <Button variant="contained" onClick={showToastWithLongDuration}>
                Long Duration
            </Button>
            <Button variant="contained" onClick={showToastAtCenter}>
                Centered
            </Button>
            <Button variant="contained" onClick={showToastAtTop}>
                Top
            </Button>
            <Button variant="contained" onClick={showToastAtBottom}>
                Bottom
            </Button>
        </Section>
    )
}
