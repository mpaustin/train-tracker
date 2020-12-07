import React, { Component } from 'react'
import { connect } from 'react-redux'
import Toolbar from '@material-ui/core/Toolbar';

export const toolbar = () => {
    return (
        <div>
            <Toolbar>
                Toolbar
            </Toolbar>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(toolbar)
