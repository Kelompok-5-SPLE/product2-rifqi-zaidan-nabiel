const isSelectedFeature = (item) => selectedFeatures.some(x => x.includes(item))

export default isSelectedFeature

var selectedFeatures = Array.from(new Set ([

"Menu Page",
"KidsMenu",


"Menu Page",
"PromotionalMenu",


"Menu Page",
"TraditionalMenu",


"Home",
]))
