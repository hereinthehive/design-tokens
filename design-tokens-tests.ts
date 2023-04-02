import { TokenItem, TokenItemObject, TokenGroup } from "design-tokens";
import DesignTokens = require("design-tokens");

const testTokenObject: TokenItemObject = {
    "$type": DesignTokens.SingleTokenType.Color,
    "$value": "#f00",
    "$description": "This is a test"
}

const testTokenObjectWithNumber: TokenItemObject = {
    "$type": DesignTokens.SingleTokenType.FontWeight,
    "$value": 400,
}

// yes, you wouldn't set an array for a font weight ;)
const testTokenObjectWithArray: TokenItemObject = {
    "$type": DesignTokens.SingleTokenType.FontWeight,
    "$value": [400, 500],
}

const testCompositeTokenObject: TokenItemObject = {
    "$type": DesignTokens.CompositeTokenType.Shadow,
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
    "$type": DesignTokens.SingleTokenType.Color,
    "$value": "#f00"
  }
}

const testColorTokenGroup: TokenGroup = {
  "color": {
    "dark": {
      "$value": "#1B283A",
      "$type": DesignTokens.SingleTokenType.Color
    },
    "base": {
      "$value": "#222B5E",
      "$type": DesignTokens.SingleTokenType.Color
    },
    "light": {
      "$value": "#4871D9",
      "$type": DesignTokens.SingleTokenType.Color
    }
  }
}

const testColorTokenNestedGroup: TokenGroup = {
  "color": {
    "blue": {
      "dark": {
        "$value": "#1B283A",
        "$type": DesignTokens.SingleTokenType.Color
      },
      "base": {
        "$value": "#222B5E",
        "$type": DesignTokens.SingleTokenType.Color
      },
      "light": {
        "$value": "#4871D9",
        "$type": DesignTokens.SingleTokenType.Color
      }
    }
  }
}


