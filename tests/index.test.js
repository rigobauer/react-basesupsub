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

  it('should shallow render a BaseSupSub just with baseline as a single div', () => {
    const wrapper = shallow(<BaseSupSub base="testing" />)
    expect(wrapper.type())
      .to.equal('div')
    expect(wrapper.text())
      .to.equal('testing')
  })

  it('should shallow render a BaseSupSub with baseline and subscript', () => {
    const wrapper = shallow(<BaseSupSub base="testing" sub="rocks" />)
    expect(wrapper.childAt(0).html())
      .to.equal('<div style="font-size:1em;display:flex;flex-flow:row nowrap;align-items:stretch">' +
                  '<div>testing</div>' +
                  '<div style="font-size:0.5em;display:flex;flex-flow:column nowrap;justify-content:space-between;padding-left:0.1em">' +
                    '<div></div>' +
                    '<div>rocks</div>' +
                  '</div>' +
                '</div>')
  })

  it('should shallow render a BaseSupSub component with all basic values', () => {
    const wrapper = shallow(<BaseSupSub base="baseline" sup="superscript" sub="subscript" />)
    expect(wrapper.childAt(0).html())
      .to.equal('<div style="font-size:1em;display:flex;flex-flow:row nowrap;align-items:stretch">' +
                  '<div>baseline</div>' +
                  '<div style="font-size:0.5em;display:flex;flex-flow:column nowrap;justify-content:space-between;padding-left:0.1em">' +
                    '<div>superscript</div>' +
                    '<div>subscript</div>' +
                  '</div>' +
                '</div>')
  })

  it('should shallow render a BaseSupSub component with a class', () => {
    const wrapper = shallow(<BaseSupSub className="testing rocks" base="baseline" sup="superscript" sub="subscript" />)
    expect(wrapper.type())
      .to.equal('div')
    expect(wrapper.hasClass('testing') && wrapper.hasClass('rocks'))
      .to.equal(true)
  })

  it('should shallow render a BaseSupSub component with inline styles that overwrite the default display inline-block mode', () => {
    const wrapper = shallow(<BaseSupSub style={{ display: 'block' }} base="baseline" sup="superscript" sub="subscript" />)
    expect(wrapper.prop('style').display)
      .to.deep.equal('block')
  })

})
