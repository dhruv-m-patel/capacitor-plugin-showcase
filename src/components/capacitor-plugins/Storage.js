import React, { useCallback } from 'react'
import { Plugins } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function StoragePlugin() {
    const { Storage } = Plugins

    const setData = useCallback(async () => {
        await Storage.set({
            key: 'user',
            value: JSON.stringify({
                id: 1,
                name: 'John Doe',
            }),
        })
    }, [])

    const getData = useCallback(async () => {
        const data = await Storage.get({
            key: 'user',
        })
        console.log('data: ', data)
    }, [])

    const getKeys = useCallback(async () => {
        const keys = await Storage.keys()
        console.log('keys: ', keys)
    }, [])

    const removeData = useCallback(async () => {
        const key = 'user'
        await Storage.remove({ key })
        console.log(`Removed data for key ${key}`)
    }, [])

    const clearData = useCallback(async () => {
        await Storage.clear()
        console.log('Storage has been wiped clean')
    }, [])

    return (
        <Section title="Storage">
            <Button variant="contained" onClick={setData}>
                Set Data
            </Button>
            <Button variant="contained" onClick={getData}>
                Get Data
            </Button>
            <Button variant="contained" onClick={getKeys}>
                Get Keys
            </Button>
            <Button variant="contained" onClick={removeData}>
                Remove Data
            </Button>
            <Button variant="contained" onClick={clearData}>
                Clear Data
            </Button>
        </Section>
    )
}
