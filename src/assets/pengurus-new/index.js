// const imageNames = [
// 	"aca",
// 	"aidil",
// 	"anca",
// 	"anhar",
// 	"cimol",
// 	"dani",
// 	"darma",
// 	"daus",
// 	"fuji",
// 	"gardi",
// 	"gilang",
// 	"haris",
// 	"idar",
// 	"khildan",
// 	"lebu",
// 	"madhan",
// 	"maruf",
// 	"musda",
// 	"panjul",
// 	"qunio",
// 	"rere",
// 	"thoriq",
// 	"uki",
// 	"zaim",
// 	"gaza",
// 	"faisal",
// 	"rian",
//     "nuha",
//     "luthfi"
// ];

// const images = imageNames.reduce((acc, name) => {
// 	acc[name] = require(`../pengurus/${name}.webp`);
// 	return acc;
// }, {});

// export default images;

const requireContext = require.context("./", false, /\.webp$/);

const images = requireContext.keys().reduce((acc, filePath) => {
  const fileName = filePath.match(/\.\/(.*)\.webp$/)[1];
  acc[fileName] = requireContext(filePath);
  return acc;
}, {});

export default images;
