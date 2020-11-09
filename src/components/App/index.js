import React from 'react'
import { Container, Box, Typography } from '@material-ui/core'
import { Capacitor } from '@capacitor/core'
import AccessibilityPlugin from '../capacitor-plugins/Accessibility'
import AppPlugin from '../capacitor-plugins/App'
import BackgroundTaskPlugin from '../capacitor-plugins/BackgroundTask'
import CameraPlugin from '../capacitor-plugins/Camera'
import BrowserPlugin from '../capacitor-plugins/Browser'
import Section from '../Section'
import './App.css'

export default function App() {
    return (
        <Container>
            <Box className="root">
                <Typography variant="h4">Welcome to PWA Demo App</Typography>
                <Typography variant="subtitle1">A PWA demo mobile app built with Capacitor.js and React</Typography>
                <br />
                <Typography variant="subtitle2">
                    The purpose of the app is to demonstrate functionality offered by the official Capacitor Plugins
                </Typography>
                <br />
                {!Capacitor.isNative && (
                    <Section header title="Plugin">
                        Available Actions
                    </Section>
                )}
                <AccessibilityPlugin />
                <AppPlugin />
                <BackgroundTaskPlugin />
                <CameraPlugin />
                <BrowserPlugin />
            </Box>
        </Container>
    )
}
