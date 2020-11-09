import React, { useCallback } from 'react'
import { Capacitor, PermissionType, Plugins } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function PermissionPlugin() {
    const { Permission } = Plugins

    const checkPermission = useCallback(async (permission) => {
        if (Capacitor.isNative) {
            const result = await Permission.query(permission)
            console.log(`result (permission: ${permission}): `, result)
        } else {
            console.log('Please use native app')
        }
    }, [])

    return (
        <Section title="Permission" web={false}>
            <Button variant="contained" onClick={() => checkPermission(PermissionType.Camera)}>
                Camera
            </Button>
            <Button variant="contained" onClick={() => checkPermission(PermissionType.Photos)}>
                Photos
            </Button>
            <Button variant="contained" onClick={() => checkPermission(PermissionType.Geolocation)}>
                Geolocation
            </Button>
            <Button variant="contained" onClick={() => checkPermission(PermissionType.Notifications)}>
                Notifications
            </Button>
            <Button variant="contained" onClick={() => checkPermission(PermissionType.ClipboardRead)}>
                Clipboard Read
            </Button>
            <Button variant="contained" onClick={() => checkPermission(PermissionType.ClipboardWrite)}>
                Clipboard Write
            </Button>
            <Button variant="contained" onClick={() => checkPermission(PermissionType.Microphone)}>
                Microphone
            </Button>
        </Section>
    )
}
