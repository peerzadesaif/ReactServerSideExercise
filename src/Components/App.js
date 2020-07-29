import React, { Component } from 'react'
import { CssBaseline } from '@material-ui/core'
import { Provider } from '../context'

export default class extends Component {
    state = {
        exercises,
        exercise: {}
    }
    getContext = () => ({
        ...this.state,
        simple: 'simple',
    })

    render() {
        return (
            <Provider value={this.getContext()}>
                <CssBaseline />
                <h2>Header</h2>
                <div>
                    kmkdmwkmskmwkxw
                    </div>
                <h2>Header</h2>
            </Provider>
        )
    }
}