import React, { useCallback, useState } from 'react'
import { Plugins } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function GeolocationPlugin() {
    const { Geolocation } = Plugins
    const [locationWatchId, setLocationWatchId] = useState()

    const getDeviceLocation = useCallback(async () => {
        const deviceLocation = await Geolocation.getCurrentPosition()
        console.log('deviceLocation: ', deviceLocation)
    }, [])

    const subscribeToLocationChanges = useCallback(async () => {
        const watchId = await Geolocation.watchPosition(
            {
                enableHighAccuracy: true,
            },
            (position, err) => {
                if (err) {
                    console.log('err: ', err)
                } else {
                    console.log('position: ', position)
                }
            }
        )
        setLocationWatchId(watchId)
    }, [])

    const unsubscribeFromLocationChanges = useCallback(async () => {
        await Geolocation.clearWatch({ id: locationWatchId })
    }, [locationWatchId])

    return (
        <Section title="Geolocation">
            <Button variant="contained" onClick={getDeviceLocation}>
                Device Location
            </Button>
            <Button variant="contained" onClick={subscribeToLocationChanges}>
                Watch Location
            </Button>
            <Button variant="contained" onClick={unsubscribeFromLocationChanges}>
                Clear Location Watch
            </Button>
        </Section>
    )
}
