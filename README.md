# jb-button

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-button)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-button/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-button)](https://www.npmjs.com/package/jb-button)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-button)

simple button web-component with some additional features:

- custom styling

- support loading state

- typescript ready

- compatible with form elements

Demo:
- [codepen](https://codepen.io/javadbat/pen/NWdeMwY)
- [storybook](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-jbbutton)

## Using With JS Frameworks
- [<img src="https://img.shields.io/badge/React.js-jb--button%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-button/tree/main/react)

## instruction

### set loading

you can show loading by `element.isLoading = true`
you can add text to loading by `<jb-button loading-text="در حال ثبت">your button text</jb-button>`

## Attributes/Properties

| attribute name  | description                                                             |
| -------------  | -------------                                                            |
| type           | change button HTML type                                                  |
| disabled       | disable the button                                                       |
| color          | 'primary', 'secondary', 'positive', 'danger', 'warning', 'light', 'dark' |
| variant        | 'solid', 'outline', 'ghost', 'text'              |
| size           | 'xs' , 'sm' , 'md' , 'lg' , 'xl'                 |

### change button style

you can inject your custom style by attribute to button.

```HTML
<jb-button button-style="height:36px;"></jb-button>
```

the other way of injecting style to jb-button is by providing CSS variable in component parent element to set some attribute for example to set button height:

```css
.your-jb-button-wrapper{
    /*default height of button is 44px but it will change it to 40px*/
    --jb-button-height: 40px;
    /* set button margin for example for zero margin:*/
    --jb-button-margin: 0 0;
}
```

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.
if you want to set a custom style to this web-component all you need is to set CSS variable in parent scope of web-component
| CSS variable name                  | description                                                                 |
| -------------                      | -------------                                                               |
| --jb-button-margin                 | web-component margin                                                        |
| --jb-button-padding                | web-component margin                                                        |
| --jb-button-border-radius          | web-component border-radius                                                 |
| --jb-button-bgcolor-hover          | button bg-color when user hover                                             |
| --jb-button-bgcolor-pressed        | button bg-color when user pressed                                           |
| --jb-button-height                 | button height default is 44px                                               |
| --jb-button-text-shadow            | button text shadow                                                          |
| --jb-button-color                  | color of text in button                                                     |
| --jb-button-box-shadow             | box shadow of the button component                                          |
| --jb-button-font-weight            | font weight of button default is `bold`                                     |
| --jb-button-font-size              | font size of button default is `1.2em`                                      |
| --jb-button-color-hover            | color of button in hover state                                              |
| --jb-button-cursor                 | change button cursor default is `pointer`                                   |
| --jb-button-color-disabled         | color of button when disabled                                               |
| --jb-button-cursor-disabled        | cursor of button when disabled                                              |
| --jb-button-text-shadow-disabled   | text shadow of button when disabled                                         |
| --jb-button-loading-color          | jb-loading icon color default is text color value                           |
| --jb-button-loading-color-disabled | jb-loading icon color when disabled default is text color value             |
| --jb-button-bgcolor | Customize bgcolor. |
| --jb-button-bgcolor-ghost | Customize bgcolor ghost. |
| --jb-button-bgcolor-ghost-hover | Customize bgcolor ghost hover. |
| --jb-button-bgcolor-ghost-pressed | Customize bgcolor ghost pressed. |
| --jb-button-bgcolor-outline | Customize bgcolor outline. |
| --jb-button-bgcolor-outline-hover | Customize bgcolor outline hover. |
| --jb-button-bgcolor-outline-pressed | Customize bgcolor outline pressed. |
| --jb-button-border-color | Customize border color. |
| --jb-button-border-color-hover | Customize border color hover. |
| --jb-button-border-color-pressed | Customize border color pressed. |
| --jb-button-border-radius-lg | Customize border radius lg. |
| --jb-button-border-radius-sm | Customize border radius sm. |
| --jb-button-border-radius-xl | Customize border radius xl. |
| --jb-button-border-radius-xs | Customize border radius xs. |
| --jb-button-border-style | Customize border style. |
| --jb-button-border-width | Customize border width. |
| --jb-button-color-pressed | Customize color pressed. |
| --jb-button-danger | Customize danger. |
| --jb-button-dark | Customize dark. |
| --jb-button-disabled | Customize disabled. |
| --jb-button-font-size-lg | Customize font size lg. |
| --jb-button-font-size-sm | Customize font size sm. |
| --jb-button-font-size-xl | Customize font size xl. |
| --jb-button-font-size-xs | Customize font size xs. |
| --jb-button-height-lg | Customize height lg. |
| --jb-button-height-sm | Customize height sm. |
| --jb-button-height-xl | Customize height xl. |
| --jb-button-height-xs | Customize height xs. |
| --jb-button-icon-size | Customize icon size. |
| --jb-button-icon-size-lg | Customize icon size lg. |
| --jb-button-icon-size-sm | Customize icon size sm. |
| --jb-button-icon-size-xl | Customize icon size xl. |
| --jb-button-icon-size-xs | Customize icon size xs. |
| --jb-button-light | Customize light. |
| --jb-button-padding-lg | Customize padding lg. |
| --jb-button-padding-sm | Customize padding sm. |
| --jb-button-padding-xl | Customize padding xl. |
| --jb-button-padding-xs | Customize padding xs. |
| --jb-button-positive | Customize positive. |
| --jb-button-primary | Customize primary. |
| --jb-button-secondary | Customize secondary. |
| --jb-button-warning | Customize warning. |

## Related Docs
- see [`jb-button/react`](https://github.com/javadbat/jb-button/tree/main/react); if you want to use this component in react

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.
