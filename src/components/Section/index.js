import React from 'react'
import PropTypes from 'prop-types'
import { Box, Link } from '@material-ui/core'
import { Capacitor } from '@capacitor/core'

function getOfficialPluginLink(pluginName) {
    const officialPlugin = pluginName.toLowerCase().replace(/([^a-z0-9])/g, '-')
    return `https://capacitorjs.com/docs/apis/${officialPlugin}`
}

const Section = ({ header, title, children }) => (
    <Box
        mt={1}
        mb={1}
        border={1}
        borderRadius="borderRadius"
        p={Capacitor.isNative ? 1 : 2}
        display="flex"
        justifyContent={Capacitor.isNative ? 'space-around' : 'space-between'}
        flexDirection={Capacitor.isNative ? 'column' : 'row'}
        alignItems="center"
        flexWrap="wrap"
        style={{ fontWeight: header ? 'bold' : 'normal' }}
    >
        {!!title &&
            (header ? (
                <span>{title}</span>
            ) : (
                <Link href={getOfficialPluginLink(title)} target="_blank" variant="subtitle1" display="inline">
                    {title}
                </Link>
            ))}
        <Box
            display="flex"
            justifyContent="space-around"
            flexDirection="column"
            flexWrap="wrap"
            style={{ gap: '0.5rem' }}
        >
            {children}
        </Box>
    </Box>
)

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    header: PropTypes.bool,
}

Section.defaultProps = {
    title: undefined,
    header: false,
}

export default Section
