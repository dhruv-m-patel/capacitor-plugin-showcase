import React from 'react'
import { Container, Box, Typography } from '@material-ui/core'
import CameraPlugin from '../capacitor-plugins/Camera'
import BrowserPlugin from '../capacitor-plugins/Browser'
import './App.css'

export default function App() {
    return (
        <Container>
            <Box className="root">
                <Typography variant="h4">Welcome to PWA Demo App</Typography>
                <Typography>A PWA demo mobile app built with Capacitor.js and React</Typography>
                <CameraPlugin />
                <BrowserPlugin />
            </Box>
        </Container>
    )
}
