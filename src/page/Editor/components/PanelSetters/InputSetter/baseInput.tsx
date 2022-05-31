import { FC, useEffect, useState } from "react"
import { Input } from "@illa-design/input"
import { BaseInputSetterProps } from "./interface"
import { applyInputSetterWrapperStyle } from "./style"

export const BaseInput: FC<BaseInputSetterProps> = (props) => {
  const {
    isFullWidth,
    placeholder,
    defaultValue,
    isInList,
    attrName,
    panelConfig,
    handleUpdateDsl,
    handleUpdatePanelConfig,
  } = props

  const [inputValue, setInputValue] = useState(panelConfig[attrName])

  useEffect(() => {
    setInputValue(panelConfig[attrName])
  }, [panelConfig[attrName]])

  return (
    <div css={applyInputSetterWrapperStyle(isFullWidth, isInList)}>
      <Input
        placeholder={placeholder}
        value={inputValue ?? defaultValue}
        onChange={;(value) => {
          setInputValue(value)
          handleUpdatePanelConfig({ [attrName]: value })
          // TODO： calc dsl and then to update props
          handleUpdateDsl({ [attrName]: value })
        }}
      />
    </div>
  )
}

BaseInput.displayName = "BaseInput"
