import React from 'react'
import PropTypes from 'prop-types'
import { Box, SvgIcon } from '@material-ui/core'
import LanguageIcon from '@material-ui/icons/Language'
import AppleIcon from '@material-ui/icons/Apple'
import AndroidIcon from '@material-ui/icons/Android'

export default function PlatformSupport({ web, ios, android }) {
    return (
        <Box>
            <SvgIcon color={web ? 'primary' : 'disabled'}>
                <LanguageIcon />
            </SvgIcon>
            <SvgIcon color={ios ? 'primary' : 'disabled'}>
                <AppleIcon />
            </SvgIcon>
            <SvgIcon color={android ? 'primary' : 'disabled'}>
                <AndroidIcon />
            </SvgIcon>
        </Box>
    )
}

PlatformSupport.propTypes = {
    web: PropTypes.bool,
    ios: PropTypes.bool,
    android: PropTypes.bool,
}

PlatformSupport.defaultProps = {
    web: true,
    ios: true,
    android: true,
}
