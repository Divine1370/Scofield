//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348109243618";
global.sudo = process.env.SUDO || "2349012640680";
global.owner = process.env.OWNER_NUMBER || "2348109243618";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0t1azJ0NWFEQlJubHdNNjFvTkx6RGtPbUdVRmt0dDdiNVJNV2tIVEdtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUtqQ2dqYkEzT3hGVDdaUjJHaHZ4YzVvTUNWT0IwaXUvdjdyWVJhN0YyOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTGdBd0xjUEl6OVl5UTM4YU5CNzF6V0RnNE5XT2Iwa0huYlFXekNRVzFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRUNDeG1OR0NMRWFkaUE5RFhvUXV6V3JpM3d5RGl3ek96NkQrN3lwVXkwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtPendMQ0U1TXRmSXJmYjlVUGZxeWNtWXdFRlhNZHN5Rzh6anFQSkFSMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImljcndYWGIydnZoZzRwbW9ieUJ6bEFySFB1UDRWUlJUWmorOWVtNlMyRk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5LVllLTVBrbElOd1VZZkowNk4vTFRJcDZKZlVjcC80elErYllROWMyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmlXem1Jcjh3ZXJpY3Z6RUNkSm9tVlYvSU1MaURIbnBva2Nmb1RHVWVCTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJxelByNnlUWXlvY0QyanI4TWh0N2laODFYYVRxZzhrWERheXFCd3JqeFNVcWoyazBtNFdqWk9vMzZtSFNvdU1aQVUzYklxcFQ3SVZCZC8zSmNpM0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IlE3UUMyc01XeFc1L3MzZXlGbS9TT1I1dWw5dC9DdWF4YWtaNkdabFdjemM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im9xa0tQNzM2VDNLM0JMRUtQb251aVEiLCJwaG9uZUlkIjoiNjIyOThiZmMtOGJlZi00OTc4LWI4MzgtYzM4NWJmNTFhMWE4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRQMXdhUjhVbzRyTit5UitFQUpmdSttUDVZST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNbGVmV1ltWCtQZWg3T3NjQ3lsOFcxNmhXL2M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFI2WEQ5TlYiLCJtZSI6eyJpZCI6IjIzNDgxMDkyNDM2MTg6NTFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00yeTE4OEVFTGpiMGJrR0dCMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldMMlI1OUVxQjE5SFN4WFF6enZSRW01a3JNVFFvVUhnYTJPakNQTlhxamc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikt4Y1N1Zkp5WDNrVDdySDJrb093eWFpS2RLdzZMUFNLUUJOK2gvSGNaYzdLRmc4ZGQ4U2pwVzR1T1g3WWtyUWhXVUNLZFBrZWZWTmhRdWVzZ2tkQkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzVmVLdHozZUxvYWo2Q3Jxd3BkWDQvbjNybG13eTlFSElVMEdZNVZOdjhVRFpMa1ZJOGtiZjdHcjgvdkVKaEZCQUtRVDJlY0ZYL2x6bWFvMkl2RmtBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDkyNDM2MTg6NTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmk5a2VmUktnZGZSMHNWME04NzBSSnVaS3pFMEtGQjRHdGpvd2p6VjZvNCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTQ4OTIyMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCeGMifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "𝕯𝖆𝖛𝖎𝖉",
  packname: process.env.PACK_NAME || "𝕵𝖊 𝖛𝖔𝖎𝖘 𝖘𝖙𝖎𝖈𝖐𝖊𝖗 𝖕𝖆𝖈𝖐",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "DAVID",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
