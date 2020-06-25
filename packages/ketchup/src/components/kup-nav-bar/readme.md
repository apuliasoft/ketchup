# kup-nav-bar



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                 | Type                                                                                                                                                                                         | Default                                   |
| ------------- | -------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `customStyle` | `custom-style` | Custom style to be passed to the component. | `string`                                                                                                                                                                                     | `undefined`                               |
| `data`        | --             | The actual data of the nav bar.             | `ComponentNavBarData`                                                                                                                                                                        | `{         title: 'default title',     }` |
| `mode`        | `mode`         | Defines how the bar will be displayed.      | `ComponentNavBarMode.DEFAULT \| ComponentNavBarMode.DENSE \| ComponentNavBarMode.FIXED \| ComponentNavBarMode.PROMINENT \| ComponentNavBarMode.SHORT \| ComponentNavBarMode.SHORT_COLLAPSED` | `ComponentNavBarMode.DEFAULT`             |


## Events

| Event                      | Description | Type                           |
| -------------------------- | ----------- | ------------------------------ |
| `kupNavbarMenuItemClick`   |             | `CustomEvent<{ value: any; }>` |
| `kupNavbarOptionItemClick` |             | `CustomEvent<{ value: any; }>` |


## Dependencies

### Depends on

- [kup-list](../kup-list)
- [kup-button](../kup-button)

### Graph
```mermaid
graph TD;
  kup-nav-bar --> kup-list
  kup-nav-bar --> kup-button
  kup-list --> kup-image
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  kup-image --> kup-spinner
  kup-image --> kup-badge
  kup-badge --> kup-image
  kup-button --> kup-image
  style kup-nav-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*