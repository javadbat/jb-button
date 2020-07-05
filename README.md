# jb-button

## instruction

### set loading

you can show loading by `element.isLoading = true`
you can add text to loading by `<jb-button loading-text="در حال ثبت">your button text</jb-button>`

### change button style

you can inject your custom style by attribute to button.
`<jb-button button-style="height:36px;"></jb-button>`
you can do change web-component style by set `component-style` too  
the other way of injecting style to jb-button is by providing css variable to set some atttribute for example to set button height:

```css
.your-jb-button-wrapper{
    /*degualt height of button is 44px but it will change it to 40px*/
    --jb-button-height: 40px;
    /* set button marging for example for zero margin:*/
    --jb-button-margin: 0 0;
}
```
