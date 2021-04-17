/* KALO MAU AMBIL AMBIL AJA BANG
 * TAPI JANGAN HAPUS TQTO!!
 * 
 * THX TO
 * ARA
 * YEYENCANGTIP
 * ADULALHY
 * MEM TOT
*/

const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { randompict } = require('./lib/randompict')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahmeka.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./bahasa')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Yeyen Cangtip\n'
            + 'ORG: OwnerBot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6283186893249:+62 831-8689-3249\n' 
            + 'END:VCARD'
prefix = '.' 
blocked = []   
limitawal = 25
memberlimit = 1
cr = '*Yeyen Cangtip*' 
fakeimage = fs.readFileSync(`./src/logo.jpg`)
replitx = '*YEYEN CANGTIP*'
ari = '*YEYEN CANGTIP*'

/******** OWNER NUMBER**********/
const ownerNumber = ['6283186893249@s.whatsapp.net','6281390199407@s.whatsapp.net']   
const pacarNumber = ["6281390199407@s.whatsapp.net"]  
/************************************/

       
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/kelompok/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/pengguna/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/pengguna.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/kelompok/badword.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
}


        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
//---Metadata stiker
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Yeyen Cangtip'; if (!author) author = 'Bot Yeyen';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
/********** FUNCTION ***************/

const ara = new WAConnection()
   async function starts() {
	const ara = new WAConnection()
	ara.logger.level = 'warn'
	console.log(banner.string)
	ara.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./session.json') && ara.loadAuthInfo('./session.json')
	ara.on('connecting', () => {
		start('2', 'Connecting...')
	})
	ara.on('open', () => {
		success('2', 'Connected')
	})
	await ara.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(ara.base64EncodedAuthInfo(), null, '\t'))



