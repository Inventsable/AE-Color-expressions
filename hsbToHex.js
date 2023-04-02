const hue = thisComp.layer("master").effect("Hue")("Slider").value,
  saturation = thisComp.layer("master").effect("Saturation")("Slider").value,
  brightness = thisComp.layer("master").effect("Brightness")("Slider").value;

/**
 * Converts given HSB value to hexadecimal color code
 * @param {number} h: 0 - 360 range for Hue
 * @param {number} s: 0 - 100 range for Saturation
 * @param {number} b: 0 - 100 range for Brightness
 * @returns {string} Hexadecimal string value
 */
function hsbToHex(h, s, b) {
  b /= 100;
  const a = (s * Math.min(b, 1 - b)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const n = b - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Number(Math.round(255 * n))
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

hsbToHex(hue, saturation, brightness);
