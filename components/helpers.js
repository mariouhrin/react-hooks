import sample from "lodash/sample";

export function getRandomColor() {
  const color = sample([
    "#EDDEDE",
    "#EBCCAD",
    "#E8D67D",
    "#CCD98C",
    "#94D19E",
    "#8CBFD9",
    "#B3BBE6",
    "#C5B8E0",
    "#C99CC9",
    "#E87D8F",
    "#ffbb9e",
    "#ce871a",
    "#d582df",
    "#c1ffc1",
    "#f0f8ff",
    "#ffffb8",
    "#c3f194",
    "#fdcd04",
    "#37d0fd",
    "#e0e8ae"
  ]);
  return color;
}
