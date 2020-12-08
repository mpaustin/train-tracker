import React from 'react'
import { connect } from 'react-redux'
import Toolbar from '@material-ui/core/Toolbar';

export const ToolBar = () => {
    return (
        <div>
            <Toolbar>
                Train Tracker
            </Toolbar>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar)
