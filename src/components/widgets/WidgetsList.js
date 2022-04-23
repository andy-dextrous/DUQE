import React from "react"
import { Widget } from "./Widget"
import { useThemeOptions } from "../../hooks/useThemeOptions"

export const WidgetsList = () => {
  const { widgetAreas } = useThemeOptions()
  const widgets = widgetAreas.slideMenuWidgets || []
  return (
    Array.isArray(widgets) &&
    widgets.map(widget => <Widget key={widget} widget={widget} />)
  )
}
