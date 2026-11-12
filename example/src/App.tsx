import axios from "axios"
import { useEffect, useState, type ChangeEvent } from "react"
import {
  SearchPanel,
  SearchPanelVariant,
  type SearchPanelChoice,
} from "react-search-panel"

const styles = {
  container: {
    margin: "auto",
    maxWidth: "650px",
    padding: "40px",
  },
  formItem: {
    marginLeft: "15px",
  },
  formLabel: {
    marginLeft: "5px",
  },
} as const

const baseUrl = "https://api.tvmaze.com/search/shows?q="
const MIN_INPUT = 3

export interface Show {
  id: number
  name: string
}

export interface ShowContainer {
  score: number
  show: Show
}

const preselectedChoices: SearchPanelChoice[] = [
  { key: "38963", description: "The Mandalorian" },
  { key: "563", description: "Star Wars: The Clone Wars" },
]

interface VariantChoiceProps {
  label: string
  variant: SearchPanelVariant
  variantChoice: SearchPanelVariant
  onVariantChange: (variantChoice: SearchPanelVariant) => void
}

const VariantChoice = ({
  label,
  variant,
  variantChoice,
  onVariantChange,
}: VariantChoiceProps) => {
  return (
    <label style={styles.formItem}>
      <input
        type="radio"
        value={variantChoice}
        tabIndex={0}
        checked={variant === variantChoice}
        onChange={() => onVariantChange(variantChoice)}
      />
      <span style={styles.formLabel}>
        {label}
      </span>
    </label>
  )
}

const App = () => {
  const [input, setInput] = useState("")
  const [variant, setVariant] = useState<SearchPanelVariant>(
    SearchPanelVariant.checkbox,
  )
  const [choices, setChoices] = useState<SearchPanelChoice[]>([])
  const [selectedChoices, setSelectedChoices] = useState<SearchPanelChoice[]>(
    preselectedChoices,
  )
  const [isLoading, setIsLoading] = useState(false)

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleSelectionChange = (nextSelected: SearchPanelChoice[]) => {
    setSelectedChoices(nextSelected)
  }

  useEffect(() => {
    let cancelled = false

    queueMicrotask(() => {
      if (cancelled) {
        return
      }

      if (
        variant === SearchPanelVariant.link
        || variant === SearchPanelVariant.radio
      ) {
        setSelectedChoices([])
      }
      setInput("")
    })

    return () => {
      cancelled = true
    }
  }, [variant])

  useEffect(() => {
    let cancelled = false

    const search = async () => {
      setIsLoading(true)
      const resultChoices: SearchPanelChoice[] = []

      if (input.length >= MIN_INPUT) {
        const response = await axios.get<ShowContainer[]>(`${baseUrl}${input}`)
        response.data.forEach((result) => {
          resultChoices.push({
            key: result.show.id.toString(),
            description: result.show.name,
          })
        })
      }

      if (!cancelled) {
        setChoices(resultChoices)
        setIsLoading(false)
      }
    }

    void search()

    return () => {
      cancelled = true
    }
  }, [input])

  return (
    <div style={styles.container}>
      <h1>A demonstration of react-search-panel</h1>
      <p>
        This demonstration searches for TV shows when you type at least {MIN_INPUT} characters.
        It uses the public <a href="https://www.tvmaze.com/api#show-search">TVMAZE API</a>.
        When picking a link variant, clear search box to show how that can be done.
      </p>
      <p>
        Configure variant:
        <VariantChoice
          label="Checkbox"
          variant={variant}
          variantChoice={SearchPanelVariant.checkbox}
          onVariantChange={setVariant}
        />
        <VariantChoice
          label="Link"
          variant={variant}
          variantChoice={SearchPanelVariant.link}
          onVariantChange={setVariant}
        />
        <VariantChoice
          label="Radio"
          variant={variant}
          variantChoice={SearchPanelVariant.radio}
          onVariantChange={setVariant}
        />
      </p>
      <SearchPanel
        chips
        choices={choices}
        clearLabel="Clear search"
        isLoading={isLoading}
        maximumHeight={150}
        onChange={handleSearchChange}
        onClear={() => setInput("")}
        onSelectionChange={handleSelectionChange}
        placeholder="Search TV shows"
        preSelectedChoices={selectedChoices}
        shadow
        value={input}
        variant={variant}
        width={400}
      />
    </div>
  )
}

export default App
