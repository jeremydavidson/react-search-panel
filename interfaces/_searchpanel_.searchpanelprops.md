[react-search-panel](../README.md) › [Globals](../globals.md) › ["SearchPanel"](../modules/_searchpanel_.md) › [SearchPanelProps](_searchpanel_.searchpanelprops.md)

# Interface: SearchPanelProps

Definition of props for SearchPanel

## Hierarchy

* **SearchPanelProps**

## Index

### Properties

* [choices](_searchpanel_.searchpanelprops.md#choices)
* [isMultiSelect](_searchpanel_.searchpanelprops.md#optional-ismultiselect)
* [isSelectionOptional](_searchpanel_.searchpanelprops.md#optional-isselectionoptional)
* [noChoiceItem](_searchpanel_.searchpanelprops.md#optional-nochoiceitem)
* [onChange](_searchpanel_.searchpanelprops.md#onchange)
* [onSelectionChange](_searchpanel_.searchpanelprops.md#onselectionchange)
* [placeholder](_searchpanel_.searchpanelprops.md#placeholder)
* [shadow](_searchpanel_.searchpanelprops.md#optional-shadow)
* [small](_searchpanel_.searchpanelprops.md#optional-small)
* [value](_searchpanel_.searchpanelprops.md#value)

## Properties

###  choices

• **choices**: *Array‹[SearchPanelChoice](_searchpanel_.searchpanelchoice.md)›*

*Defined in [SearchPanel.tsx:22](https://github.com/jeremydavidson/react-search-panel/blob/94e4d95/src/SearchPanel.tsx#L22)*

An array of choices to be displayed

___

### `Optional` isMultiSelect

• **isMultiSelect**? : *undefined | false | true*

*Defined in [SearchPanel.tsx:28](https://github.com/jeremydavidson/react-search-panel/blob/94e4d95/src/SearchPanel.tsx#L28)*

By default choices are selected as radio buttons,
with isMultiSelect={true} they are displayed as checkboxes.

___

### `Optional` isSelectionOptional

• **isSelectionOptional**? : *undefined | false | true*

*Defined in [SearchPanel.tsx:33](https://github.com/jeremydavidson/react-search-panel/blob/94e4d95/src/SearchPanel.tsx#L33)*

Display a "None" option so you can deselect any previously selected choice(s).

___

### `Optional` noChoiceItem

• **noChoiceItem**? : *[SearchPanelChoice](_searchpanel_.searchpanelchoice.md)*

*Defined in [SearchPanel.tsx:34](https://github.com/jeremydavidson/react-search-panel/blob/94e4d95/src/SearchPanel.tsx#L34)*

___

###  onChange

• **onChange**: *function*

*Defined in [SearchPanel.tsx:35](https://github.com/jeremydavidson/react-search-panel/blob/94e4d95/src/SearchPanel.tsx#L35)*

#### Type declaration:

▸ (`event`: ChangeEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | ChangeEvent |

___

###  onSelectionChange

• **onSelectionChange**: *function*

*Defined in [SearchPanel.tsx:36](https://github.com/jeremydavidson/react-search-panel/blob/94e4d95/src/SearchPanel.tsx#L36)*

#### Type declaration:

▸ (`selectedKeys`: Array‹string›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`selectedKeys` | Array‹string› |

___

###  placeholder

• **placeholder**: *string*

*Defined in [SearchPanel.tsx:39](https://github.com/jeremydavidson/react-search-panel/blob/94e4d95/src/SearchPanel.tsx#L39)*

___

### `Optional` shadow

• **shadow**? : *undefined | false | true*

*Defined in [SearchPanel.tsx:37](https://github.com/jeremydavidson/react-search-panel/blob/94e4d95/src/SearchPanel.tsx#L37)*

___

### `Optional` small

• **small**? : *undefined | false | true*

*Defined in [SearchPanel.tsx:38](https://github.com/jeremydavidson/react-search-panel/blob/94e4d95/src/SearchPanel.tsx#L38)*

___

###  value

• **value**: *string*

*Defined in [SearchPanel.tsx:40](https://github.com/jeremydavidson/react-search-panel/blob/94e4d95/src/SearchPanel.tsx#L40)*
