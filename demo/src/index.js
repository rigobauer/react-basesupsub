import React, { Component } from 'react'
import { render } from 'react-dom'

import BaseSupSub from '../../src'

import './index.css'

class Demo extends Component {
  render() {
    const example = { base: 10, sup: 2, sub: 8 },
      styleExample = { color: 'blue', fontSize: '60px' }

    return (
      <div style={{ fontSize: '20px' }}>
        <h1>react-basesupsub Demo</h1>
        <BaseSupSub
          base="Test"
          sup="superscript"
          sub="subscript"
          style={styleExample}
        />
        <br />
        <BaseSupSub {...example} />
        <br />
        <BaseSupSub base="" sup="superscript" sub="subscript" />
        <br />
        <BaseSupSub base="JustBaseline" className="testing red strong border" />
        <br />
        <BaseSupSub base="JustBaseline" className="dblock red strong border" />
        <br />
        <div>
          This is just a test <BaseSupSub {...example} style={styleExample} />{' '}
          to check inline behaviour
        </div>
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
