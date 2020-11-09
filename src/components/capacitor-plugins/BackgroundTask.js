import React, { useCallback } from 'react'
import { Plugins } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function BackgroundTaskPlugin() {
    const { App, BackgroundTask } = Plugins

    const configureBackgroundTask = useCallback(() => {
        App.addListener('appStateChange', (state) => {
            if (!state.isActive) {
                console.log('background task starting')
                let taskId = BackgroundTask.beforeExit(async () => {
                    var start = new Date().getTime()
                    for (var i = 0; i < 1e18; i++) {
                        if (new Date().getTime() - start > 20000) {
                            break
                        }
                    }
                    BackgroundTask.finish({
                        taskId,
                    })
                    console.log('background task ended')
                })
            }
        })
    }, [])

    return (
        <Section title="Background Task" web={false}>
            <Button variant="contained" onClick={configureBackgroundTask}>
                Configure
            </Button>
        </Section>
    )
}
