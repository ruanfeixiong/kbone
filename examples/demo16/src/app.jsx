import React, {useState} from 'react'
import {render, h} from 'react-dom'
import './app.css'

import PickerView from './picker-view'

const App = (props, store) => {
    return (
        <div>
            <div>
                我是输入框：
                <input
                    onClick={e => console.log('click', e)}
                    onInput={e => console.log('input', e)}
                    onFocus={e => console.log('focus', e)}
                    onBlur={e => console.log('blur', e)}
                    onChange={e => console.log('change', e)}
                />
            </div>
            <div>
                我是 checkbox：
                <input
                    type="checkbox"
                    onChange={e => console.log('change', e)}
                />
            </div>
            <div>
                我是 radio：
                <input
                    type="radio"
                    name="radio"
                    value="1"
                    onChange={e => console.log('change', e)}
                />
                <input
                    type="radio"
                    name="radio"
                    value="2"
                    onChange={e => console.log('change', e)}
                />
            </div>
            <div>
                我是 picker-view：
                <PickerView></PickerView>
            </div>
        </div>
    )
}

export default App
