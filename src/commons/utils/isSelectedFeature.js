const isSelectedFeature = (item) => selectedFeatures.some(x => x.includes(item))

export default isSelectedFeature

var selectedFeatures = Array.from(new Set ([

"Menu Page",
"PromotionalMenu",


"Menu Page",
"KidsMenu",


"Menu Page",
"TraditionalMenu",


"Home",
]))
