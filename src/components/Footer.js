import React from 'react'
import { connect } from 'react-redux'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FitnessCenter from '@material-ui/icons/FitnessCenter';

export const Footer = () => {
    return (
        <div>
            <BottomNavigation>
                <BottomNavigationAction label='test' icon={<FitnessCenter/>} />
            </BottomNavigation>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
