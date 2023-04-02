import { TokenItem, TokenItemObject, TokenGroup } from "design-tokens";
import DesignTokens = require("design-tokens");

const testTokenObject: TokenItemObject = {
    "$type": DesignTokens.TokenTypeSingle.color,
    "$value": "#f00",
    "$description": "This is a test"
}

const testTokenObjectWithNumber: TokenItemObject = {
    "$type": DesignTokens.TokenTypeSingle.fontWeight,
    "$value": 400,
}

// yes, you wouldn't set an array for a font weight ;)
const testTokenObjectWithArray: TokenItemObject = {
    "$type": DesignTokens.TokenTypeSingle.fontWeight,
    "$value": [400, 500],
}

const testCompositeTokenObject: TokenItemObject = {
    "$type": DesignTokens.TokenTypeComposite.shadow,
    "$value": {
      "color": "#00000088",
      "offsetX": "0.5rem",
      "offsetY": "0.5rem",
      "blur": "1.5rem",
      "spread": "0rem"
    },
}

const testColorToken: TokenItem = {
  "test-color": {
    "$type": DesignTokens.TokenTypeSingle.color,
    "$value": "#f00"
  }
}

const testColorTokenGroup: TokenGroup = {
  "color": {
    "dark": {
      "$value": "#1B283A",
      "$type": DesignTokens.TokenTypeSingle.color
    },
    "base": {
      "$value": "#222B5E",
      "$type": DesignTokens.TokenTypeSingle.color
    },
    "light": {
      "$value": "#4871D9",
      "$type": DesignTokens.TokenTypeSingle.color
    }
  }
}

const testColorTokenNestedGroup: TokenGroup = {
  "color": {
    "blue": {
      "dark": {
        "$value": "#1B283A",
        "$type": DesignTokens.TokenTypeSingle.color
      },
      "base": {
        "$value": "#222B5E",
        "$type": DesignTokens.TokenTypeSingle.color
      },
      "light": {
        "$value": "#4871D9",
        "$type": DesignTokens.TokenTypeSingle.color
      }
    }
  }
}


