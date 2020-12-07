import React, { Component } from 'react'
import { connect } from 'react-redux'

export const content = () => {
    return (
        <div>
            Content
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(content)
