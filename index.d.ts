// Type definitions for design-tokens 1.0
// Definitions by: Dan Donald <https://github.com/hereinthehive>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace DesignTokens {
  /**
   * These are the basic types derved from the spec
   */
  enum TokenTypeSingle {
    color,
    dimension,
    duration,
    fontFamily,
    fontWeight,
    number,
  }
  
  /**
   * Composite types are also defined in the space
   */
  enum TokenTypeComposite {
    border,
    cubicBezier,
    gradient,
    shadow,
    strokeStyle,
    transition,
    typography
  }

  /**
   * To ensure that the $value of a composite object is clear what it can store
   */
  interface TokenItemCompositeObject {
    [key: string]: string | number
  }

  /**
   * The item object described the content of a specific token
   */
  interface TokenItemObject {
    "$type": TokenTypeSingle | TokenTypeComposite
    "$value": number | number[] | string |  string[] | TokenItemCompositeObject
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
