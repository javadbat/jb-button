# JBButton React

this component is React.js wrapper for [jb-button](https://www.npmjs.com/package/jb-button) web component
JBButton is a simple button `react component` with some additional feature.

- custom styling

- loading state

sample: <https://codepen.io/javadbat/pen/NWdeMwY>
## installation

```command
    npm i jb-button
```
in your jsx file
```js
    import {JBButton} from "jb-button/react"
```
``` jsx
    <JBButton></JBButton>
```
## instruction
#### set loading

you can show loading by setting props , isLoading = true you can add text to loading by <JBButton loading-text="در حال ثبت">your button text</JBButton>

#### other props

| props name	 | description             |
| -------------  | ----------------------- |
| type           | change button HTML type |
| disabled       | disable the button      |
| isLoading      | set loading state of button |

### events
- onClick
```jsx
  <JBButton onClick={(event) => console.log(event)}></JBButton>
```
## change button style
the way of injecting style to jb-button is by providing css variable in component parent element to set some atttribute for example to set button height:

```css
.your-jb-button-wrapper{
    /*degualt height of button is 44px but it will change it to 40px*/
    --jb-button-height: 40px;
    /* set button marging for example for zero margin:*/
    --jb-button-margin: 0 0;
}
```

in some cases in your project you need to change the defualt style of the component for example you need zero margin or different border-radius and etc. if you want to set a custom style to this component all you need is to set css variable in parent scope of the component.


|css variable name	                | description                                    |  
|------------------                 | --------------------------------------         |
|--jb-button-margin	                | component margin defualt is 16px 0             |
|--jb-button-border-radius	        | component border-radius defualt is 16px        |
|--jb-button-border	                | component css border attribute default is none |
|--jb-button-primary-bgcolor        | background color of button in primary          |
|--jb-button-primary-hover-bgcolor	| background color of button in primary          |
|--jb-button-height	                | button height defualt is 44px                  |
|--jb-button-text-shadow		    | button text shadow defualt is none             |
|--jb-button-font-weight		    | font weight of button defualt is bold          |
|--jb-button-font-size	            | font size of button defualt is 1.2em           |
|--jb-button-color-hover	        | color of buttton in hover state                |
|--jb-button-cursor		            | change button cursor defualt is pointer        |
|--jb-button-bgcolor-disabled		| background color of button when disabled       |
|--jb-button-color-disabled		    | color of button when disabled                  |
|--jb-button-cursor-disabled		| cursor of button when disabled                 |
|--jb-button-border-disabled	    | border of button when disabled                 |
|--jb-button-text-shadow-disabled	| text shadow of button when disabled            |



