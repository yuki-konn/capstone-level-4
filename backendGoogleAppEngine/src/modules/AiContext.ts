const caffeine = `
Matcha tea has the most caffeine content (60-120 mg per 8oz cup). 
Pu-erh tea is second in caffeine content (60-100 mg per 8oz cup). 
Mate tea is third in caffeine content (50-80 mg per 8oz cup). 
Black tea is fourth in caffeine content (40-70 mg per 8oz cup). 
Purple tea is fifth in caffeine content (35-55 mg per 8oz cup). 
Oolong tea is sixth in caffeine content (30-50 mg per 8oz cup). 
Green tea is seventh in caffeine content (25-45 mg per 8oz cup). 
White tea is eighth in caffeine content (10-30 mg per 8oz cup). 
The teas with the least caffeine are rooibos and herbal because they are caffeine-free.`;
const types = `The types of tea are Matcha, Pu-erh, Mate, Black, Green, Purple, Oolong, White, and Rooibos.`;
const defineTea = `
Tea is a beverage made from the leaves, buds, and twigs of the Camellia sinensis shrub.`;
const shelfLife = `Properly stored, loose leaf tea can last for years, but green and white teas are best within 2 months of opening, while oolong, black, and herbal teas should be consumed within 4-6 months.`;
const storage = `Store tea in a cool, dark, and dry place, away from strong odors and moisture.`;
const steepTime = `Brewing time varies depending on the type of tea, but generally, black teas brew for 3-5 minutes, green teas for 1-3 minutes, and herbal teas for 5-10 minutes.`;
const benefits = `Tea has been shown to have various health benefits, including antioxidant properties and potential benefits for cardiovascular health.`;
const bagOrLoose = `Loose leaf tea offers a more complex flavor profile and allows for a more precise brewing experience compared to tea bags, which often contain smaller, more fragmented leaves.`;

const faqContext = `${caffeine} ${types} ${defineTea} ${shelfLife} ${storage} ${steepTime} ${benefits} ${bagOrLoose}`;

export const aiContext = faqContext;
