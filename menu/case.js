/*
base by natsu tech 🚶
contact me : +50943449838
*/
require('../settings/config')
const { 
  default: baileys, proto, jidNormalizedUser, generateWAMessage, 
  generateWAMessageFromContent, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");

const {
  downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, 
  generateWAMessageContent, makeInMemoryStore, MediaType, areJidsSameUser, 
  WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, 
  GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions, 
  useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, 
  WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, 
  WALocationMessage, WAContextInfo, WAGroupMetadata, ProxyAgent, 
  waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, 
  WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, 
  WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, 
  MediariyuInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload, mentionedJid, processTime, Browser, MessageType, 
  Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, 
  GroupSettingChange, DisriyuectReason, WASocket, getStream, WAProto, 
  isBaileys, AnyMessageContent, fetchLatestBaileysVersion, 
  templateMessage, InteractiveMessage, Header 
} = require("@whiskeysockets/baileys");

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const jimp = require("jimp")
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('../system/storage')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, addExif } = require('../system/exif.js')

module.exports = rich = async (rich, m, chatUpdate, store) => {
const { from } = m
try {
      
const body = (
    
    m.mtype === "conversation" ? m.message.conversation :
    m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :

   
    m.mtype === "imageMessage" ? m.message.imageMessage.caption :
    m.mtype === "videoMessage" ? m.message.videoMessage.caption :
    m.mtype === "documentMessage" ? m.message.documentMessage.caption || "" :
    m.mtype === "audioMessage" ? m.message.audioMessage.caption || "" :
    m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "" :

  
    m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :

    
    m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
    m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message.reactionMessage.text :
    m.mtype === "contactMessage" ? m.message.contactMessage.displayName :
    m.mtype === "contactsArrayMessage" ? m.message.contactsArrayMessage.contacts.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message.locationMessage.degreesLatitude}, ${m.message.locationMessage.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message.liveLocationMessage.degreesLatitude}, ${m.message.liveLocationMessage.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message.pollCreationMessage.name :
    m.mtype === "pollUpdateMessage" ? m.message.pollUpdateMessage.name :
    m.mtype === "groupInviteMessage" ? m.message.groupInviteMessage.groupJid :
    
  
    m.mtype === "viewOnceMessage" ? (m.message.viewOnceMessage.message.imageMessage?.caption || 
                                     m.message.viewOnceMessage.message.videoMessage?.caption || 
                                     "[Message d'affichage unique]") :
    m.mtype === "viewOnceMessageV2" ? (m.message.viewOnceMessageV2.message.imageMessage?.caption || 
                                       m.message.viewOnceMessageV2.message.videoMessage?.caption || 
                                       "[Message d'affichage unique]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message.viewOnceMessageV2Extension.message.imageMessage?.caption || 
                                                m.message.viewOnceMessageV2Extension.message.videoMessage?.caption || 
                                                "[Message d'affichage unique]") :

    
    m.mtype === "ephemeralMessage" ? (m.message.ephemeralMessage.message.conversation ||
                                      m.message.ephemeralMessage.message.extendedTextMessage?.text || 
                                      "[Message temporaire]") :

  
    m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :

  
    m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :

    ""
);
const budy = (typeof m.text == 'string' ? m.text: '')
const prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const owner = JSON.parse(fs.readFileSync('./system/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./system/premium.json'))
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const botNumber = await rich.decodeJid(rich.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDev = owner
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtext = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await rich.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupName = m.isGroup ? groupMetadata.subject : "";
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const mime = (quoted.msg || quoted).mimetype || ''
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

if (!rich.public) {
if (!isCreator) return
}

if (m.message) {
    console.log(chalk.hex('#3498db')(`message " ${m.message} "  from ${pushname} id ${m.isGroup ? `group ${groupMetadata.subject}` : 'chat privé'}`));
}

switch(command) {
case 'menu': {
let Menu = `*NATSU MD*
 ▢ Developer : Natsu tech
 ▢ Prefix : Multi prefix 

𝗢𝘄𝗻𝗲𝗿
 ▢ *Addown*
 ▢ *Delown*
 ▢ *Addprem*
 ▢ *Delprem*
 ▢ *Public*
 ▢ *Self*
 ▢ *Addcase*
 ▢ *Delcase*
 
 𝗚𝗿𝗼𝘂𝗽
 ▢ *Add*
 ▢ *Promote*
 ▢ *Demote*
 ▢ *Kick*
 ▢ *Kickall*
 ▢ *Delete*
 ▢ *Mute*
 ▢ *Unmute*
 ▢ *Admins*
 ▢ *Revoke*
 ▢ *Hidetag*
 ▢ *Linkgc*
 ▢ $`
rich.sendMessage(m.chat, {
  image: { url: global.gambar },
  caption: Menu,
  footer: "Natsu md développé par natsu tech",
  headerType: 4,
  hasMediaAttachment: true,
  contextInfo: {
    mentionedJid: [m.chat],
    participant: "m.sender",
    remoteJid: "status@broadcast",
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "@newsletter",
      serverMessageId: 1,
      newsletterName: "NATSU-MD"
    }
  }
}, { quoted: m });
}
break;

case 'addowner': case 'addown': {
    if (!isCreator) return m.reply("Owner only.");
    if (!args[0]) return m.reply(`Usage: ${command} 509xxx`);

    let number = qtext.replace(/[^0-9]/g, '');
    let checkNumber = await rich.onWhatsApp(number + "@s.whatsapp.net");
    if (!checkNumber.length) return m.reply("Numéro invalide!");

    owner.push(number);
    Premium.push(number);
    fs.writeFileSync('./function/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./function/premium.json', JSON.stringify(Premium));

    m.reply("Propriétaire ajouté avec succès.");
}
break;

case 'delowner': case 'delown': {
    if (!isCreator) return m.reply("Owner only.");
    if (!args[0]) return m.reply(`Utilise: ${command} 509xxx`);

    let number = qtext.replace(/[^0-9]/g, '');
    owner.splice(owner.indexOf(number), 1);
    Premium.splice(Premium.indexOf(number), 1);

    fs.writeFileSync('./function/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./function/premium.json', JSON.stringify(Premium));

    m.reply("Propriétaire supprimé avec succès.");
}
break;

  case 'add'
    if (!isGroup) return m.reply(m.group)
    if (!isAdmins) return m.reply(m.admin)
    if (!text) return m.reply('Ex: add 241xxxxxx')
    await rich.groupParticipantsUpdate(m.chat, [text + '@s.whatsapp.net'], 'add')
    m.reply('✅ Membre ajouté')
 
}
break;

  case 'mute'
    if (!isGroup) return m.reply(m.group)
    if (!isAdmins) return m.reply(m.admin)
    await rich.groupSettingUpdate(m.chat, 'announcement')
    m.reply('🔇 Groupe en mode silencieux')
    
}
break;

  case 'unmute'
    if (!isGroup) return m.reply(m.group)
    if (!isAdmins) return m.reply(m.admin)
    await rich.groupSettingUpdate(m.chat, 'not_announcement')
    m.reply('🔊 Groupe réouvert')
    
}
break;

   case 'admins'
    if (!isGroup) return m.reply(m.group)
    let adminList = groupMetadata.participants
        .filter(p => p.admin !== null)
        .map(a => `@${a.id.split('@')[0]}`)
        .join('\n')
    m.reply(`👑 *Admins du groupe:*\n\n${adminList}`)
   
}
break;

   case 'revoke'
    if (!isGroup) return m.reply(m.group)
    if (!isAdmins) return m.reply(m.admin)
    await rich.groupRevokeInvite(m.chat)
    m.reply('✅ Lien du groupe réinitialisé')
   
}

   case 'kick'
    if (!isGroup) return m.reply(m.group)
    if (!isAdmins) return m.reply(m.admin)
    if (!m.mentionedJid[0]) return m.reply('Mentionne un membre')
    await rich.groupParticipantsUpdate(m.chat, [m.mentionedJid[0]], 'remove')
    m.reply('👢 Membre expulsé')
   
}
break;

  case 'kickall'
    if (!isGroup) return m.reply(m.group)
    if (!isCreator) return m.reply('Seul le propriétaire peut utiliser cette commande.')
    for (let participant of participants) {
        if (participant.id !== sender && participant.admin !== 'admin') {
            await rich.groupParticipantsUpdate(m.chat, [participant.id], 'remove')
        }
    }
    m.reply('🚷 Tous les membres ont été expulsés.')
}     
break;

