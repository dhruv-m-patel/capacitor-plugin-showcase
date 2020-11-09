import React, { useCallback } from 'react'
import { Plugins, ActionSheetOptionStyle } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function ModalsPlugin() {
    const { Modals } = Plugins

    const showAlertModal = useCallback(async () => {
        const result = await Modals.alert({
            title: 'Alert!',
            message: 'this is an alert',
        })
        console.log('result: ', result)
    }, [])

    const showConfirmationModal = useCallback(async () => {
        const result = await Modals.confirm({
            title: 'Confirm',
            message: "Are you sure you'd like to press the red button?",
        })
        console.log('result: ', result)
    }, [])

    const showPromptModal = useCallback(async () => {
        const result = await Modals.prompt({
            title: 'Hello',
            message: "What's your name?",
        })
        console.log('result: ', result)
    }, [])

    const showActionsModal = useCallback(async () => {
        const result = await Modals.showActions({
            title: 'Actions Options',
            message: 'Select an option to perform',
            options: [
                {
                    title: 'Upload',
                },
                {
                    title: 'Share',
                },
                {
                    title: 'Remove',
                    style: ActionSheetOptionStyle.Destructive,
                },
            ],
        })
        console.log('result: ', result)
    }, [])

    return (
        <Section title="Modals">
            <Button variant="contained" onClick={showAlertModal}>
                Alert
            </Button>
            <Button variant="contained" onClick={showConfirmationModal}>
                Confirm
            </Button>
            <Button variant="contained" onClick={showPromptModal}>
                Prompt
            </Button>
            <Button variant="contained" onClick={showActionsModal}>
                Actions
            </Button>
        </Section>
    )
}
