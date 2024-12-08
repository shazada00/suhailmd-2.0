const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://qu.ax/cQZOL.jpg" || "https://qu.ax/cQZOL.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923196335250";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://qu.ax/cQZOL.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_30_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI2LFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM3LFxuICAgICAgICAzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDc5LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDczLFxuICAgICAgICAyNixcbiAgICAgICAgODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAzMixcbiAgICAgICAgMjUwLFxuICAgICAgICA3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1LFxuICAgICAgICA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTczLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc0LFxuICAgICAgICA5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVsbnBLOEkwRUMyMXNBOEVpWWJPelQ5YWlwUnYvSUhuVWV5eGdFY0p5Yjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktDeVZydkdCUVdtcVA1b1hyX3o2QndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmNhNDM3MDEtODk1MS00NDk5LWIxMGQtZWFiYzhhZDAwZTVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgNDgsXG4gICAgICAxNjAsXG4gICAgICAxMzEsXG4gICAgICA1NSxcbiAgICAgIDcxLFxuICAgICAgMzAsXG4gICAgICAyMDEsXG4gICAgICA1MixcbiAgICAgIDE3NixcbiAgICAgIDk0LFxuICAgICAgMzMsXG4gICAgICAxOTIsXG4gICAgICAxOTMsXG4gICAgICAxNjEsXG4gICAgICAxOTksXG4gICAgICAxMDQsXG4gICAgICAxNjksXG4gICAgICAxNTMsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAyMDIsXG4gICAgICA0MSxcbiAgICAgIDE5MCxcbiAgICAgIDE1NCxcbiAgICAgIDIzLFxuICAgICAgMTYyLFxuICAgICAgMjMxLFxuICAgICAgOTEsXG4gICAgICA0NSxcbiAgICAgIDYsXG4gICAgICAyOSxcbiAgICAgIDE0OCxcbiAgICAgIDE3OCxcbiAgICAgIDEzMyxcbiAgICAgIDc0LFxuICAgICAgMjIsXG4gICAgICAyMzQsXG4gICAgICAyNDMsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5MVdSN1FCNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTk2MzM1MjUwOjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JOEguqvrfCThqlcXFwiIOqvrfCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiDwnZCT8J2QgPCdkIHwnZCI8J2QkvCdkIcg8JOGquqvreqvrSDigLnqr63Cs/CThqogXFxu8JODrlxcbvCTg65cXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4OuXFxu8JODrlxcbvCThqnwlqSN8JOGqlwiLFxuICAgIFwibGlkXCI6IFwiNTM2MTAzMTg2Njc4NDk6NTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVRRejdRSEVPdUQyTG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrU3l2Q1B3enlCbGZBdU83dTVZNVVmMjhWK2ZBZ2lNenJtNUh4SnZXbjF3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktjQjdUb05mamQxOTkrSnllYldoSjVJSDBUY2Q5RENGcm14WFp0d3hHekQzdE9hb250YktnOWlQeHJPT1MzY1VwZnU0aktuUkplK0dVL21rbjR3UkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInh6QW1hSlZkZlFTZThsQ2xUZ1h5WVJJd1BxU2kwajJiSS9xZXZramNvb0puaWplWkEzazNKbmVQaWsxdjJXOXJLNDl5aTlFdFZwRWdHRGZyMWZlRERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE5NjMzNTI1MDo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzY4OTgzOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhjdlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGN2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWThIY0JZK2xtdEQvOU8zVVlyU0FqemJoRTJqUFNGQlMzVTFLUWdic09oUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTg5NDA0Njc0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐓𝐚𝐛𝐢𝐬𝐡",
  packname: process.env.PACK_NAME || "𝐓𝐚𝐛𝐢𝐬𝐡",
  botname : process.env.BOT_NAME  || "🅃🄰🄱🄸🅂🄷 🄰🄻🄸",
  ownername:process.env.OWNER_NAME|| "🅃🄰🄱🄸🅂🄷 🄰🄻🄸",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
