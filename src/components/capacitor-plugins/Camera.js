import React, { useState, useCallback } from 'react'
import { IconButton } from '@material-ui/core'
import { Plugins, CameraResultType } from '@capacitor/core'
import { Typography } from '@material-ui/core'
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
            webUseInput: false,
        })
        setCapturedPhoto(image)
    }, [])

    return (
        <>
            <Section title="Camera Plugin">
                <IconButton component="span" onClick={capturePhoto}>
                    <PhotoCamera />
                </IconButton>
            </Section>
            {!!capturedPhoto && (
                <>
                    <Typography>Selected image:</Typography>
                    <img
                        src={capturedPhoto.webPath}
                        alt="selected photo"
                        style={{ maxHeight: '200px', maxWidth: '200px' }}
                    />
                </>
            )}
        </>
    )
}
