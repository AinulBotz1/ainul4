const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
╭─────{ 𝐑𝐔𝐋𝐄𝐒 }─────
│• 𝙳𝚒 𝙻𝚊𝚛𝚊𝚗𝚐 𝙷𝚒𝚗𝚊 𝙾𝚠𝚗𝚎𝚛
│• 𝙳𝙸 𝙻𝙰𝚁𝙰𝙽𝙶 𝚂𝙿𝙰𝙼
│• 𝙳𝙸 𝙻𝙰𝚁𝙰𝙽𝙶 𝚃𝙴𝙻𝙿/𝚅𝙲
│• 𝙳𝙸 𝙻𝙰𝚁𝙰𝙽𝙵 𝙲𝚄𝙻𝙸𝙺 𝙱𝙾𝚃
│• 𝙱𝙾𝚃 𝚃𝙸𝙳𝙰𝙺 𝙼𝙴𝙽𝙴𝚁𝙸𝙼𝙰 𝚂𝙰𝚅𝙴 𝙺𝙾𝙽𝚃𝙰𝙺
┬
╰──────────···
╭─────{ 𝐇𝐔𝐊𝐔𝐌 }─────
│• 𝙱𝙻𝙾𝙺𝙸𝚁
╰──────────···
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '🤖 PILIH MENU BIBAWAH',
           hydratedButtons: [{
             urlButton: {
               displayText: '🤖GroupBot🤖',
               url: 'https://chat.whatsapp.com/Hs5rHr27xu49VRLgdliMfR'
             }

           },
                {
               urlButton: {
               displayText: 'YOUTUBE ME',
               url: 'https://youtu.be/tH-0Uq_s_H4'
             }

           },
               {
             quickReplyButton: {
               displayText: 'JANGAN DIPENCET',
               id: '',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'MENU',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'RUNTIME',
               id: '.runtime',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'update']
handler.command = /^(rules|rule|snk)$/i
handler.help = ['rules']
module.exports = handler
