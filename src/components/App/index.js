import React from 'react'
import { Container, Box, Typography } from '@material-ui/core'
import CameraPluginDemo from '../CameraPluginDemo'
import BrowserPluginDemo from '../BrowserPluginDemo'
import './App.css'

export default function App() {
    return (
        <Container>
            <Box className="root">
                <Typography variant="h4">Welcome to PWA Demo App</Typography>
                <Typography>A PWA demo mobile app built with Capacitor.js and React</Typography>
                <CameraPluginDemo />
                <BrowserPluginDemo />
            </Box>
        </Container>
    )
}
