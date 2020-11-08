import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'

const Section = ({ title, children }) => (
    <Box p={1} mt={1} mb={1} border={1} borderRadius="borderRadius">
        {!!title && <Typography variant="subtitle1">{title}</Typography>}
        {children}
    </Box>
)

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

Section.defaultProps = {
    title: undefined,
}

export default Section
