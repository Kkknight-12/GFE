function rgbaToHex(rgba) {
  // Remove the "rgba(" and ")" parts from the string
  rgba = rgba.substring(rgba.indexOf("(") + 1, rgba.lastIndexOf(")"))

  // Split the RGBA values into an array
  const rgbaValues = rgba.split(",")

  // Convert each RGBA value to its hexadecimal equivalent
  const hexValues = rgbaValues.map((value) => {
    // Convert the value to an integer
    const intValue = parseInt(value.trim(), 10)

    // Convert the integer to a hexadecimal string
    const hexValue = intValue.toString(16).padStart(2, "0")

    return hexValue
  })

  // Combine the hexadecimal values into a single HEX string
  const hex = "#" + hexValues.join("")

  return hex
}

// Example usage
const rgba = "rgba(255, 0, 0, 0.5)"
const hex = rgbaToHex(rgba)
console.log(hex) // Output: "#ff0000"
