// module.exports = async function(app, i){
//     console.log('=====',`https://ilearnmore.net/entWeChat/getShop?shopids=${i}`)
//     let res = await app.curl(`https://ilearnmore.net/entWeChat/getShop?shopids=${i}`, {
//       coding: 'utf8'
//     });
//     let ret = JSON.parse(res.data.toString())
//     if(ret.status != 0) return console.log('==========请求失败==========')
//     if(ret.content.length === 0) return console.log('==========无店铺信息==========')
//     console.log('==========店铺数据==========',ret)
//     let item = ret.content[0]
//     let shop = {
//         "name": item.name,
//         "shopid": i,
//         "created": item.created,
//         "address": item.address,
//         "logo": item.logo,
//         "logo2": item.logo2,
//         "qrcode": item.qrcode,
//         "shopType": item.qudao,
//         "version": item.version,
//     }
//     app.mysql.insert('shop', shop)
// }