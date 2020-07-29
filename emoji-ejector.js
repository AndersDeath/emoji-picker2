const fs = require('fs');
const emojilib = require('emojilib');

const result = {
    data: [],
    categories: []
}

for(let title in emojilib.lib) {
    const item = emojilib.lib[title];
    result.data.push({
        title: title,
        ...item     
    });
    if(!result.categories.includes(item.category)) {
        result.categories.push(item.category);
    }
};
fs.writeFileSync("./src/utils/emoji/data.ts", `export const data = ${JSON.stringify(result)};`); 