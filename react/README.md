# JBButton React

this component is React.js wrapper for [jb-button](https://www.npmjs.com/package/jb-button) web component
JBButton is a simple button `react component` with some additional feature.

- custom styling

- loading state

sample in codepen: <https://codepen.io/javadbat/pen/NWdeMwY>

Demo :  Demo: [codeSandbox preview](https://3f63dj.csb.app/samples/jb-button) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBButton.tsx) if you want to see and play with code

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

you can show loading by setting props , isLoading = true you can add text to loading by <JBButton loading-text="...your loading text">your button text</JBButton>

#### other props

| props name	 | description                                      |
| -------------  | -----------------------                          |
| type           | change button HTML type                          |
| disabled       | disable the button                               |
| isLoading      | set loading state of button                      |
| color          | 'primary', 'positive', 'danger', 'light', 'dark' |
| variant        | 'solid', 'outline', 'ghost', 'text'              |
| size           | 'xs' , 'sm' , 'md' , 'lg' , 'xl'                 |

### events
- onClick
```jsx
  <JBButton onClick={(event) => console.log(event)}></JBButton>
```
## change button style
    react component depends on css variable for customization so there is no difference between react component and web-component in styling . to learn more about styling jb-button see [jb-button](https://github.com/javadbat/jb-button) styling section.



