const target = thisComp.layer("master").effect("Color Control")("Color");

const rgbToHex = (colorControl) => {
  const rgb = Array.from(colorControl.value, (num) =>
    Number(Math.round(num * 255))
      .toString(16)
      .padStart(2, "0")
      .toUpperCase()
  );
  rgb.pop();
  return `#${rgb.join("")}`;
};

rgbToHex(target);
