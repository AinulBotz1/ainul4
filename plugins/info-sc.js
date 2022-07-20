let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Knp kak ${ye} Lagi Nyari Sc Ya? 

𝘊𝘈𝘙𝘐 𝘈𝘑𝘈 𝘋𝘐 𝘠𝘖𝘜 𝘛𝘜𝘉𝘌

GITHUB:
https://github.com/AwokAwok

JOIN GC BOT:
https://chat.whatsapp.com/DoB35RNfbW3AZgb0SmRNGY

conn.sendBut(m.chat, esce, 'Jangan Lupa TerimaKasih Awok', 'Thanks', '.menu', m) 
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
