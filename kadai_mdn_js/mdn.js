const dateNow = new Date();

const year = dateNow.getUTCFullYear();
const month = dateNow.getUTCMonth() + 1;
const date = dateNow.getUTCDate();
 
console.log(`${year}年${month}月${date}日`);