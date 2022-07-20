let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/indonesia'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.indonesia', m)
}
handler.help = ['indonesia']
handler.tags = ['asupan']
handler.command = /^(indonesia)$/i

handler.premium = true

module.exports = handler
