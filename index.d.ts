// Type definitions for design-tokens 1.0
// Definitions by: Dan Donald <https://github.com/hereinthehive>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare global {
  /**
   * These are the basic types derved from the spec
   */
  enum SingleTokenType {
    Color = "color",
    Dimension = "dimension",
    Duration = "duration",
    FontFamily = "fontFamily",
    FontWeight = "fontWeight",
    Number = "number",
  }
  
  /**
   * Composite types are also defined in the space
   */
  enum CompositeTokenType {
    Border = "border",
    CubicBezier = "cubicBezier",
    Gradient = "gradient",
    Shadow = "shadow",
    StrokeStyle = "strokeStyle",
    Transition = "transition",
    Typography = "typography"
  }

  /**
   * To ensure that the $value of a composite object is clear what it can store
   */
  interface CompositeTokenItemValue {
    [key: string]: string | number
  }

  /**
   * The item object described the content of a specific token
   */
  interface TokenItemObject {
    "$type": SingleTokenType | CompositeTokenType
    "$value": number | number[] | string |  string[] | CompositeTokenItemValue
    "$description"?: string
    "$extensions"?: object
  }

  /**
   * A specific token is named by it's key
   */
  interface TokenItem {
    [name: string]: TokenItemObject
  }

  /**
   * A token group is a collection of design tokens
   * 
   * TODO: add optional $description filed
   */
  interface TokenGroup {
    [name: string]: TokenGroup | TokenItem | TokenItemObject
  }
}

export = DesignTokens