ara.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await ara.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await ara.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Hallo* @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*\nJangan rese ya bor\nJangan lupa intro @${num.split('@')[0]} 🗣`
				let buff = await getBuffer(ppimg)
				ara.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await ara.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Satu beban telah hilang* \n@${num.split('@')[0]}\n*Semoga jasadmu baik baik saja dan di kenang orang yg berada disini🚮*`
				let buff = await getBuffer(ppimg)
				ara.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	ara.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	ara.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = ara.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = ara.contacts[sender] != undefined ? ara.contacts[sender].vname || ara.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await ara.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPacar = pacarNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				ara.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				ara.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? ara.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : ara.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    ara.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			ara.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    ara.sendMessage(from, audio, mp3, {quoted:mek})
		    }
	        /*****************END SCURITY FEATURE ********/
			
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Warrior III'
        } else if (levelRole <= 6) {
            role = 'Warrior II'
        } else if (levelRole <= 8) {
            role = 'Warrior I'
        } else if (levelRole <= 10) {
            role = 'Elite III'
        } else if (levelRole <= 12) {
            role = 'Elite II'
        } else if (levelRole <= 14) {
            role = 'Elite I'
        } else if (levelRole <= 16) {
            role = 'Master IV'
        } else if (levelRole <= 18) {
            role = 'Master III'
        } else if (levelRole <= 20) {
            role = 'Master II'
        } else if (levelRole <= 22) {
            role = 'Master I'
        } else if (levelRole <= 24) {
            role = 'Grand Master V'
        } else if (levelRole <= 26) {
            role = 'Grand Master IV'
        } else if (levelRole <= 28) {
            role = 'Grand Master III'
        } else if (levelRole <= 30) {
            role = 'Grand Master II'
        } else if (levelRole <= 32) {
            role = 'Grand Master I'
        } else if (levelRole <= 34) {
            role = 'Epic V'
        } else if (levelRole <= 36) {
            role = 'Epic IV'
        } else if (levelRole <= 38) {
            role = 'Epic III'
        } else if (levelRole <= 40) {
            role = 'Epic II'
        } else if (levelRole <= 42) {
            role = 'Epic 1'
        } else if (levelRole <= 44) {
            role = 'Legends V'
        } else if (levelRole <= 46) {
            role = 'L3gends IV'
        } else if (levelRole <= 48) {
            role = 'Legends III'
        } else if (levelRole <= 50) {
            role = 'Legends II'
        } else if (levelRole <= 52) {
            role = 'Legends I'
        } else if (levelRole <= 54) {
            role = 'Mythic X'
        } else if (levelRole <= 56) {
            role = 'Mythic IX'
        } else if (levelRole <= 58) {
            role = 'Mythic VIII'
        } else if (levelRole <= 60) {
            role = 'Mythic VII'
        } else if (levelRole <= 62) {
            role = 'Mythic VI'
        } else if (levelRole <= 64) {
            role = 'Mythic V'
        } else if (levelRole <= 66) {
            role = 'Mythic IV'
        } else if (levelRole <= 68) {
            role = 'Mythic III'
        } else if (levelRole <= 70) {
            role = 'Mythic II'
        } else if (levelRole <= 72) {
            role = 'Mythic I'
        } else if (levelRole <= 74) {
            role = 'Glorious Mythic V'
        } else if (levelRole <= 76) {
            role = 'Glorious Mythic IV'
        } else if (levelRole <= 78) {
            role = 'Glorious Mythic III'
        } else if (levelRole <= 80) {
            role = 'Glorious Mythic II'
        } else if (levelRole <= 82) {
            role = 'Glorious Mythic I'
        } else if (levelRole <= 84) {
            role = 'Mythical Glory V'
        } else if (levelRole <= 86) {
            role = 'Mythical Glory IV'
        } else if (levelRole <= 88) {
            role = 'Mythical Glory III'
        } else if (levelRole <= 90) {
            role = 'Mythical Glory II'
        } else if (levelRole <= 92) {
            role = 'Mythical Glory I'
        } else if (levelRole <= 94) {
            role = 'Tough Platinum V'
        } else if (levelRole <= 96) {
            role = 'Tough Platinum IV'
        } else if (levelRole <= 98) {
            role = 'Tough Platinum III'
        } else if (levelRole <= 100) {
            role = 'Tough Platinum II'
        } else if (levelRole <= 102) {
            role = 'Tough Platinum I'
        } else if (levelRole <= 104) {
            role = 'Diamond Star V'
        } else if (levelRole <= 106) {
            role = 'Diamond Star IV'
        } else if (levelRole <= 108) {
            role = 'Diamond Star III'
        } else if (levelRole <= 110) {
            role = 'Diamond Star II'
        } else if (levelRole <= 112) {
            role = 'Diamond Star I'
        } else if (levelRole <= 114) {
            role = 'Glory Crown V'
        } else if (levelRole <= 116) {
            role = 'Glory Crown IV'
        } else if (levelRole <= 118) {
            role = 'Glory Crown III'
        } else if (levelRole <= 120) {
            role = 'Glory Crown II'
        } else if (levelRole <= 122) {
            role = 'Glory Crown I'
        } else if (levelRole <= 124) {
            role = 'Super Ace V'
        } else if (levelRole <= 126) {
            role = 'Super Ace IV'
        } else if (levelRole <= 128) {
            role = 'Super Ace III'
        } else if (levelRole <= 130) {
            role = 'Super Ace II'
        } else if (levelRole <= 132) {
            role = 'Super Ace I'
        } else if (levelRole <= 134) {
            role = 'Conqueror V'
        } else if (levelRole <= 136) {
            role = 'Conqueror IV'
        } else if (levelRole <= 138) {
            role = 'Conqueror III'
        } else if (levelRole <= 140) {
            role = 'Conqueror II'
        } else if (levelRole <= 142) {
            role = 'Conqueror I'
        } else if (levelRole <= 144) {
            role = 'Emerald V'
        } else if (levelRole <= 146) {
            role = 'Emerald IV'
        } else if (levelRole <= 148) {
            role = 'Emerald III'
        } else if (levelRole <= 152) {
            role = 'Emerald II 忍'
        } else if (levelRole <= 154) {
            role = 'Emerald I 忍'
        } else if (levelRole <= 156) {
            role = 'Challangers 忍'
        } else if (levelRole <= 158) {
            role = 'Challangers 忍'
        } else if (levelRole <= 160) {
            role = 'Challangers 忍'
        } else if (levelRole <= 162) {
            role = 'Challangers 忍'
        } else if (levelRole <= 164) {
            role = 'Challangers 忍'
        } else if (levelRole <= 166) {
            role = 'Challangers 忍'
        } else if (levelRole <= 168) {
            role = 'Challangers 忍'
        } else if (levelRole <= 170) {
            role = 'Challangers 忍'
        } else if (levelRole <= 172) {
            role = 'Challangers 忍'
        } else if (levelRole <= 174) {
            role = 'Challangers 忍'
        } else if (levelRole <= 176) {
            role = 'Challangers 忍'
        } else if (levelRole <= 178) {
            role = 'Challangers 忍'
        } else if (levelRole <= 180) {
            role = 'Challangers 忍'
        } else if (levelRole <= 182) {
            role = 'Challangers 忍'
        } else if (levelRole <= 184) {
            role = 'Challangers 忍'
        } else if (levelRole <= 186) {
            role = 'Challangers 忍'
        } else if (levelRole <= 188) {
            role = 'Challangers 忍'
        } else if (levelRole <= 190) {
            role = 'Challangers 忍'
        } else if (levelRole <= 192) {
            role = 'Challangers 忍'
        } else if (levelRole <= 194) {
            role = 'Challangers 忍'
        } else if (levelRole <= 196) {
            role = 'Challangers 忍'
        } else if (levelRole <= 198) {
            role = 'Challangers 忍'
        } else if (levelRole <= 200) {
            role = 'Challangers 忍'
        } else if (levelRole <= 210) {
            role = 'Challangers 忍'
        } else if (levelRole <= 220) {
            role = 'Challangers 忍'
        } else if (levelRole <= 230) {
            role = 'Challangers 忍'
        } else if (levelRole <= 240) {
            role = 'Challangers 忍'
        } else if (levelRole <= 250) {
            role = 'Challangers 忍'
        } else if (levelRole <= 260) {
            role = 'Challangers 忍'
        } else if (levelRole <= 270) {
            role = 'Challangers 忍'
        } else if (levelRole <= 280) {
            role = 'Challangers 忍'
        } else if (levelRole <= 290) {
            role = 'Challangers 忍'
        } else if (levelRole <= 300) {
            role = 'Challangers 忍'
        } else if (levelRole <= 310) {
            role = 'Challangers 忍'
        } else if (levelRole <= 320) {
            role = 'Challangers 忍'
        } else if (levelRole <= 330) {
            role = 'Challangers 忍'
        } else if (levelRole <= 340) {
            role = 'Challangers 忍'
        } else if (levelRole <= 350) {
            role = 'Challangers 忍'
        } else if (levelRole <= 360) {
            role = 'Challangers 忍'
        } else if (levelRole <= 370) {
            role = 'Challangers 忍'
        } else if (levelRole <= 380) {
            role = 'Challangers 忍'
        } else if (levelRole <= 390) {
            role = 'Challangers 忍'
        } else if (levelRole <= 400) {
            role = 'Challangers 忍'
        } else if (levelRole <= 410) {
            role = 'Challangers 忍'
        } else if (levelRole <= 420) {
            role = 'Challangers 忍'
        } else if (levelRole <= 430) {
            role = 'Challangers 忍'
        } else if (levelRole <= 440) {
            role = 'Challangers 忍'
        } else if (levelRole <= 450) {
            role = 'Challangers 忍'
        } else if (levelRole <= 460) {
            role = 'Challangers 忍'
        } else if (levelRole <= 470) {
            role = 'Challangers 忍'
        } else if (levelRole <= 480) {
            role = 'Challangers 忍'
        } else if (levelRole <= 490) {
            role = 'Challangers 忍'
        } else if (levelRole <= 500) {
            role = 'Challangers 忍'
        } else if (levelRole <= 600) {
            role = 'Challangers 忍'
        } else if (levelRole <= 700) {
            role = 'Challangers 忍'
        } else if (levelRole <= 800) {
            role = 'Challangers 忍'
        } else if (levelRole <= 900) {
            role = 'Challangers 忍'
        } else if (levelRole <= 1000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 2000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 3000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 4000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 5000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 6000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 7000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 8000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 9000) {
            role = 'Challangers 忍'
        } else if (levelRole <= 10000) {
            role = 'King 忍'
           
           var prema = 'Free'
			if (!isAdmin) {
				prema = 'Adminban'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	}
			if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN TOT!!")
                        .then(() => ara.groupRemove(from, sender))
                        .then(() => {
                            ara.sendMessage(from, `*「 ANTI BADWORD 」*\nara akan kick kamu karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => ara.sendMessage(from, `Untung ara bukan admin, kalo admin udah ara kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min")
                }
            }
        }
			
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return ara.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            ara.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        ara.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    ara.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
      
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('Admin Grup Mah Bebass!!')
		ara.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi! ${sender.split("@")[0]} yahahaha ngemis member awkwkwwk`)
		setTimeout( () => {
			ara.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			ara.updatePresence(from, Presence.composing)
			reply("Bissmilah headshot!!")
		}, 0)
	}

             
			colors = ['red','white','black','blue','yellow','green']
			
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
		case 'daftar':
                	if (isRegistered) return  reply(ind.rediregis())
                	if (!q.includes('|')) return  reply(ind.wrongf())
                	const namaUser = q.substring(0, q.indexOf('|') - 0)
                	const umurUser = q.substring(q.lastIndexOf('|') + 1)
                	const serialUser = createSerial(20)
                	if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                	if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                	if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                	if (umurUser < 14) return reply(`your age is too young minimum 14 years`)
                	try {
					ppimg = await ara.getProfilePicture(`${sender.split('@')[0]}@c.us`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                	veri = sender
                	if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await ara.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                	} else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await ara.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                	}
				    break
		case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
        case 'help': 
		case 'menu':       
                    if (!isRegistered) return reply( ind.noregis())
				    costum('[❗] LOADING!', text, tescuk, ari)
				    if (isBanned) return reply('Kamu terbanned!')
					const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
                    ppimg = fs.readFileSync(`./src/logo.jpg`)
                    teks = `
┏━━► *「 YOUR INFO 」* 
┃
┣► Prefix : 「 ${prefix} 」
┣► Nama : ${pushname}
┣► Role : *${role}*
┣► Level : ${getLevelingLevel(sender)}
┗━━━━━━━━━━━►
┏━━► *「 INFO MENU 」* 
┣► *${prefix}info*
┣► *${prefix}snk*
┣► *${prefix}request*
┣► *${prefix}blocklist*
┣► *${prefix}owner*
┣► *${prefix}ping*
┣► *${prefix}buypremium*
┣► *${prefix}hargaprem*
┣► *${prefix}linkgc1*
┗━━━━━━━━━━━►
┏━━► *「 APK MENU 」* 
┣► *${prefix}apkpure*
┗━━━━━━━━━━━►
┏━━► *「 GAME MENU 」* 
┣► *${prefix}tebakgambar*
┗━━━━━━━━━━━►
┏━━► *「 MEDSOS MENU 」* 
┣► *${prefix}github*
┣► *${prefix}twitter*
┣► *${prefix}tiktokstalk*
┣► *${prefix}igstalk*
┗━━━━━━━━━━━►
┏━━► *「 GROUP MENU 」* 
┣► *${prefix}welcome [1/0]*
┣► *${prefix}nsfw [1/0]*
┣► *${prefix}leveling [1/0]*
┣► *${prefix}nobadword [1/0]*
┣► *${prefix}simih [1/0]*
┣► *${prefix}promote [@tag]*
┣► *${prefix}demote [@tag]*
┣► *${prefix}add [62]*
┣► *${prefix}kick [@tag]*
┣► *${prefix}group [open/close]*
┣► *${prefix}antilinkgc [1/0]*
┣► *${prefix}addbadword*
┣► *${prefix}listbadword*
┣► *${prefix}delbadword*
┣► *${prefix}tagall*
┣► *${prefix}hidetag*
┣► *${prefix}setname*
┣► *${prefix}setdesc*
┣► *${prefix}setpp*
┣► *${prefix}grouplist*
┣► *${prefix}listadmin*
┣► *${prefix}premiumlist*
┣► *${prefix}banlist*
┣► *${prefix}blocklist*
┣► *${prefix}linkgc*
┣► *${prefix}mining*
┣► *${prefix}maling*
┣► *${prefix}nguli*
┣► *${prefix}sedekah*
┣► *${prefix}level*
┗━━━━━━━━━━━►
┏━━► *「 OWNER MENU 」* 
┣► *${prefix}setprefix*
┣► *${prefix}setreply*
┣► *${prefix}setlimit*
┣► *${prefix}addlimit*
┣► *${prefix}giftlimit*
┣► *${prefix}premium*
┣► *${prefix}unpremium*
┣► *${prefix}admin*
┣► *${prefix}unadmin*
┣► *${prefix}ban*
┣► *${prefix}unban*
┣► *${prefix}block*
┣► *${prefix}unblock*
┣► *${prefix}leave*
┣► *${prefix}menu*
┣► *${prefix}bc*
┣► *${prefix}bcc*
┣► *${prefix}bcgc*
┣► *${prefix}clearall*
┣► *${prefix}wakillist*
┗━━━━━━━━━━━►
┏━━► *「 INFORMATION 」* 
┣► *${prefix}covidindo*
┣► *${prefix}infonomor*
┣► *${prefix}tribunews*
┣► *${prefix}foxnews*
┣► *${prefix}searchfilm*
┗━━━━━━━━━━━►
┏━━► *「 MAKER MENU 」* 
┣► *${prefix}attp*
┣► *${prefix}nulis*
┣► *${prefix}nulis2*
┣► *${prefix}darkneon*
┣► *${prefix}candlemug*
┣► *${prefix}lovemsg*
┣► *${prefix}mugflower*
┣► *${prefix}shadowtext*
┣► *${prefix}coffeecup*
┣► *${prefix}coffeecup2*
┣► *${prefix}underwater*
┣► *${prefix}hpotter*
┣► *${prefix}woodblock*
┣► *${prefix}narutobanner*
┣► *${prefix}romancetext*
┣► *${prefix}paperonglass*
┣► *${prefix}googletext*
┣► *${prefix}glitchtext*
┗━━━━━━━━━━━►
┏━━► *「 SERTIFIKAT MENU 」* 
┣► *${prefix}gay*
┣► *${prefix}haram*
┣► *${prefix}editod*
┣► *${prefix}hekerserti*
┣► *${prefix}ffserti*
┣► *${prefix}ffserti2*
┣► *${prefix}mlserti*
┣► *${prefix}pubgserti*
┗━━━━━━━━━━━►
┏━━► *「 FUN MENU 」* 
┣► *${prefix}gantengcek*
┣► *${prefix}cantikcek*
┣► *${prefix}sangecek*
┣► *${prefix}gaycek*
┣► *${prefix}lesbicek*
┣► *${prefix}watak*
┣► *${prefix}hobby*
┣► *${prefix}apakah*
┣► *${prefix}kapankah*
┣► *${prefix}bisakah*
┣► *${prefix}bagaimanakah*
┣► *${prefix}rate*
┣► *${prefix}fitnah*
┣► *${prefix}alay*
┣► *${prefix}fml*
┣► *${prefix}katacinta*
┣► *${prefix}pantun*
┣► *${prefix}hilih*
┣► *${prefix}hurufterbalik*
┣► *${prefix}simi*
┗━━━━━━━━━━━►
┏━━► *「 DOWNLOAD MENU 」* 
┣► *${prefix}ytmp3*
┣► *${prefix}ytmp4*
┣► *${prefix}play*
┣► *${prefix}joox*
┗━━━━━━━━━━━►
┏━━► *「 RANDOM IMAGE 」* 
┣► *${prefix}aesthetic*
┣► *${prefix}fotocewek*
┣► *${prefix}doraemon*
┣► *${prefix}cecan*
┣► *${prefix}cogan*
┣► *${prefix}pokemon*
┣► *${prefix}kucing*
┣► *${prefix}hamster*
┣► *${prefix}kelinci*
┣► *${prefix}freefireimg*
┣► *${prefix}ww2*
┣► *${prefix}shota*
┣► *${prefix}mobil*
┣► *${prefix}motor*
┗━━━━━━━━━━━►
┏━━► *「 MEDIA MENU 」* 
┣► *${prefix}brainly*
┣► *${prefix}pinterest*
┣► *${prefix}bitly*
┣► *${prefix}tinyurl*
┣► *${prefix}tts*
┣► *${prefix}ssweb*
┣► *${prefix}kbbi*
┣► *${prefix}sticker*
┣► *${prefix}lirik*
┣► *${prefix}memeindo*
┗━━━━━━━━━━━►
┏━━► *「 ANIME MENU 」* 
┣► *${prefix}animeboy*
┣► *${prefix}animegirl*
┣► *${prefix}animeimg*
┣► *${prefix}neko*
┣► *${prefix}loli*
┣► *${prefix}kusonime*
┗━━━━━━━━━━━►
┏━━► *「 QUOTES MENU 」* 
┣► *${prefix}quotesislami*
┣► *${prefix}quotesnasehat*
┣► *${prefix}quoteskehidupan*
┗━━━━━━━━━━━►
┏━━► *「 LIMIT MENU 」* 
┣► *${prefix}limit*
┣► *${prefix}buylimit*
┣► *${prefix}buypremiumlimit*
┣► *${prefix}transfer*
┣► *${prefix}leaderboard*
┗━━━━━━━━━━━►
┏━━► *「 OTHER 」*
┣► *${prefix}wame*
┣► *${prefix}ocr*
┣► *${prefix}kalkulator*
┣► *${prefix}toimg*
┣► *${prefix}resepmasakan*
┣► *${prefix}mutual*
┗━━━━━━━━━━━►

┏━━► *「 THANKS TO 」* 
┣► *Yeyen Cangtip*
┣► *Adul Alhy*
┣► *MEMEMBER GRUP MERESAHKAN TBOT*
┗━━━━━━━━━━━►

`
                        ara.sendMessage(from, ppimg, image, { quoted: mek, caption: teks })
                        break
  ////////////////////
 // CASE INFO MENU //
////////////////////

        case 'info':
                if (!isRegistered) return reply( ind.noregis())
            if (isBanned) return reply('```Lu kebanned kontol`')
				    costum('[❗] LOADING!', text, tescuk, ari)
                    me = ara.user
                    uptime = process.uptime()
                    teks = `◪ BOT INFO

► Name : ${ara.user.name}
► Nomor Bot : @${me.jid.split('@')[0]}
► Owner : Yeyen Cangtip
► Prefix : [ ${prefix} ]
► Total Block Contact : ${blocked.length}
► The bot is active on :
►  ${kyun(uptime)}
► Total User : ${_registered.length} User
► Total Chat : 9876
► Browser : ${ara.browserDescription[1]}
► Server : ${ara.browserDescription[0]}
► Version : ${ara.browserDescription[2]}
► Speed : ${process.uptime()}
► Device : ${ara.user.phone.device_manufacturer}
► Versi Whatsapp : ${ara.user.phone.wa_version}
 
   ║▌│█║▌│ █║▌│█│║▌║
   ║▌│█║▌│ █║▌│█│║▌║

`
                    buffer = await getBuffer(me.imgUrl)
                    ara.sendMessage(from, buffer, image, {
                    caption: teks, contextInfo: {
                    mentionedJid: [me.jid]}})
                    break
		case 'snk':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isBanned) return reply('Kamu terbanned!')
				    costum('[❗] LOADING!', text, tescuk, ari)
					me = ara.user
					uptime = process.uptime()
					teks = `_*SYARAT & KETENTUAN YEYEN BOT*_\n\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(me.imgUrl)
					ara.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break									
		case 'request':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isBanned) return reply('Kamu sudah terbenned!')
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return ara.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
					var options = {
					text: ress,
           			contextInfo: {mentionedJid: [nomor]},
                   	}
					ara.sendMessage('6283162951046@s.whatsapp.net', options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER YEYEN BOT, Requests palsu atau main² tidak akan ditanggapi.')
					break
		case 'blocklist': 
					teks = '*Daftar user block Yeyen Bot* :\n'
					for (let block of blocked) {
				    teks += `*☆➤* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					ara.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
         	case 'ping':
          	if (!isRegistered) return reply(ind.noregis())
	    	if (isBanned) return reply(ind.baned())
           	await ara.sendMessage(from, '*Pong!!!!*')
	      	break
		case 'buypremium':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isBanned) return reply('Kamu sudah terbenned!')
				    ara.sendMessage(from, 'Ingin membeli premium?\nHarap hubungi kami : wa.me/6283162951046',MessageType.text, { quoted: mek} )
					break
		case 'hargaprem':
		case 'hargapremium':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isBanned) return reply('Kamu sudah terbenned!')
					ara.sendMessage(from, 'Level 100 = Free 3 day (premium)\n10k = 30day (premium)',MessageType.text, { quoted: mek} )
					break
		case 'linkgc1':
					ara.sendMessage(from, 'Belom Di Setting',MessageType.text, { quoted: mek} )
					break
		case 'linkgc2':
					ara.sendMessage(from, 'Belom Di Setting',MessageType.text, { quoted: mek} )
					break

  ///////////////////
 // CASE APK MENU //
///////////////////

		case 'apkpure':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Kamu sudah terbenned!')
				    costum('[❗] LOADING!', text, tescuk, ari)
				    data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				    teks = '[☆]=================[☆]\n'
				    for (let i of data.result) {
					teks += `➤ *NAMA APK* : ${i.title}\n➤ *LINK* : ${i.url}\n➤ *RATING* : ${i.rating}\n[☆]=================[☆]\n`
					}
				    reply(teks.trim())
				    await limitAdd(sender)
				    break

  ////////////////////
 // CASE GAME MENU //
////////////////////

        case 'tebakgambar':  //Case by nayla
                    if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    anu = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    anu1 = await getBuffer(anu.result.soal_gbr)
                    anu2 = `► *JAWABAN* : ${anu.result.jawaban}`
                    setTimeout( () => {
                    ara.sendMessage(from, anu1, image,{caption: 'Jawab kak.... 60 detik cukup kan? cukup lah.. masa ga cukup? kalo gabisa mending pulang!', quoted: mek})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    ara.sendMessage(from, anu2, text,{quoted: mek})                   
                    }, 60000)                                                                          
				    await limitAdd(sender)
                    break                                                                                                                                           

  /////////////////////
 // CASE MEDOS MENU //
/////////////////////

        case 'github':  //Case by nayla
                    if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
				    costum('[❗] LOADING!', text, tescuk, ari)
                    anu = await fetchJson(`https://videfikri.com/api/github/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile_pic)                           
                    anu2 = `➤ *NAMA* : ${anu.result.username}\n`
                    anu2 += `➤ *ID* : ${anu.result.id}\n`
                    anu2 += `➤ *USER* : ${anu.result.fullname}\n`
                    anu2 += `➤ *COMPANY* : ${anu.result.company}\n`
                    anu2 += `➤ *BLOG* : ${anu.result.blog}\n`
                    anu2 += `➤ *LOCATION* : ${anu.result.location}\n`
                    anu2 += `➤ *EMAIL* : ${anu.result.email}\n`
                    anu2 += `➤ *HIRABLE* : ${anu.result.hireable}\n`
                    anu2 += `➤ *BIOGRAFI* : ${anu.result.biografi}\n`
                    anu2 += `➤ *PUBLIC1* : ${anu.result.public_repository}\n`
                    anu2 += `➤ *PUBLIC2* : ${anu.result.public_gists}\n`
                    anu2 += `➤ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➤ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➤ *JOIN* : ${anu.result.joined_on}\n`
                    anu2 += `➤ *UPDATE* : ${anu.result.last_updated}\n`
                    anu2 += `➤ *URL* : ${anu.result.profile_url}\n`
                    ara.sendMessage(from, anu1, image,{caption: anu2, quoted: mek})
				    await limitAdd(sender)
                    break
        case 'twitter':  //Case by nayla
                    if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
				    costum('[❗] LOADING!', text, tescuk, ari)
                    anu = await fetchJson(`https://videfikri.com/api/stalktwit/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile)
                    anu2 = `➤ *NAMA* : ${anu.result.full_name}\n`
                    anu2 += `➤ *USER* : ${anu.result.username}\n`
                    anu2 += `➤ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➤ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➤ *TWEETS* : ${anu.result.tweets}\n`
                    anu2 += `➤ *PUBLIC* : ${anu.result.verified}\n`
                    anu2 += `➤ *LIST* : ${anu.result.listed_count}\n`
                    anu2 += `➤ *FAVOURIT* : ${anu.result.favourites}\n`
                    anu2 += `➤ *JOIN* : ${anu.result.joined_on}\n`
				    await limitAdd(sender)
				    await limitAdd(sender)
                    ara.sendMessage(from, anu1, image,{caption: anu2, quoted:mek})
                    break
		case 'igstalk':
		            if (args.length < 1) return reply('MASUKKAN USERNAME') 
		            F = body.slice(10)
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return reply(ind.limitend(pusname))
			        if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    costum('[❗] LOADING!', text, tescuk, ari)
					asw = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${F}&apikey=apivinz`)
					buffer = await getBuffer(asw.profile_pic)
					hasil = `➤ *USERNAME* : ${asw.username}\n➤ *FULLNAME* : ${asw.fullname}\n➤ *FOLLOWERS* : ${asw.follower}\n➤ *FOLLOWING* : ${asw.following}\n➤ *VERIFIKASI* : ${asw.is_verified}\n➤ *BUSSINES* : ${asw.is_bussiness}\n➤ *PRIVATE* : ${asw.is_private}\n➤ *BIO* : ${asw.bio}\n➤ *SOURCE* :${asw.source}\n➤ *STATUS* : ${asw.status}`
					ara.sendMessage(from, buffer, image, {caption: hasil, quoted: mek})
					await limitAdd(sender)
					break
		case 'tiktokstalk':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    try {
					if (args.length < 1) return ara.sendMessage(from, '*Username mana kak?', text, {quoted: mek})
					let { user, stats } = await tiktod.getUserProfileInfo(args[0])
				    costum('[❗] LOADING!', text, tescuk, ari)
					teks = `*➤ID* : ${user.id}\n*➤Username* : ${user.uniqueId}\n*➤Nickname* : ${user.nickname}\n*➤Followers* : ${stats.followerCount}\n*➤Followings* : ${stats.followingCount}\n*➤Posts* : ${stats.videoCount}\n*➤Luv* : ${stats.heart}\n`
					buffer = await getBuffer(user.avatarLarger)
					ara.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('*(ERROR)* *Kemungkinan username tidak valid*')
					}
					await limitAdd(sender)
                    break

  //////////////////////
 // CASE INFORMATION //
//////////////////////

		case 'covidindo': 
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Kamu sudah terbenned!')
				    costum('[❗] LOADING!', text, tescuk, ari)
					data = await fetchJson(`https://videfikri.com/api/covidindo/`)
					hasil = `➤ *NEGARA* : ${data.result.country}\n➤ *POSITIF* : ${data.result.positif}\n➤ *SEMBUH* : ${data.result.sembuh}\n➤ *MENINGGAL* : ${data.result.meninggal}\n➤ *DIRAWAT* : ${data.result.dalam_perawatan}`
					reply(hasil)
					await limitAdd(sender)
					break		
		case 'infonomor':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Kamu sudah terbenned!')
					if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
				    costum('[❗] LOADING!', text, tescuk, ari)
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
					if (data.error) return reply(data.error)
					if (data.result) return reply(data.result)
					hasil = `➤ *INTERNATIONAL* : ${data.international}\n➤ *NOMOR* : ${data.nomor}\n➤ *OPERATOR* : ${data.op}`
					reply(hasil)
					await limitAdd(sender)
					break 
        case 'tribunews':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Kamu sudah terbenned!')
				    costum('[❗] LOADING!', text, tescuk, ari)
					ara.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '[☆]=================[☆]\n'
					for (let i of data.result) {
					teks += `➤ *JUDUL* : ${i.title}\n➤ *TIME* : ${i.time}\n➤ *LINK* : ${i.url}\n➤ *KETERANGAN* : ${i.ket}\n[☆]=================[☆]\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
        case 'foxnews': 
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Kamu sudah terbenned!')
				    costum('[❗] LOADING!', text, tescuk, ari)
					ara.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '[☆]=================[☆]\n'
					for (let i of data.result) {
					teks += `➤ *JUDUL* : ${i.title}\n➤ *LINK* : ${i.url}\n➤ *COUNTRY* : ${i.country}\n➤ *CONTENT* : ${i.content}\n➤ *TIME* : ${i.time}\n[☆]=================[☆]\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
        case 'searchfilm':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Kamu sudah terbenned!')
				    costum('[❗] LOADING!', text, tescuk, ari)
                    pshh = `${body.slice(12)}`
                    anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${pshh}&apikey=apivinz`, {method: 'get'})
                    puree = '[☆]======================[☆]\n'
                    for (let plyll of anu.result){
                    puree += `➤ *JUDUL* : ${plyll.title}\n➤ *LINK* ${plyll.url}\n[☆]=====================[☆]\n`
                    }
                    reply(puree.trim())
					await limitAdd(sender)
                    break

  /////////////////////
 // CASE GROUP MENU //
/////////////////////

		case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(`Masukkan parameter!! \n${prefix}welcome 1 untuk mengaktifkan \n${prefix}welcome 0 untuk menonaktifkan`)
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('*Fitur welcome sudah aktif!!')
					welkom.push(from)
					fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
					reply('《 *SUCCSESS* 》 \nMengaktifkan fitur welcome di group ini')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
					fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan fitur welcome di group ini')
					} else {
					reply(ind.satukos())
					}
					break
		case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(`Masukkan parameter!! \n${prefix}nsfw 1 untuk mengaktifkan \n${prefix}nsfw 0 untuk menonaktifkan`)
					if (Number(args[0]) === 1) {
					if (isNsfw) return reply('*Fitur nsfw sudah aktif!!*')
					nsfw.push(from)
					fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
					reply('《 *SUCCSESS* 》 \nMengaktifkan mode nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0) {
					nsfw.splice(from, 1)
					fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan mode nsfw di group ini ✔️')
					} else {
					reply(ind.satukos())
					}
					break
		case 'leveling':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(`Masukkan parameter!! \n${prefix}leveling 1 untuk mengaktifkan \n${prefix}leveling 0 untuk menonaktifkan`)
					if (args[0] === '1') {
					if (isLevelingOn) return reply('*Fitur level sudah aktif!!*')
					_leveling.push(from)
					fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
					reply('《 *SUCCSESS* 》 \nMengaktifkan mode Leveling di group ini ✔️')
					} else if (args[0] === '0') {
					_leveling.splice(from, 1)
					fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan mode leveling di group ini ✔️')
					} else {
					reply(ind.satukos())
					}
					break
        case 'nobadword': 
                    if (!isGroup) return reply(ind.groupo())
                    if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(`Masukkan parameter!! \n${prefix}nobadword 1 untuk mengaktifkan \n${prefix}nobadword 0 untuk menonaktifkan`)
                    if (args[0] === '1') {
                    if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                 	badword.push(from)
                 	fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan nobadword di group ini ✔️')
              	    } else if (args[0] === '0') {
                    badword.splice(from, 1)
                    fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan nobadword di group ini ✔️')
             	    } else {
                    reply(ind.satukos())
                	}
                    break
        case 'listbadword': 
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
        case 'addbadword': 
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword ngentod`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
        case 'delbadword': 
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword ngentod`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
		case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(`Masukkan parameter!! \n${prefix}nobadword 1 untuk mengaktifkan \n${prefix}nobadword 0 untuk menonaktifkan`)
					if (Number(args[0]) === 1) {
					if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
					samih.push(from)
					fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan mode simih di group ini ✔️')
					} else if (Number(args[0]) === 0) {
					samih.splice(from, 1)
					fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan mode simih di group ini ✔️')
					} else {
					reply(ind.satukos())
					}
					break
        case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag member yang ingin di jadikan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*Selamat* 🥳 *Anda sekarang menjadi admin group* 🎉 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					ara.groupMakeAdmin(from, mentioned)
					} else {
					mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda menjadi admin group* 🎉`, mentioned, true)
					ara.groupMakeAdmin(from, mentioned)
					}
					break
        case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag admin yang ingin di turunkan menjadi member group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*Perintah dikonfirmasi, menurunkan jadi member group* :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					ara.groupDemoteAdmin(from, mentioned)
					} else {
					mentions(`*Perintah dikonfirmasi, menurunkan* @${mentioned[0].split('@')[0]} *jadi member group*`, mentioned, true)
					ara.groupDemoteAdmin(from, mentioned)
					}
					break
		case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `*•➤* @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
		case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin in group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `*➤* [${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
        case 'premiumlist':
				    ara.updatePresence(from, Presence.composing) 
                    if (!isRegistered) return reply( ind.noregis())    
				    teks = 'This is list of premium number :\n'
				    for (let premm of prem) {
					teks += `•➤ @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				    ara.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
				    break
        case 'banlist':
				    ara.updatePresence(from, Presence.composing) 
                    if (!isRegistered) return reply( ind.noregis())    
				    teks = 'This is list of banned number :\n'
				    for (let benn of ban) {
					teks += `•➤ @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				    ara.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				    break
		case 'blocklist': 
					teks = '*This is list of blocked number* :\n'
					for (let block of blocked) {
					teks += `•➤ @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					ara.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
        case 'linkgc':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await ara.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
		case 'mining':
		case 'maling':
		case 'nguli':
		case 'sedekah':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 10000)
					addLevelingXp(sender, one)
					await reply(`Yeyen BOT kasih kamu hadiah, Yeyen BOT akan berikan sebanyak *${one}Xp* untuk kamu`)
        		    }else{
					const mining = Math.ceil(Math.random() * 10000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp* dari Yeyen Bot`)
					}
					await limitAdd(sender)
					break
        case 'hidetag':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await ara.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					ara.sendMessage(from, options, text)
					await limitAdd(sender)
					break
		case 'grouplist':
                    if (!isRegistered) return reply( ind.noregis())
					ara.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group Yeyen BOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
					no += 1
					teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					ara.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
		case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add setan?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					ara.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin Yeyen BOT kick*!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*Asik Yeyen BOT bisa kick, lu gua kick* !! :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					ara.groupRemove(from, mentioned)
					} else {
					mentions(`*Asek jatah kick, otw kick* @${mentioned[0].split('@')[0]} !!`, mentioned, true)
					ara.groupRemove(from, mentioned)
					}
					break
       case 'setname':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					ara.groupUpdateSubject(from, `${body.slice(9)}`)
					ara.sendMessage(from, '*Succes*, Ganti Nama Grup', text, {quoted: mek})
					break
       case 'setdesc':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					ara.groupUpdateDescription(from, `${body.slice(9)}`)
					ara.sendMessage(from, '*Succes*, Ganti Deskripsi Grup', text, {quoted: mek})
					break
 		case 'setpp': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   	if (!isBotGroupAdmins) return reply(ind.badmin())
					media = await ara.downloadAndSaveMediaMessage(mek)
					await ara.updateProfilePicture (from, media)
					reply('*Succes* mengganti icon group')
					break				
		case 'grup':
		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'open') {
					reply(`*SUCCES GROUP OPEN*`)
					ara.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
				    reply(`*SUCCES GROUP CLOSE*`)
				    ara.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
        case 'antilinkgrup':
        case 'antilinkgc':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply(`Masukkan parameter!! \n${prefix}antilinkgc 1 untuk mengaktifkan \n${prefix}antilinkgc 0 untuk menonaktifkan`)
					if (Number(args[0]) === 1) {
					if (!isAntilink) return reply('UDAH NYALA KAK')
					antilink.push(from)
					fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
					reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP')
					ara.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
					if (!isAntilink) return reply('EMANG AKTIF?')
					var ini = antilink.botLangsexOf(from)
					antilink.splice(ini, 1)
					fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
					reply('SUKSES MEMATIKAN ANTI LINK DI GROUP')
					} else {
					reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
		case 'level':
                    if (!isRegistered) return reply( ind.noregis())
					if (!isLevelingOn) return reply(ind.lvlnoon())
					if (!isGroup) return reply(ind.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *LEVEL*\n  ├─➤ *Name* : ${pushname}\n  ├─➤ *Nomor* : ${sender.split("@")[0]}\n  ├─➤ *User XP* : ${userXp}/${requiredXp}\n  └─➤ *User Level* : ${userLevel}\n`
					ara.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break

  /////////////////////
 // CASE OWNER MENU //
/////////////////////

		case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
					ara.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'setlimit':
		case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'giftlimit': 
                    if (!isRegistered) return reply( ind.noregis())
					if (!isOwner) return reply(ind.ownerb())
				    const nomerr = args[0].replace('@','')
                    const jmla = args[1]
                    if (jmla <= 1) return reply(`Minimal gift limit adalah 1`)
                	if (isNaN(jmla)) return reply(`Lmit harus berupa angka`)
                	if (!nomerr) return reply(`Maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6283833847406 20`)
                	const cysz = nomerr + '@s.whatsapp.net'
                	var found = false
                    Object.keys(_limit).forEach((i) => {
                    if(_limit[i].id === cysz){
                    found = i
                    }
                    })
                    if (found !== false) {
                    _limit[found].limit -= jmla
                    const updated = _limit[found]
                    const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
					*「 GIFT KUOTA LIMIT 」*
					• User : @${updated.id.replace('@s.whatsapp.net','')}
					• Limit: ${limitawal-updated.limit}`
                    console.log(_limit[found])
                    fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                    reply(result)
                    } else {
                    reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                    }
               		break
		case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					ara.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
				    costum('[❗] LOADING!', text, tescuk, ari)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ara.downloadAndSaveMediaMessage(enmedia)
					await ara.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
        case 'premium':
				    if (!isOwner) return reply(ind.ownerb())
				    premm = body.slice(9)
				    prem.push(`${premm}@s.whatsapp.net`)
				    fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				    reply(`Berhasil menjadi premium wa.me/${premm} `)
				    break
		case 'unpremium':
				    if (!isOwner) return reply(ind.ownerb())
				    premm = body.slice(11)
				    prem.splice(`${premm}@s.whatsapp.net`, 1)
				    fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				    reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				    break
        case 'owner':
        case 'creator':
        case 'developer':
                    ara.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                    ara.sendMessage(from, 'Tuh nomer owner Yeyen BOT, jangan lupa di save',MessageType.text, { quoted: mek} )
					break    
        case 'admin':
				    if (!isOwner) return reply(ind.ownerb())
				    admm = body.slice(7)
			        adm.push(`${admm}@s.whatsapp.net`)
				    fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				    reply(`Berhasil menambahkan admin Yeyen BOT wa.me/${admm} `)
				    break
        case 'unadmin':
		            if (!isOwner) return reply(ind.ownerb())
				    admm = body.slice(9)
				    admin.push(`${adm}@s.whatsapp.net`)
			     	fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				    reply(`Berhasil menambahkan admin Yeyen BOT wa.me/${adm} `)
			     	break
        case 'ban':
				    bnnd = body.slice(4)
				    ban.push(`${bnnd}@s.whatsapp.net`)
				    fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				    reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				    break
		case 'unban':
			        bnnd = body.slice(6)
				    ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				    fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				    reply(`Nomor wa.me/${bnnd} telah di unban!`)
				    break
		case 'block':
				    ara.updatePresence(from, Presence.composing) 
				    ara.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					ara.blockUser (`${body.slice(7)}@c.us`, "add")
					ara.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    ara.blockUser (`${body.slice(9)}@c.us`, "remove")
					ara.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'leave':
                    if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					ara.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					ara.updatePresence(from, Presence.composing) 
					ara.sendMessage(from, '*Njir, ari ngentod!*', text)
					}, 0)
					break
        case 'event':
					if (!isOwner) return reply(ind.ownerb())
					if (!isGroup) return reply(ind.groupo()) 
					if (args.length < 1) return reply(`Masukkan parameter!! \n${prefix}event 1 untuk mengaktifkan \n${prefix}event 0 untuk menonaktifkan`)
					if (Number(args[0]) === 1) {
				    if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
					event.push(from)
					fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
					reply('《 *SUCCSESS* 》 \nMengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
					event.splice(from, 1)
					fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
					reply('《 *SUCCSESS* 》 \nMenonaktifkan fitur event di group ini')
					} else {
					reply(ind.satukos())
					}
					break
		case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await ara.chats.all()
					if (isMedia && !ara.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				    buff = await mek.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					mek.sendMessage(_.jid, buff, image, {caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
					}
					reply('*Suksess broadcast* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `*「 BROADCAST YEYEN BOT 」*\n\n${body.slice(4)}`)
					}
					reply('*Suksess broadcast* ')
					}
					break
		case 'bcc': 
				    if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('.......')
					anu = await ara.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					buff = await ara.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					ara.sendMessage(_.jid, buff, image, {caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
					}
						reply('*Suksess broadcast* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `*「 BROADCAST YEYEN BOT」*\n\n${body.slice(4)}`)
					}
					reply('*Suksess broadcast* ')
					}
					break
		case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
				    pp = await ara.getProfilePicture(id)
					buffer = await getBuffer(pp)
					ara.updateProfilePicture(botNumber, buffer)
					mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
					reply(ind.stikga())
					}
					await limitAdd(sender)
					break
		case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await ara.chats.all()
					ara.setMaxListeners(25)
					for (let _ of anu) {
					ara.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
		case 'bcgc':
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers 
					tagss = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					buffer = await mek.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					mek.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
				    }
					reply('')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `*「 BROADCAST GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
					}
					reply('Sukses broadcast group')
					}
					break 
          case 'wakillist':
				neko.updatePresence(from, Presence.composing) 
                if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of admin bot number :\n'
				for (let admm of adm) {
				teks += `~> @${admm.split('@')[0]}\n`
				}
				teks += `Total : ${admm.length}`
				ara.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": adm}})
				break

  ////////////////
 // MAKER MENU //
////////////////

		case 'attp':
				    if (args.length < 1) return reply(`_Teksnya Mana kak_\n*Contoh ${prefix}attp Yeyen chans*`)
				    costum('[❗] LOADING!', text, tescuk, ari)
				    attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				    ara.sendMessage(from, attp2, sticker, {quoted: mek})
					await limitAdd(sender)
			    	break
		case 'nulis':
				 				
                    if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    if (args.length < 1) return reply(ind.wrongf())
				    ct = body.slice(6)
				    costum('[❗] LOADING!', text, tescuk, ari)
				    ct = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${ct}&apikey=apivinz`)
				    ara.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				    await limitAdd(sender)
				    break
		case 'nulis2':
	                if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    if (args.length < 1) return reply(ind.wrongf())
				    ct = body.slice(7)
				    ll1 = ct.split("/")[0];
                    ll2 = ct.split("/")[1];
                    ll3 = ct.split("/")[2];
                    ll4 = ct.split("/")[3];
				    costum('[❗] LOADING!', text, tescuk, ari)
				    ct = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${ll1}&kelas=${ll2}&text=${ll3}&tinta=${ll4}`)
				    ara.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
			        await limitAdd(sender)
			     	break
		case 'tahta':
                    if (isBanned) return reply('Maaf Kamu Sudah Terbanned astagfirullah') 
                    if (args.length == 0) return reply(`Usage: ${prefix} + command} text\nExample: ${prefix + command} Yeyen`) 
                    teks = args.join(" ") 
				    costum('[❗] LOADING!', text, tescuk, ari)
                    buffer = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${teks}&apikey=apivinz`) 
                    ara.sendMessage(from, buffer, image, {caption: '_Nik kak udah jadi..._*', quoted: mek})
			        await limitAdd(sender)
                    break
		case 'darkneon':
        case 'candlemug':
        case 'lovemsg':
        case 'mugflower':
        case 'narutobanner':
        case 'paperonglass':
        case 'romancetext':
        case 'shadowtext':
        case 'coffeecup':
        case 'coffeecup2':
        case 'glowingneon':
        case 'underwater':
        case 'hpotter':
        case 'woodblock':
                    if (!isRegistered) return reply( ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
	                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Yeyen`)
                    txt = args.join(" ")
				    costum('[❗] LOADING!', text, tescuk, ari)
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${txt}`)
                    ara.sendMessage(from, buffer, image, {caption: '_Nik kak udah jadi..._*', quoted: mek})
			        await limitAdd(sender)
                    break
		case 'googletext':              	
					var gh = body.slice(12)
					var asw = gh.split("/")[0];
					var ganz = gh.split("/")[1];
					var abiez = gh.split("/")[2];
					if (args.length < 1) return reply(`Masukkan kata \nContoh : ${prefix}googletext Yeyen/cans/abiezz`)
				    costum('[❗] LOADING!', text, tescuk, ari)
					ari = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${asw}&text2=${ganz}&text3=${abiez}`)
					ara.sendMessage(from, asw, image, {quoted: mek})
					await limitAdd(sender)
				    break
        case 'glitchtext':					
					var gh = body.slice(12)
					var gli = gh.split("/")[0];
					var tch = gh.split("/")[1];
					if (args.length < 1) return reply(`Masukkan kata \nContoh : ${prefix}glitchtext Yeyen/Cans`)
				    costum('[❗] LOADING!', text, tescuk, ari)
					buffer = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${gli}&text2=${tch}&apikey=apivinz`)
					ara.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)

  //////////////////////////
 // CASE SERTIFIKAT MENU //
