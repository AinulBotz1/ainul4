let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
╭═══════════════════════
║╭──❉ 〔 ⳹YOUTUBE⳹ 〕 ❉────── 
║│➸ *_Github Owner*
║│➸  *https://xxnx.com/*
╰─────────❉
▌│█║▌║▌║║▌║▌║█│▌
AinulBotz ⸙ by.Ainul
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['yutube']
handler.tags = ['info']
handler.command = /^ytzi$/i

handler.premium = true

module.exports = handler