case 'addpremium': case 'addprem': {
    if (!isCreator) return m.reply("Owner only!");
    if (!args[0]) return m.reply(`Utilise: ${prefix + command} 509xxx`);

    let number = qtext.split("|")[0].replace(/[^0-9]/g, '');
    let ceknum = await rich.onWhatsApp(number + "@s.whatsapp.net");
    if (!ceknum.length) return m.reply("Numéro invalide!");

    Premium.push(number);
    fs.writeFileSync('./function/premium.json', JSON.stringify(Premium));

    m.reply("Succès! Utilisateur ajouté à Premium.");
}
break;

case 'delpremium': case 'delprem': {
    if (!isCreator) return m.reply("Owner only!");
    if (!args[0]) return m.reply(`Utilise: ${prefix + command} 241xxx`);

    let number = qtext.split("|")[0].replace(/[^0-9]/g, '');
    let indexPremium = Premium.indexOf(number);

    if (indexPremium !== -1) {
        Premium.splice(indexPremium, 1);
        fs.writeFileSync('./function/premium.json', JSON.stringify(Premium));
        m.reply("Succès! Utilisateur supprimé du compte premium.");
    } else {
        m.reply("L'utilisateur n'est pas dans la liste premium.");
    }
}
break;

  case 'hidetag'
            
       if (!isGroup) return m.reply(m.group);
      if (!isCreator && !isAdmins) return m.reply(m.owner);
                if (!m.quoted && !text) return m.reply(`*Envoyez la commande avec le texte: ${prefix + command} <Text>*`);	

                var teks = m.quoted ? m.quoted.text : text;
                var member = await groupMetadata.participants.map(e => e.id);

                rich.sendMessage(m.chat, { text: teks, mentions: [...member] });
                
}
break;

case 'del': case 'delete': {
if (!m.isGroup) {
if (!isOwner) return onlyOwn();
if (!m.quoted) return m.reply("Reply to the message you want to delete")
if (m.quoted.sender == botNumber) {
rich.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return onlyBotAdmin();
rich.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return onlyOwn();
if (!m.quoted) return m.reply("Reply to the message you want to delete")
rich.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break;

case 'linkgc': {
if (!m.isGroup) return onlyGrup()
if (!isBotAdmins) return onlyBotAdmin()
let responsee = await rich.groupInviteCode(m.chat)
rich.sendTeks(m.chat, `https://chat.whatsapp.com/${responsee}\n\nLink grup: ${groupMetadata.subject}`, m, { detectLink: true })
}
break;


case 'public': {
    if (!isCreator) return m.reply("Owner only.");
    rich.public = true;
    m.reply("NATSU-MD configuré en mode public.");
}
break;

case 'private': case 'self': {
    if (!isCreator) return m.reply("Owner only.");
    rich.public = false;
    m.reply("NATSU-MD configuré en mode privé.");
}
break;

default:
if (budy.startsWith('<')) {
if (!isCreator) return;
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return;
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (budy.startsWith('$')) {
if (!isCreator) return;
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
