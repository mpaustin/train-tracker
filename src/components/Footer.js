import React, { Component } from 'react'
import { connect } from 'react-redux'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TwitterIcon from '@material-ui/icons/Twitter';

export const footer = () => {
    return (
        <div>
            <BottomNavigation>
                <BottomNavigationAction label='test' icon={<TwitterIcon/>} />
            </BottomNavigation>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(footer)
