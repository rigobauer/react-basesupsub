# react-basesupsub

[![Travis][build-badge]][build]
[![Coveralls][coveralls-badge]][coveralls]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads-badge]][npm-downloads]
[![License][license-badge]][license]

Simple component to render an element composed by baseline, superscript and subscript.

## Usage

```js
<BaseSupSub base="mybase" sup="mysuperscript" sub="mysubscript" />
<BaseSupSub base={10} sup={2} sub="something" />
<BaseSupSub base={10} sup={2} sub="something" className="myclass1 myclass2" />
<BaseSupSub base={10} sup={2} sub="something" style={{ color: 'red', fontSize: '30px' }} />
<BaseSupSub base={10} sup={2} sub="something" style={{ color: 'red', fontSize: '30px', display: 'block' }} />
```

## Notes

* The component has a default display mode of `inline-block`. This default is established using CSS Modules, to allow you overwrite it with two methods:
  - Applying your own class to the component, that sets another display mode:
    ```js
    <BaseSup className="yourclass" ......... />
    ```

  - Setting inline styles:
    ```js
    <BaseSup style={{ display: 'block' }} ......... />
    ```

* If you don't establish a `base` value, the component will render `null`.

* If you set only a `base` value, the component will render a simple div with all the props.


[build-badge]: https://img.shields.io/travis/rigobauer/react-basesupsub/master.svg?style=flat-square
[build]: https://travis-ci.org/rigobauer/react-basesupsub

[coveralls-badge]: https://img.shields.io/coveralls/rigobauer/react-basesupsub/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/rigobauer/react-basesupsub

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[commitizen]: http://commitizen.github.io/cz-cli/

[npm-badge]: https://img.shields.io/npm/v/react-basesupsub.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-basesupsub

[npm-downloads-badge]: https://img.shields.io/npm/dm/react-basesupsub.svg?style=flat-square
[npm-downloads]: https://npm-stat.com/charts.html?package=react-basesupsub

[license-badge]: https://img.shields.io/npm/l/react-basesupsub.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
