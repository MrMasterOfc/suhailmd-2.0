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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_30_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMixcbiAgICAgICAgODYsXG4gICAgICAgIDcwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTksXG4gICAgICAgIDk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDc0LFxuICAgICAgICA2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxLFxuICAgICAgICA0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0OCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNIV3F5K3ViTURMNDdSQ2dqK3NseFV3cVR4a3VsWjYvblU4QXBnTEVMZ3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkV2dE94a0ZxUXZDYjJVM21WLXFvaWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDY5NDMwZmMtNjMxNS00NmVmLTk5YjYtMGU0NWM5MzI4Y2FjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAxMTMsXG4gICAgICAxNjYsXG4gICAgICAyMTEsXG4gICAgICA1OSxcbiAgICAgIDM3LFxuICAgICAgMjIzLFxuICAgICAgMjM5LFxuICAgICAgODcsXG4gICAgICAyNTMsXG4gICAgICA0NixcbiAgICAgIDI2LFxuICAgICAgNzEsXG4gICAgICAyMTQsXG4gICAgICAxMTksXG4gICAgICAzNCxcbiAgICAgIDE0MyxcbiAgICAgIDE0MyxcbiAgICAgIDEzNixcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDE1NyxcbiAgICAgIDYyLFxuICAgICAgMjcsXG4gICAgICAxMSxcbiAgICAgIDIyMSxcbiAgICAgIDg5LFxuICAgICAgMTg1LFxuICAgICAgMTg3LFxuICAgICAgMTUyLFxuICAgICAgMjE0LFxuICAgICAgNTcsXG4gICAgICA1MyxcbiAgICAgIDIwOSxcbiAgICAgIDE5OSxcbiAgICAgIDIxMixcbiAgICAgIDIyMixcbiAgICAgIDQyLFxuICAgICAgMTc1LFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZOUzlQTUtRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyMDc5NzkxNTozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIgg8J2QgOG0jSDjgLIgXFxuXFxu4bSNXFxuXFxuXFxu4bSAXFxuXFxuXFxu6pyxXFxuXFxuXFxu4bSbXFxuXFxuXFxu4bSHXFxuXFxuXFxuyoBcXG5cXG5cXG5cXG5cXG7htI1cXG5cXG5cXG7Jqlxcblxcblxcbsm0XFxuXFxuXFxu4bSFXCIsXG4gICAgXCJsaWRcIjogXCIyMDM5MzQxMjM3MjkxNDQ6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDJXb1pRQ0VJZmt6N3NHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmYXZ4YkVPek4yUVZ0RGd2WlZFdVYzRUYvNXNUcjJZYkMzRDdYaHJOekRrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVwZHAwb2p1NXcxZTNjbnI3ajFQYnNpaEVPSk52WVF5WS9iOVQ1YlI3UlZNNHhDZ1BYWmdvOEJXNXJSa0psenlhcksyanEwWThoYmlxSEZDelZuYkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBXNGFDbUdNMGx3T2h6WFpiVzhBelhtNi9UdHZNcGJDcTZ4WlRUZUxZZE5QTzV1UkNjR0JCdjBlSFEvQjB6Rmp5VUZPdXF5N1FRaDZMR0NjYmVqZ0JnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzIwNzk3OTE1OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU2NTE4NDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHOS9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc5Ly5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