//////////////////////////

	    case 'haram':
                    if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
                    teks = args.join(" ")
				    costum('[❗] LOADING!', text, tescuk, ari)
                    buffer = await getBuffer(`http://rzky.net/docs/api/AnakHaramSerti/img.php?nama=${teks}`) 
                    ara.sendMessage(from, buffer, image, {caption: '_Nik kak udah jadi..._*', quoted: mek})
			        await limitAdd(sender)
                    break
        case 'gay':
                    if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
				    costum('[❗] LOADING!', text, tescuk, ari)
                    buffer = await getBuffer(`http://onlydevcity.xyz/GaySerti/img.php?nama=${args[0]}`) 
                    ara.sendMessage(from, buffer, image, {caption: '_Nik kak udah jadi..._*', quoted: mek})
			        await limitAdd(sender)
                    break
        case 'editod':
                    if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
                    teks = args.join(" ") 
				    costum('[❗] LOADING!', text, tescuk, ari)
                    buffer = await getBuffer(`http://rzky.net/docs/api/EditorBerkelasSerti/img.php?nama=${teks}`) 
                    ara.sendMessage(from, buffer, image, {caption: '_Nik kak udah jadi..._*', quoted: mek})
			        await limitAdd(sender)
                    break
        case 'hekerserti':
                    if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
                    teks = args.join(" ") 
				    costum('[❗] LOADING!', text, tescuk, ari)
                    buffer = await getBuffer(`http://rzky.net/docs/api/HekerSerti/img.php?nama=${teks}`) 
                    ara.sendMessage(from, buffer, image, {caption: '_Nik kak udah jadi..._*', quoted: mek})
			        await limitAdd(sender)
                    break
        case 'ffserti':
                    if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
                    teks = args.join(" ") 
				    costum('[❗] LOADING!', text, tescuk, ari)
                    buffer = await getBuffer(`http://rzky.net/docs/api/FFSerti/img.php?nama=${teks}`) 
                    ara.sendMessage(from, buffer, image, {caption: '_Nik kak udah jadi..._*', quoted: mek})
			        await limitAdd(sender)
                    break
        case 'ffserti2':
                    if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
                    teks = args.join(" ") 
				    costum('[❗] LOADING!', text, tescuk, ari)
                    buffer = await getBuffer(`http://rzky.net/docs/api/FFSerti4/img.php?nama=${teks}`) 
                    ara.sendMessage(from, buffer, image, {caption: '_Nik kak udah jadi..._*', quoted: mek})
			        await limitAdd(sender)
                    break
        case 'mlserti':
                    if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
                    teks = args.join(" ") 
				    costum('[❗] LOADING!', text, tescuk, ari)
                    buffer = await getBuffer(`http://rzky.net/docs/api/MLTourSerti2/img.php?nama=${teks}`) 
                    ara.sendMessage(from, buffer, image, {caption: '_Nik kak udah jadi..._*', quoted: mek})
			        await limitAdd(sender)
                    break
        case 'pubgserti':
                    if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
                    teks = args.join(" ") 
				    costum('[❗] LOADING!', text, tescuk, ari)
                    buffer = await getBuffer(`http://rzky.net/docs/api/PubgTourSerti3/img.php?nama=${teks}`) 
                    ara.sendMessage(from, buffer, image, {caption: '_Nik kak udah jadi..._*', quoted: mek})
			        await limitAdd(sender)
                    break

  ///////////////////
 // CASE FUN MENU //
