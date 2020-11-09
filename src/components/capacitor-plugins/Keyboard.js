import React, { useCallback, useState } from 'react'
import { Plugins, KeyboardStyle, Capacitor } from '@capacitor/core'
import { Button } from '@material-ui/core'
import Section from '../Section'

export default function KeyboardPlugin() {
    const { Keyboard } = Plugins
    const [keyboardStyle, setKeyboardStyle] = useState(KeyboardStyle.Light)

    const showAccessoryBar = useCallback(() => {
        if (Capacitor.isNative) {
            Keyboard.setAccessoryBarVisible({ isVisible: true })
        } else {
            console.log('Please use native app')
        }
    }, [])

    const hideAccessoryBar = useCallback(() => {
        if (Capacitor.isNative) {
            Keyboard.setAccessoryBarVisible({ isVisible: false })
        } else {
            console.log('Please use native app')
        }
    }, [])

    const showKeyboard = useCallback(() => {
        if (Capacitor.isNative) {
            Keyboard.show()
        } else {
            console.log('Please use native app')
        }
    }, [])

    const hideKeyboard = useCallback(() => {
        if (Capacitor.isNative) {
            Keyboard.hide()
        } else {
            console.log('Please use native app')
        }
    }, [])

    const toggleKeyboardStyle = useCallback(() => {
        if (Capacitor.isNative) {
            const style = keyboardStyle === KeyboardStyle.Dark ? KeyboardStyle.Light : KeyboardStyle.Dark
            Keyboard.setStyle(style)
            setKeyboardStyle(style)
        } else {
            console.log('Please use native app')
        }
    }, [keyboardStyle])

    const setupListeners = useCallback(() => {
        if (Capacitor.isNative) {
            Keyboard.addListener('keyboardWillShow', (info) => {
                console.log('keyboard will show with height', info.keyboardHeight)
            })

            Keyboard.addListener('keyboardDidShow', (info) => {
                console.log('keyboard did show with height', info.keyboardHeight)
            })

            Keyboard.addListener('keyboardWillHide', () => {
                console.log('keyboard will hide')
            })

            Keyboard.addListener('keyboardDidHide', () => {
                console.log('keyboard did hide')
            })
        } else {
            console.log('Please use native app')
        }
    }, [])

    const removeListeners = useCallback(() => {
        if (Capacitor.isNative) {
            Keyboard.removeAllListeners()
        } else {
            console.log('Please use native app')
        }
    }, [])

    return (
        <Section title="Keyboard">
            <Button variant="contained" onClick={showAccessoryBar}>
                Show Accessory Bar
            </Button>

            <Button variant="contained" onClick={hideAccessoryBar}>
                Hide Accessory Bar
            </Button>
            <Button variant="contained" onClick={showKeyboard}>
                Show Keyboard
            </Button>
            <Button variant="contained" onClick={hideKeyboard}>
                Hide Keyboard
            </Button>
            <Button variant="contained" onClick={toggleKeyboardStyle}>
                Toggle Keyboard Style
            </Button>

            <Button variant="contained" onClick={setupListeners}>
                Setup Listeners
            </Button>
            <Button variant="contained" onClick={removeListeners}>
                Remove Listeners
            </Button>
        </Section>
    )
}
