import { useState } from "react"

export default function useFilterVisibility() {

    const [visibleSection, setVisibleSection] = useState(
        {
            sort: true,
            priceRange: true,
            categories: true,
            sizes: true,
            colors: true
        }
    )

    const toggleVisibility = (section) => {
        setVisibleSection((prev) => ({
            ...prev,
            [section]: !prev[section]
        }))
    }

  return {
    visibleSection, toggleVisibility
  }
}