///////////////////

        case 'gantengcek':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					ara.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'cantikcek':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					ara.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
        case 'sangecek':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					ara.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
        case 'gaycek':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					ara.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
        case 'lesbicek':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					ara.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'watak':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					ara.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
			        break
		case 'hobby':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					ara.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'bisakah':
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					ara.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kapankah':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					ara.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'apakah':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					ara.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'bagaimanakah':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					ara.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'rate':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					ara.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
        case 'fitnah':
			     	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	            	if (!isGroup) return reply(ind.groupo())                 
		    		if (args.length < 1) return reply(`Masukkan teks \nContoh : ${prefix}fitnah @tagmember&hallo&hallo juga`)
		    		var gh = body.slice(8)
			    	mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					ara.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					await limitAdd(sender) 
					break		
		case 'alay':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
			    	if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Kak kasih teks lah...')
					data = await fetchJson(`https://api.zeks.xyz/api/alaymaker?kata=${body.slice(6)}&apikey=apivinz`)
					reply(data.result)
				    await limitAdd(sender)
					break
		case 'fml':	
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
			    	if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/randomfmylife?apikey=BotWeA`)
					hasil = data.result
					reply(hasil)
					await limitAdd(sender)
					break	
		case 'katacinta':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
			    	if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'pantun':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(anu.result.pantun)
					await limitAdd(sender)
					break
        case 'hilih':
                    if (args.length < 1) return reply('Kak masukin teks lah....') 
                    anu = await fetchJson(`https://videfikri.com/api/hilih/?query=${body.slice(7)}`)
                    anu1 = `${anu.result.kata}`
                    ara.sendMessage(from, anu1, text, {quoted: mek})
		case 'hurufterbalik': 
                    if (args.length < 1) return reply('Kak masukin teks lah....') 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isRegistered) return reply( ind.noregis())
					gatauda = body.slice(14)
					anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${gatauda}`, {method: 'get'})
					reply(anu.result.kata)
					await limitAdd(sender)
					break
        case 'sim': 
        case 'simsimi':
        case 'simi':
                    if (args.length < 1) return reply('Kak masukin teks lah....')
                    anu = await fetchJson(`https://videfikri.com/api/simsimi?teks=${body.slice(9)}`)
                    anu1 = `${anu.result.pesan}`
                    ara.sendMessage(from, anu1, text, {quoted: mek})
                    break
                    
  ////////////////////////
 // CASE DOWNLOAD MENU //
