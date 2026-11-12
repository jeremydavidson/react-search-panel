import type { Meta, StoryObj } from "@storybook/react-vite"
import { type ComponentProps,useState } from "react"
import { expect, fn, userEvent, within } from "storybook/test"

import {
  SearchPanel,
  type SearchPanelChoice,
  SearchPanelVariant,
} from "./SearchPanel"

const choices: SearchPanelChoice[] = [
  { key: "choice1", description: "A choice" },
  { key: "choice2", description: "Another choice" },
  { key: "choice3", description: "This choice" },
  { key: "choice4", description: "That choice" },
]

const noChoiceItem = { key: "none", description: "None" }

const meta = {
  title: "SearchPanel",
  component: SearchPanel,
  args: {
    choices,
    onChange: fn(),
    onSelectionChange: fn(),
    placeholder: "Search",
    value: "",
  },
} satisfies Meta<typeof SearchPanel>

export default meta

type Story = StoryObj<typeof meta>

const StatefulSearchPanel = (
  props: Omit<ComponentProps<typeof SearchPanel>, "onChange" | "value"> & {
    initialValue?: string
    initialSelected?: SearchPanelChoice[]
  },
) => {
  const {
    initialValue = "",
    initialSelected = [],
    onSelectionChange,
    ...rest
  } = props
  const [input, setInput] = useState(initialValue)
  const [selected, setSelected] = useState(initialSelected)

  return (
    <SearchPanel
      {...rest}
      value={input}
      preSelectedChoices={selected}
      onChange={(event) => setInput(event.target.value)}
      onClear={() => setInput("")}
      onSelectionChange={(next) => {
        setSelected(next)
        onSelectionChange(next)
      }}
    />
  )
}

export const Default: Story = {
  render: (args) => <StatefulSearchPanel {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText("Search")
    await userEvent.click(input)
    await expect(canvas.getByText("A choice")).toBeInTheDocument()
  },
}

export const Small: Story = {
  args: {
    small: true,
    width: 300,
  },
  render: (args) => <StatefulSearchPanel {...args} />,
}

export const Shadow: Story = {
  args: {
    shadow: true,
  },
  render: (args) => <StatefulSearchPanel {...args} />,
}

export const MultiSelect: Story = {
  args: {
    chips: true,
    shadow: true,
    variant: SearchPanelVariant.checkbox,
  },
  render: (args) => <StatefulSearchPanel {...args} />,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByPlaceholderText("Search"))
    await userEvent.click(canvas.getByText("A choice"))
    await expect(args.onSelectionChange).toHaveBeenCalled()
    await expect(canvas.getAllByText("A choice").length).toBeGreaterThan(1)
  },
}

export const MultiSelectWithNone: Story = {
  args: {
    noChoiceItem,
    shadow: true,
    variant: SearchPanelVariant.checkbox,
  },
  render: (args) => <StatefulSearchPanel {...args} />,
}

export const SmallWithMultiSelect: Story = {
  args: {
    noChoiceItem,
    shadow: true,
    small: true,
    variant: SearchPanelVariant.checkbox,
  },
  render: (args) => <StatefulSearchPanel {...args} />,
}

export const PreselectedChoices: Story = {
  args: {
    chips: true,
    shadow: true,
    variant: SearchPanelVariant.checkbox,
  },
  render: (args) => (
    <StatefulSearchPanel {...args} initialSelected={choices} />
  ),
}

export const PreselectedSmall: Story = {
  args: {
    chips: true,
    maximumHeight: 120,
    small: true,
    variant: SearchPanelVariant.checkbox,
    width: 400,
  },
  render: (args) => (
    <StatefulSearchPanel {...args} initialSelected={choices} />
  ),
}

export const SingleSelectNone: Story = {
  args: {
    noChoiceItem,
    shadow: true,
    variant: SearchPanelVariant.radio,
  },
  render: (args) => <StatefulSearchPanel {...args} />,
}

export const DefaultWithWidth: Story = {
  args: {
    noChoiceItem,
    variant: SearchPanelVariant.checkbox,
    width: 300,
  },
  render: (args) => <StatefulSearchPanel {...args} />,
}

export const LinkVariant: Story = {
  args: {
    shadow: true,
    variant: SearchPanelVariant.link,
  },
  render: (args) => <StatefulSearchPanel {...args} />,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByPlaceholderText("Search"))
    await userEvent.click(canvas.getByText("A choice"))
    await expect(args.onSelectionChange).toHaveBeenCalledWith([
      choices[0],
    ])
  },
}

export const LinkVariantSmall: Story = {
  args: {
    small: true,
    variant: SearchPanelVariant.link,
  },
  render: (args) => <StatefulSearchPanel {...args} />,
}

export const FloatingResults: Story = {
  args: {
    float: true,
    maximumHeight: 100,
    shadow: true,
    variant: SearchPanelVariant.link,
    width: 350,
  },
  render: (args) => <StatefulSearchPanel {...args} />,
}

export const LoadingIndicator: Story = {
  args: {
    isLoading: true,
    shadow: true,
    variant: SearchPanelVariant.link,
  },
  render: (args) => <StatefulSearchPanel {...args} />,
}

export const ClearButton: Story = {
  args: {
    clearLabel: "Clear search",
    isLoading: false,
    shadow: true,
    variant: SearchPanelVariant.link,
  },
  render: (args) => (
    <StatefulSearchPanel {...args} initialValue="Default input" />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText("Search")
    await expect(input).toHaveValue("Default input")
    await expect(canvas.getByTitle("Clear search")).toBeInTheDocument()
    await userEvent.click(canvas.getByTitle("Clear search"))
    await expect(input).toHaveValue("")
    await userEvent.type(input, "Default input")
    await expect(canvas.getByTitle("Clear search")).toBeInTheDocument()
  },
}

export const ClearButtonSmall: Story = {
  args: {
    clearLabel: "Clear search",
    isLoading: false,
    shadow: true,
    small: true,
    variant: SearchPanelVariant.link,
  },
  render: (args) => (
    <StatefulSearchPanel {...args} initialValue="Default input" />
  ),
}
