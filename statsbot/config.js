module.exports = {
  bot: {
    token: 'MTI5NTI3Nzk2MjU3NjUyNzM2MA.GSFDLU.35B2EjFLUxd4ECCbDyhXuiJJWrM33BDngTDCzc',

    presence: {
      enabled: true,
      activity: 'Playing', 
      text: {
        online: 'lagi main {playeronline}/{playermax} players', 
        offline: 'Server sedang Offline', 
      },
      status: {
        online: 'online', 
        offline: 'idle', 
      },
    },
  },
  mcserver: {
    ip: '51.79.96.13', // IP of  MC server.
    port: 38739, // Port number of MC server. Default Port - Java: 25565, Bedrock: 19132.
    type: 'bedrock', 
    name: 'Lunar Survival', 
    version: 'Gunakan Versi 1.8 - 1.20', 
    icon: 'https://i.imgur.com/90APNyn.png', 
    vote: 'https://discord.gg/TJ3NY69Y9N', 
  },

  settings: {
    logging: {
      inviteLink: true, 
      debug: false, 
      error: true, 
      serverInfo: true, 
    },
  },

  autoChangeStatus: {
    enabled: true,
    updateInterval: 60, 
    isOnlineCheck: true, 
  },

  playerCountCH: {
    enabled: true,
    guildID: '1295265953873006613', // COY TOLONG BACA Playcountstats kalau ga ada buat manual ya ke /src/ lalu buka data.json
    channelId: '1295280875164143648',  // bagian PlayerCountStats kasih channel id VOICE ya bukan text
    onlineText: '🟢 {playeronline}/{playermax} Players playing',
    offlineText: '🔴 Offline', 
  },

  autoReply: {
    enabled: true,
    version: {
      enabled: true,
      triggerWords: ['versi berapa?', 'versi'],
      replyText: "Gunakan versi: **`{version}`**",
    },
    ip: {
      enabled: true,
      triggerWords: ['ipnya apa', 'ip'],
      replyText: '**IP: `{ip}`\nPort: `{port}`**',
    },
    vote: {
      enabled: true,
      triggerWords: ['website link', 'website', 'url', 'site', 'link vote'],
      replyText: "Website link: **<{vote}>**",
    },
    status: {
      enabled: true,
      triggerWords: ['server on ga', 'is server offline', 'status of the server'],
      onlineReply: 'Servernya sedang on **`🟢ONLINE`** with **`{playerOnline}/{playerMax}`** yang lagi main',
      offlineReply: 'servernya lagi **`🔴OFFLINE`**.',
    },
  },

  commands: {
    slashCommands: true,
    prefixCommands: {
      enabled: true,
      prefix: '!', 
    },
    language: 'id', 
    ip: {
      enabled: true, 
      alias: ['ip-address'], 
    },
    vote: {
      enabled: true, 
      alias: ['vote', 'link'], 
    },
    version: {
      enabled: true, 
      alias: [], 
    },
    players: {
      enabled: true, 
      alias: ['plist'], 
    },
    status: {
      enabled: true, 
      alias: ['info'], 
    },
    motd: {
      enabled: true, 
      alias: [], 
    },
    help: {
      enabled: true, 
      alias: ['commands'],
    },
  },
}
