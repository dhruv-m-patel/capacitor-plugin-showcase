import React, { useState, useCallback } from 'react'
import { IconButton } from '@material-ui/core'
import { Plugins, CameraResultType } from '@capacitor/core'
import { PhotoCamera } from '@material-ui/icons'
import Section from '../Section'

export default function CameraPluginDemo() {
    const [capturedPhoto, setCapturedPhoto] = useState()
    const { Camera } = Plugins

    const capturePhoto = useCallback(async () => {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri,
        })
        setCapturedPhoto(image)
    }, [])

    return (
        <Section title="Camera Plugin">
            {!capturedPhoto && (
                <IconButton component="span" onClick={capturePhoto}>
                    <PhotoCamera />
                </IconButton>
            )}
            {!!capturedPhoto && <img src={capturedPhoto.webPath} alt="selected photo" />}
        </Section>
    )
}
