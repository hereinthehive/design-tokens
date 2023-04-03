import DesignTokens = require("design-tokens");

const testTokenObject: TokenItemObject = {
    "$type": SingleTokenType.Color,
    "$value": "#f00",
    "$description": "This is a test"
}

const testTokenObjectWithNumber: TokenItemObject = {
    "$type": SingleTokenType.FontWeight,
    "$value": 400,
}

// yes, you wouldn't set an array for a font weight ;)
const testTokenObjectWithArray: TokenItemObject = {
    "$type": SingleTokenType.FontWeight,
    "$value": [400, 500],
}

const testCompositeTokenObject: TokenItemObject = {
    "$type": CompositeTokenType.Shadow,
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
    "$type": SingleTokenType.Color,
    "$value": "#f00"
  }
}

const testColorTokenGroup: TokenGroup = {
  "color": {
    "dark": {
      "$value": "#1B283A",
      "$type": SingleTokenType.Color
    },
    "base": {
      "$value": "#222B5E",
      "$type": SingleTokenType.Color
    },
    "light": {
      "$value": "#4871D9",
      "$type": SingleTokenType.Color
    }
  }
}

const testColorTokenNestedGroup: TokenGroup = {
  "color": {
    "blue": {
      "dark": {
        "$value": "#1B283A",
        "$type": SingleTokenType.Color
      },
      "base": {
        "$value": "#222B5E",
        "$type": SingleTokenType.Color
      },
      "light": {
        "$value": "#4871D9",
        "$type": SingleTokenType.Color
      }
    }
  }
}


