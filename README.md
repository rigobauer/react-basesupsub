# react-basesupsub

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