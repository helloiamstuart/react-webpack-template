import React, { Component } from 'react'
import { myComponent } from './style.scss'

export default class MyComponent extends Component {
    render() {
        return (
            <div className={myComponent}>
                <h1>Hello World!</h1>
            </div>
        )
    }
}
