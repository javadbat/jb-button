# jb-button

simple button web-component with some additional features:

- custom styling

- support loading state

- typescript ready

- compatible with form elements

sample: <https://codepen.io/javadbat/pen/NWdeMwY>

## using with JS frameworks

to use this component in **react** see [`jb-button/react`](https://github.com/javadbat/jb-button/tree/main/react);

## instruction

### set loading

you can show loading by `element.isLoading = true`
you can add text to loading by `<jb-button loading-text="در حال ثبت">your button text</jb-button>`

### other attribute

| atribute name  | description                                                                                                         |
| -------------  | -------------                                                                                                       |
| type           | change button HTML type                                                                                             |
| disabled       | disable the button                                                                                                  |

### change button style

you can inject your custom style by attribute to button.

```HTML
<jb-button button-style="height:36px;"></jb-button>
```

the other way of injecting style to jb-button is by providing css variable in component parent element to set some atttribute for example to set button height:

```css
.your-jb-button-wrapper{
    /*degualt height of button is 44px but it will change it to 40px*/
    --jb-button-height: 40px;
    /* set button marging for example for zero margin:*/
    --jb-button-margin: 0 0;
}
```

in some cases in your project you need to change defualt style of web-component for example you need zero margin or different border-radius and etc.
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component
| css variable name                  | description                                                                                   |
| -------------                      | -------------                                                                                 |
| --jb-button-margin                 | web-component margin defualt is `16px 0`                                                      |
| --jb-button-border-radius          | web-component border-radius defualt is `16px`                                                 |
| --jb-button-border                 | web-component css border attribute default is `none`                                          |
| --jb-button-primary-bgcolor        | background color of button in primary                                                         |
| --jb-button-primary-hover-bgcolor  | background color of button in primary                                                         |
| --jb-button-height                 | button height defualt is 44px                                                                 |
| --jb-button-text-shadow            | button text shadow defualt is `none`                                                          |
| --jb-button-color                  | color of text in button defualt is `#fff`                                                     |
| --jb-button-box-shadow             | box shadow of the button component                                                            |
| --jb-button-font-weight            | font weight of button defualt is `bold`                                                       |
| --jb-button-font-size              | font size of button defualt is `1.2em`                                                        |
| --jb-button-color-hover            | color of buttton in hover state                                                               |
| --jb-button-cursor                 | change button cursor defualt is `pointer`                                                     |
| --jb-button-bgcolor-disabled       | background color of button when disabled                                                      |
| --jb-button-color-disabled         | color of button when disabled                                                                 |
| --jb-button-cursor-disabled        | cursor of button when disabled                                                                |
| --jb-button-border-disabled        | border of button when disabled                                                                |
| --jb-button-text-shadow-disabled   | text shadow of button when disabled                                                           |
| --jb-button-loading-color          | jb-loading icon color default is `#fff`                                                       |
| --jb-button-loading-color-hover    | jb-loading icon color on hover default is `#fff`                                              |

## Other Related Docs:

- see [`jb-button/react`](https://github.com/javadbat/jb-button/tree/main/react); if you want to use this component in react

- see [All JB Design system Component List](https://github.com/javadbat/design-system/blob/main/docs/component-list.md) for more components

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.