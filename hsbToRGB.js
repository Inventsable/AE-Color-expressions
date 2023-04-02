// Results slightly off, will look into later

const hue = thisComp.layer("master").effect("Hue")("Slider").value,
  saturation = thisComp.layer("master").effect("Saturation")("Slider").value,
  brightness = thisComp.layer("master").effect("Brightness")("Slider").value;

/**
 * Custom implementation of hslToRgb in AE expressions
 * @param {number} h: 0 - 360 range for Hue
 * @param {number} s: 0 - 100 range for Saturation
 * @param {number} b: 0 - 100 range for Brightness
 * @returns {number[]} RGBA array of result (Alpha hardcoded as 1, otherwise need to replace with opacity value)
 */
function hsbToRGB(h, s, b) {
  // If needing 0 - 1 range instead of 0 - 100, remove these two lines:
  s /= 100;
  b /= 100;
  const a = s * Math.min(b, 1 - b);
  const f = (n, k = (n + h / 30) % 12) =>
    b - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [f(0), f(8), f(4), 1];
}

hsbToRGB(hue, saturation, brightness);