////////////////////////

        case 'ytmp31':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
	                if (args.length < 1) return reply('Kak masukin url/link yt lah...') 
				    costum('[❗] LOADING!', text, tescuk, ari)
					anu = await fetchJson(`https://videfikri.com/api/ytmp3/?url=${args[0]}`, {method: 'get'})
					anu1 = await getBuffer(anu.result.thumbnail)
					anu2 = `➤ *JUDUL* : ${anu.result.judul}\n`
					anu2 += `➤ *SIZE* : ${anu.result.size}\n`
					anu2 += `➤ *ID* : ${anu.result.id}\n`
					anu2 += `➤ *URL* : ${anu.result.url}\n`
					anu2 += `➤ *TYPE* : ${anu.result.extension}\n`
					anu2 += `➤ *LINK* : ${anu.result.source}\n`
					anu2 += `➤ *SOUND SEDANG DIKIRIM*\n`
					ara.sendMessage(from, anu1, image, {caption: anu2, quoted: mek})					
					anu3 = await getBuffer(anu.result.url)
					ara.sendMessage(from, anu3, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: mek})
					break 
case 'ytmp3':
if (isLimit(sender)) return reply(ind.limitend(pusname))
	                if (args.length < 1) return reply('Kak masukin url/link yt lah...') 
				    costum('[❗] LOADING!', text, tescuk, ari)
