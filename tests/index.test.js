import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import BaseSupSub from 'src/'

describe('<BaseSupSub />', () => {

  it('should shallow render an empty <BaseSupSub /> as null', () => {
    const wrapper = shallow(<BaseSupSub />)
    expect(wrapper.html())
      .to.equal(null)
  })

  it('should shallow render a <BaseSupSub baseline="" /> as null', () => {
    const wrapper = shallow(<BaseSupSub base="" />)
    expect(wrapper.html())
      .to.equal(null)
  })

  it('should shallow render a BaseSupSub component with basic values', () => {
    const wrapper = shallow(<BaseSupSub base="baseline" sup="superscript" sub="subscript" />)
    expect(wrapper.html())
      .to.equal('<div style="display:inline-block">' +
                  '<div style="font-size:1em;display:flex;flex-flow:row nowrap;align-items:stretch">' +
                   '<div>baseline</div>' +
                   '<div style="font-size:0.5em;display:flex;flex-flow:column nowrap;justify-content:space-between;padding-left:0.1em">' +
                      '<div>superscript</div>' +
                      '<div>subscript</div>' +
                    '</div>' +
                  '</div>' +
                '</div>')
  })

})