anu = await fetchJson(`https://fzn-gaz.herokuapp.com/api/ytdlmp3?url=${args[0]}`, {method: 'get'})
					anu1 = await getBuffer(anu.image)
					anu2 = `➤ *JUDUL* : ${anu.title}\n`
					anu2 += `➤ *SIZE* : ${anu.size}\n`
					anu2 += `➤ *STATUS* : ${anu.status}\n`
					anu2 += `➤ *SOUND SEDANG DIKIRIM*\n`
					client.sendMessage(from, anu1, image, {caption: anu2, quoted: mek})					
					anu3 = await getBuffer(anu.result)
					ara.sendMessage(from, anu3, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
        case 'ytmp4':
                    if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('```Lu kebanned kontol```')
                    if (args.length < 1) return reply('Kak masukin url/link yt lah...')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
				    costum('[❗] LOADING!', text, tescuk, ari)
					anu = await fetchJson(`https://videfikri.com/api/ytmp4/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.imgUrl)
                    anu2 = `➤ *JUDUL* : ${anu.result.judul}\n`
                    anu2 += `➤ *ID* : ${anu.result.id}\n`
                    anu2 += `➤ *LINK* : ${anu.result.source}\n`
                    anu2 += `➤ *URL* : ${anu.result.urlVideo}\n`
                    anu2 += `➤ *[❗] VIDEO SEDANG DIKIRIM*\n`
                    ara.sendMessage(from, anu1, image, {caption: anu2, quoted: mek})
                    anu3 = await getBuffer(anu.result.urlVideo)
                    ara.sendMessage(from, anu3, video, {mimetype: 'video/mp4', quoted: mek})
                    break 
		case 'play':   
                    if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length < 1) return reply('Kak masukin judul lagu lah...')
				    costum('[❗] LOADING!', text, tescuk, ari)
				    play = body.slice(5)
				    anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				    if (anu.error) return reply('❌ *ERROR* ❌')
			     	infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				    buffer = await getBuffer(anu.result.thumbnail)
				    ara.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				    lagu = await getBuffer(anu.result.url_audio)
				    ara.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				    await limitAdd(sender)
				    break
          case 'joox':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))				
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
 				    infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
			        buffer = await getBuffer(data.result.thumb)
				    lagu = await getBuffer(data.result.mp3)
				    ara.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
			     	ara.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
				    await limitAdd(sender)
                    break

  ///////////////////////
 // CASE RANDOM IMAGE //
///////////////////////

		case 'aesthetic':
				gatauda = body.slice(9)
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('[❗] LOADING!', text, tescuk, ari)
				anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result.result)
				ara.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kak aestheticnya...'})
				await limitAdd(sender)
				break
        case 'fotocewek':
                if (!isRegistered) return reply( ind.noregis())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('[❗] LOADING!', text, tescuk, ari)
	            const cangti = ['https://i.ibb.co/1T1DCz7/cewek-thailand-20200325-007-non-fotografer-kly.jpg','https://i.ibb.co/FsJ6jjs/kucing2.jpg','https://i.ibb.co/vvkdS7n/kucing3.jpg','https://i.ibb.co/1QHWxts/kucing4.jpg','https://i.ibb.co/JQmRz4n/kucing5.jpg','https://i.ibb.co/tBwrFkG/kucing6.jpg','https://i.ibb.co/dp0YhYm/kucing7.jpg','https://i.ibb.co/R03smZT/kucing8.jpg','https://i.ibb.co/17tw0dp/kucing9.jpg','https://i.ibb.co/7XdGGqc/kucing10.jpg','https://i.ibb.co/XL9PZxg/kucing11.jpg','https://i.ibb.co/gyjvXWN/kucing12.jpg','https://i.ibb.co/R4gg4wH/kucing13.jpg','https://i.ibb.co/PmLYtFm/kucing14.jpg','https://i.ibb.co/XbSDh47/kucing15.jpg','https://i.ibb.co/kSXNJzt/kucing16.jpg']
                let cangtip = cangti[Math.floor(Math.random() * cangti.length)]
                ara.sendMessage(from, cangtip, image, {quote:mek})
			    await limitAdd(sender)
                break
		case 'doraemon':
                if (!isRegistered) return reply( ind.noregis())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('[❗] LOADING!', text, tescuk, ari)
				data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
				reply(ind.wait())
				n = JSON.parse(JSON.stringify(data));
				nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				ara.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				break
        case 'cecan':
                tels = body.slice(5)
                ara.updatePresence(from, Presence.composing)
                ty = ["ulzhang girl",
                "cewek cantik",
                "cewe hijab",
                "cewe rusia cantik",
                "cewe jepang cantik",
                "cecan indo"]
                nk = ty[Math.floor(Math.random() * ty.length)]
                try {
                data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                method: 'get'
                })
				costum('[❗] LOADING!', text, tescuk, ari)
                n = JSON.parse(JSON.stringify(data));
                nimek = n[Math.floor(Math.random() * n.length)];
                pok = await getBuffer(nimek)
                ara.sendMessage(from, pok, image, {quoted: mek, caption: `Gimana kak...?`
                })
                } catch {
                reply(mess.ferr)
                }
                break
        case 'cogan': 
                ara.updatePresence(from, Presence.composing)
                uk = ["ulzhang boy","cowok keren","cowo ganteng","cogan","cogan jawa"]
                nk = uk[Math.floor(Math.random() * uk.length)]
                try {
                data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                method: 'get'
                })
				costum('[❗] LOADING!', text, tescuk, ari)
                n = JSON.parse(JSON.stringify(data));
                nimek = n[Math.floor(Math.random() * n.length)];
                pok = await getBuffer(nimek)
                ara.sendMessage(from, pok, image, {
                quoted: mek, caption: `Gimana kak.....?`
                })
                } catch {
                reply(mess.ferr)
                }
                break
		case 'pokemon':
                if (!isRegistered) return reply( ind.noregis())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
				costum('[❗] LOADING!', text, tescuk, ari)
				var n = JSON.parse(JSON.stringify(anu));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				ara.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				break
        case 'kucing':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
				costum('[❗] LOADING!', text, tescuk, ari)
				var n = JSON.parse(JSON.stringify(anu));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				ara.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				break
		case 'hamster':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				ara.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-hamsters`, {method: 'get'})
				costum('[❗] LOADING!', text, tescuk, ari)
				n = JSON.parse(JSON.stringify(data));
				nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				ara.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				break
		case 'kelinci':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				ara.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
				costum('[❗] LOADING!', text, tescuk, ari)
				n = JSON.parse(JSON.stringify(data));
				nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				ara.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				break
		case 'freefireimg':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=freefire`, {method: 'get'})
				costum('[❗] LOADING!', text, tescuk, ari)
				var n = JSON.parse(JSON.stringify(anu));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				ara.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				break
		case 'ww2':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ww2`, {method: 'get'})
				costum('[❗] LOADING!', text, tescuk, ari)
				var n = JSON.parse(JSON.stringify(anu));
				var nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				ara.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				break
		case 'shota':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('[❗] LOADING!', text, tescuk, ari)
				try {
			    res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`)
				buffer = await getBuffer(res.image)
				ara.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('❌ *ERROR* ❌')
				}
				await limitAdd(sender)
				break
		case 'mobil':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				ara.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://api.fdci.se/rep.php?gambar=cars`, {method: 'get'})
				costum('[❗] LOADING!', text, tescuk, ari)
				n = JSON.parse(JSON.stringify(data));
				nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				ara.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				break
		case 'motor':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				ara.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://api.fdci.se/rep.php?gambar=motorcycle`, {method: 'get'})
				costum('[❗] LOADING!', text, tescuk, ari)
				n = JSON.parse(JSON.stringify(data));
				nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				ara.sendMessage(from, pok, image, { quoted: mek })
				await limitAdd(sender)
				break
	    case 'stickergif':
		case 'stikergif':
	    case 'sgif':
		case 'stiker': 
				case 'sticker':
				case 's':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await ara.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								ara.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await ara.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`𝗬𝗮𝗵 𝗴𝗮𝗴𝗮𝗹, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮 𝘀𝗮𝘆𝗮𝗻𝗴`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								ara.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await ara.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('𝗬𝗮𝗵 𝗴𝗮𝗴𝗮𝗹, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮 𝘀𝗮𝘆𝗮𝗻𝗴')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(ind.stikga)
								buff = fs.readFileSync(ranw)
								ara.sendMessage(from, buff, sticker, {quoted: mek})
							})
						})					
					} else {
						reply(`𝗸𝗶𝗿𝗶𝗺 𝗴𝗮𝗺𝗯𝗮𝗿 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 ${prefix}𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗮𝘁𝗮𝘂 𝗿𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝗴𝗮𝗺𝗯𝗮𝗿`)
					}
					break
		case 'brainly':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				brien = body.slice(9)
				brainly(`${brien}`).then(res => {
				teks = '❉───────────❉\n'
				for (let Y of res.data) {
				teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
				}
				ara.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
				console.log(res)
				})
				await limitAdd(sender)
				break 
		case 'pinterest':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				ara.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
				costum('[❗] LOADING!', text, tescuk, ari)
				n = JSON.parse(JSON.stringify(data));
				nimek =  n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				ara.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*`})
				await limitAdd(sender)
				break 
		case 'bitly':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				ara.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'tinyurl':
                ara.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${args[0]}&apikey=BotWeA`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                break
		case 'tts':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return ara.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
				const gtts = require('./lib/gtts')(args[0])
				if (args.length < 2) return ara.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
				dtt = body.slice(8)
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 500
				? reply('Textnya kebanyakan setan!! 😤')
				: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
				fs.unlinkSync(ranm)
				buffer = fs.readFileSync(rano)
				if (err) return reply(ind.stikga())
				ara.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
				fs.unlinkSync(rano)
				})
			    })
				await limitAdd(sender)
				break
		case 'ssweb':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Kak masukin url lah....d')
				teks = body.slice(7)
				costum('[❗] LOADING!', text, tescuk, ari)
				anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
				buffer = await getBuffer(anu.gambar)
				ara.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
        case 'kbbi':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Kak masukin teks lah...')
				anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
				reply('Menurut Kbbi:\n\n'+anu.result)
				await limitAdd(sender)
				break
        case 'memeindo':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				costum('[❗] LOADING!', text, tescuk, ari)
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				ara.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
		case 'lirik': 
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isRegistered) return reply( ind.noregis())
				if (args.length < 1) return reply('Kak masukin teks lah...')
				teks = body.slice(6)
				costum('[❗] LOADING!', text, tescuk, ari)
				anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${teks}`, {method: 'get'})
				hasil = `➤ *JUDUL* : ${anu.result.title}\n➤ *ARTIS* : ${anu.result.artistl}\n➤ *LIRIK* : \n${anu.result.lirik}`
			    ara.sendMessage(from, hasil, text, {quoted: mek})
		        await limitAdd(sender)
				break

// CASE QUOTES MENU


		case 'quotesislami':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
				const isl = islami[Math.floor(Math.random() * islami.length)]
				islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
				ara.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
				await limitAdd(sender)
				break	
		case 'quotesnasehat':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
				const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
				nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
				ara.sendMessage(from, nase, image, { quoted: mek, caption: '*Quotes Nasehat*\n\n'+ nsh })
				await limitAdd(sender)
				break	
		case 'quoteskehidupan':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				const quotes =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Aku percaya, suatu hari nanti, aku akan memiliki semua hal yang telah aku doa kan selama ini.','Balas dendam yang paling terbaik adalah mengubah dirimu menjadi yang lebih baik lagi.','Hidupku jauh dari kata mewah, kalau kalian lihat aku selalu senang, itu karena aku tau cara menikmati hidup.','Persahabatan bukan tentang orang yang baik didepanmu, tetapi tentang orang yang tetap baik di belakangmu.','Tidak semua bisa dimiliki. Jaga yang sudah termiliki. Tidak semua bisa diterima. Pertahankan yang sudah ada.','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Ibu, sebajingan apapun anakmu ini, Hatiku selalu ingin bisa Membahagiakanmu.','Tidak semua hari berjalan dengan baik tapi ada hal baik di setiap harinya.','Pikiran negatif tidak akan pernah memberi kamu kehidupan yang positif','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Saya percaya bahwa satu-satunya keberanian yang dibutuhkan oleh seseorang adalah keberanian untuk mengikuti impian Anda sendiri.','Arti hidup adalah menemukan hadiahmu. Tujuan hidup adalah untuk memberikannya.','Ada kalanya kita dicari ketika diperlukan, Dan dilupakan setelah dapat apa yang dia inginkan.','Aku suka tidur, Bukan karena aku pemalas Hanya saja mimpiku lebih indah dari kenyataan.','Jika kamu terlahir bukan dari keluarga kaya, Maka pastikanlah keluarga kaya berasal dari mu.','Saat kamu memberi orang lain, sesungguhnya pemberian itu adalah untukmu. Dan saat kamu mendoakan orang lain, sesungguhnya doa itu juga untukmu. Maka sibuklah membahagiakan orang lain, agar kemudian dunia akan sibuk membahagiakanmu.','Pernah salah pilih, Pernah salah jalan, Karena ego, Karena ceroboh, Tapi kalau bukan karena salah, Kita tidak akan pernah belajar.','Teruntuk hatiku semoga kamu sabar dan tabah bukan untuk hari ini, tapi untuk setiap hari.','Apapun yang kamu alami hari ini tetaplah terlihat baik-baik saja, are you oke?','Wajar kulitku hitam, Tanganku kasar, Penampilanku dekil, KARENA KEGIATANKU KERJA BUKAN MEMINTA.','Sibuklah mencintai hidupmu sampai kamu tidak punya waktu untuk membenci, menyesal, ataupun merasa takut.','AKU BAHAGIA KARENA BERSYUKUR, BUKAN BERSYUKUR KARENA BAHAGIA.','Hanya karena kamu bisa melakukan apa saja, bukan berarti kamu mampu melakukan segalanya.','Kegagalan adalah kesempatan untuk memulai lagi dengan cara yang lebih cerdas.','Dulu waktu masih kecil tidak sabar pengen jadi dewasa, tapi ketika udah besar, aku baru sadar bahwa jaman kecil lah yang paling bahagia.','Saya adalah saya, Saya bukan dia ataupun mereka Jika ingin bersama saya, Terimalah apa adanya.','Online ku sangatlah santai ada yang chat ya syukur, tidak ada yang chat ya tidur.','Kamu tidak begitu dalam mengenaliku, jadi tolong berhentilah sok tau tentang hidup ku.','Saya terlahir dari keluarga sederhana jadi maaf kalau penampilan saya apa adanya.','Dirimu sebenarnya adalah apa yang kamu lakukan di saat tiada orang yang melihatmu.','Ada dua pilihan hidup di pagi hari. Kembali tidur untuk melanjutkan mimpi, atau bangun tidur untuk mewujudkan mimpi.','Orang yang dibelakangku membicarakan diriku, keadaanku, keburukanku, mungkin ia membahayakan dalam duniaku tapi yang jelas ia bermanfaat untuk akhiratku, maka biarlah ia meneruskannya. *#Jangan lupa tersenyum untuk setiap harinya*','Lupakanlah masalahmu sejenak, dan berbahagialah kamu.','Mencintai memang tentang penerimaan. Tapi bukan untuk dibodohi.','Hidup adalah keseimbangan antara menggenggam dan melepaskan.','Jalanan yang sulit seringkali membawamu ke tujuan yang paling indah.','Kita tidak gagal. Kita hanya telah belajar dari 1000 cara yang salah.','Kalau kamu menginginkan sesuatu yang belum pernah kamu miliki, kamu harus melakukan sesuatu yang belum pernah kamu lakukan.','Jangan berhenti sebelum kamu bangga dengan dirimu sendiri.','Siapapun yang kamu cari.. Percayalah, dia juga sedang mencarimu.','Bahagia itu tujuan, kecewa itu jalan. Seseorang tidak akan sampai ke tujuan, tanpa melewati sebuah jalan.','Teruslah update status, setidaknya orang lain tau bahwa kamu masih hidup.','Bukan aku yang hebat. Tapi doa orang tua ku.','Kalau kamu sering disakiti orang itu artinya kamu orang baik. Ingat, cuma pohon berbuah yang dilempari batu.','Dalam hidup ini, Sadar itu penting loh, Jangan sabar mulu, CAPEK!','Kamu mempunyai banyak pilihan hidup untuk itu, Pilihlah hanya yang bisa benar-benar menjadikanmu lebih baik.','Aku kuat karena aku pernah lemah. Aku berani karena aku pernah merasa takut. Aku bijak karena aku pernah melakukan kesalahan.','Bukan berdoa untuk meminta hidup yang lebih mudah, Tapi berdoalah untuk bisa menjadi manusia yang lebih tangguh dalam menjalani hidup.','Selalu ada kisah yang kamu tidak tau di balik setiap orang. Selalu ada alasan mengapa mereka menjadi seperti itu. Pikiran hal ini sebelum kamu mencoba menghakimi orang lain.','Orang lain hanya melihat hasil akhir tanpa pernah tau bagaimana lelahnya berproses.','Kebahagiaan bukan milik mereka yang memiliki segalanya, Tetapi untuk mereka yang bisa menghargai apa yang mereka miliki.','Aku hanya ingin diperlakukan spesial lagi.','Terkadang, Hal yang menahan mu untuk bergerak maju hanyalah Pikiranmu sendiri.','Dua hal Menggambarkan dirimu : Kesabaranmu saat tak punya apa-apa Dan Sikapmu saat memiliki segalanya.','Kita hanya bersama bukan bersatu.','Saat kamu benar Semua orang lupa Saat kamu salah Semua orang ingat','Uang memang bukan segalanya tapi Tanpa uang kehidupan ini akan susah','Bila kamu Yakin , Tak perlu ada kata Mungkin','Jadilah kuat untuk melepaskan, Dan sabar untuk apa yang layak kamu dapatkan.','Pembenci itu sangat pemilih, Mereka hanya membenci orang yang hidupnya lebih baik  daripada hidup mereka.','Pasangan adalah cerminan diri kita. Maka teruslah perbaiki diri menjadi lebih baik setiap harinya, Maka pasangan terbaikpun akan diberikan tuhan.','Persahabatan adalah berbagi suka duka dan menua bersama.','Tersenyumlah ketika melihat masa lalu yang kelam, Karena engkau telah berhasil melewatinya.','Ketika banyak permasalahan yang menghampiri dirimu janganlah meminta untuk lekas dihilangkan. Tapi mintalah agar kamu bisa kuat untuk menyelesaikan.','Kehidupanmu adalah buah dari tindakan yang kamu lakukan. Tidak ada yang bisa disalahkan selain dirimu.','Kehidupan bukanlah masalah yang harus diselesaikan namun kenyataan yang harus diambil pengalamannya.','Semoga di tahun baru, Buku baru, Penulisan yang baru dengan isi yang lebih menarik untuk diimbas kembali di penghujung cerita nanti.','Masa lalu memang menyimpan banyak kenangan, Namun itu bukan alasan untuk tidak terus melangkah ke depan.','Santailah, Nikmati saja hidup, Tersenyumlah lebih banyak, Tertawalah lebih banyak, Dan janganlah memikirkan banyak hal.','Setiap perbuatan yang membahagiakan sesama adalah suatu sikap yang mencerminkan pribadi yang mulia.','Jarang yang sadar kalau kegagalan juga merupakan kesempatan emas untuk menuju kesuksesan.','Lebih baik bekerja keras dalam kediamnya kesunyian, Biarkan nanti sukses mu yang berbicara.','Belajar dari kesalahan masa lalu merupakan salah satu langkah awal untuk maju.']
				const quo = quotes[Math.floor(Math.random() * quotes.length)]
				crot = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
				ara.sendMessage(from, crot, image, { quoted: mek, caption: '*Quotes Kehidupan*\n\n'+ quo })
				await limitAdd(sender)
				break

// CASE ANIME MENU

			case 'animeboy':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('[❗] LOADING!', text, tescuk, ari)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20boy`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					ara.sendMessage(from, pok, image, { quoted: mek })
				    await limitAdd(sender)
					break
			case 'animegirl':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('[❗] LOADING!', text, tescuk, ari)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20girl`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					ara.sendMessage(from, pok, image, { quoted: mek })
				    await limitAdd(sender)
					break
		case 'animeimg':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('[❗] LOADING!', text, tescuk, ari)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					ara.sendMessage(from, pok, image, { quoted: mek })
				    await limitAdd(sender)
					break
        case 'loli':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('[❗] LOADING!', text, tescuk, ari)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`)
                   ara.sendMessage(from, anu, image, {caption: `Lolinya kak`, quoted: mek})
				   await limitAdd(sender)
                   break
        case 'kusonime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('[❗] LOADING!', text, tescuk, ari)
                   F = body.slice(10)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${F}`)
                   anu1 = `➤ *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
				   await limitAdd(sender)
                   break
        case 'neko':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(4)
				costum('[❗] LOADING!', text, tescuk, ari)
				anu = await fetchJson(`https://alfians-api.herokuapp.com/api/nekonime`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				ara.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break

// CASH LIMIT MENU

		case 'limit':
                if (!isRegistered) return reply( ind.noregis())
				checkLimit(sender)
				break
		case 'buylimit':
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(10)
				const koinPerlimit = 2000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
				confirmATM(sender, total)
				bayarLimit(sender, payout)
				await reply(`*「 PEMBELIAN 」* \nSilahkan hubungi owner https://wa.me/6283186893249`)
				} 
				break
		case 'buypremiumlimit':
                if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(17)
				const koinpremPerlimit = 500
				const totalprem = koinpremPerlimit * payout
				if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalprem ) {
				confirmATM(sender, totalprem)
				bayarLimit(sender, payout)
				await reply(`*「 PEMBELIAN 」* \nSilahkan hubungi owner https://wa.me/6283186893249`)
				} 
				break
		case 'transfer':
                if (!isRegistered) return reply( ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
              	const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 5000 ) return reply(`minimal transfer 5000`)
               	if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
               	const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.010 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
               	addKoinUser('6283186893249@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\nPengiriman uang telah sukses\nDari : +${sender.split("@")[0]}\nKe : +${tujuan}\njJumlah transfer : ${jumblah}\nPajak : ${fee}`)
                break
		case 'leaderboard':
		case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
				nom++
				leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
				leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break

// OTHER

		case 'wa.me':
		case 'wame':
                    if (!isRegistered) return reply( ind.noregis())
  					if (isLimit(sender)) return reply(ind.limitend(pusname))
  					ara.updatePresence(from, Presence.composing) 
  					options = {
  					text :`「 *YEYEN BOT WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					ara.sendMessage(from, options, text, { quoted: mek } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  					break
		case 'ocr': 
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					const media = await ara.downloadAndSaveMediaMessage(encmedia)
				costum('[❗] LOADING!', text, tescuk, ari)
					await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
		    		.then(teks => {
					reply(teks.trim())
					fs.unlinkSync(media)
					})
					.catch(err => {
					reply(err.message)
					fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
		case 'kalkulator':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
				reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
				reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
		case 'toimg':
                if (!isRegistered) return reply( ind.noregis())
				if (!isQuotedSticker) return reply('*Reply/Tag sticker!*')
				costum('[❗] LOADING!', text, tescuk, ari)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await ara.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply(ind.stikga())
				buffer = fs.readFileSync(ran)
				ara.sendMessage(from, buffer, image, {quoted: mek, caption: '*DAH JADI NGEMTOD!!* '})
				fs.unlinkSync(ran)
				})
			    await limitAdd(sender)
				break
         case 'resepmasakan':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} soto*`)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/resep?q=${F}`)
                   anu1 = await getBuffer(anu.img)
                   anu2 = `➤ *NAMA* : ${anu.title}\n`
                   anu2 += `➤ *STATUS* : ${anu.langkah}\n`
                   anu2 += `➤ *BAHAN* : ${anu.bahan}`
                   ara.sendMessage(from, anu1, image, {caption: anu2, quoted: mek})

// CASE RANDOM

		  case 'mutual':
				case 'mutualan':
                   if (!isRegistered) return reply( ind.noregis())
				   if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				   anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				   costum('[❗] Find partner..!', text, tescuk, ari)
				   await reply(`wa.me/${anug}`)
				   await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				   await limitAdd(sender)
				   break
		case 'next':
                   if (!isRegistered) return reply( ind.noregis())
			       if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				   anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				   costum('[❗] Find partner..!', text, tescuk, ari)
				   await reply(`wa.me/${anug}`)
				   await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				   await limitAdd(sender)
				   break
















            default:
					if (budy.includes(`Salken`)) {
                  reply(`Salek juga om, Aku Bot Yeyen\nKetik .menu untuk melihat Menu Bot Yeyen`)
                  }
		 if (budy.includes(`halo`)) {
                  reply(`Hallo Juga Om, Aku Bot Yeyen\nKetik .menu untuk melihat Menu Bot Yeyen`)
                  }
					if (budy.includes(`Halo`)) {
                  reply(`Hallo Juga Om, Aku Bot Yeyen\nKetik .menu untuk melihat Menu Bot Yeyen`)
                  }
					if (budy.includes(`hai`)) {
                  reply(`Hai Juga Om, Aku Bot Yeyen\nKetik .menu untuk melihat Menu Bot Yeyen`)
                  }
					if (budy.includes(`Hai`)) {
                  reply(`Hai Juga Om, Aku Bot Yeyen\nKetik .menu untuk melihat Menu Bot Yeyen`)
                  }

			if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam, Aku Bot Yeyen\nKetik .menu untuk melihat Menu Bot Yeyen`)
                  }

		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam, Aku Bot Yeyen\nKetik .menu untuk melihat Menu Bot Yeyen`)
                  }
                  
		if (budy.includes(`Assalamu'alaikum`)) {
                  reply(`Waalaikumsalam, Aku Bot Yeyen\nKetik .menu untuk melihat Menu Bot Yeyen`)
                  }
                  
		if (budy.includes(`assalamu'alaikum`)) {
                  reply(`Waalaikumsalam, Aku Bot Yeyen\nKetik .menu untuk melihat Menu Bot Yeyen`)
                  }
	/*	if (budy.includes(`@6285852335038`)) {
					if (!isGroup) return reply(ind.groupo())
					setTimeout( () => {
					ara.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					ara.updatePresence(from, Presence.composing)
					reply(`*LU NGAPA TAG GUA NGENTOD, ${pushname} GW OUT!!*`)
					}, 0)
				}*/
         if (body.startsWith(`${prefix}${command}`)) {
     //   reply(`*${pushname}*, Command *${prefix}${command}* Tidak Ada Di Dalam *${prefix}menu* ${cr}`)
		const none = fs.readFileSync('./mp3/ara.mp3');
		ara.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

			  }

				if (body.startsWith(`${prefix}${command}`)) {
  reply(`        ────────────────\nHei *${pushname}* !!!\nPerintah/Command : *${prefix}${command}*\nTidak ada dalam *${prefix}Menu*\n        ────────────────`)
				}
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'green'))
		}
	})
}
starts()
