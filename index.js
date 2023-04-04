require('replit-alive-server')();
const { Client, Intents } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { v4: uuidv4 } = require('uuid');
function makeids() {
  return uuidv4();
}

function conv(thevalue) {
  let firstBuffers = '';
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      firstBuffers = Buffer.from(thevalue, 'base64').toString('utf-8');
    } else {
      firstBuffers = Buffer.from(firstBuffers, 'base64').toString('utf-8');
    }
  }
  return firstBuffers;
  firstBuffers = '';
}
function createEmbed(color, author, title, desc, footer, header) {
  let authorfound = author !== null;
  let embed = new MessageEmbed()
    .setColor(color)
    .setTitle(title)
    .setDescription(desc)
    .setFooter(footer);

  if (header !== undefined && header !== null) {
    embed.setAuthor(header);
  }

  return embed;
}
function instantMessageEmd(modes, author, title, desc, color, id) {
  if (modes === "issue") {
  createEmbed();
  } else if (modes === "issueApproved") {
  createEmbed();
  }
}

const dcapis = {
  capi: function() {conv(process.env.DISCORD_CLIENT_ID)},
  gid: function() {conv(process.env.DISCORD_GUILD_ID)},
  token: function() {conv(process.env.DISCORD_TOKEN)},
};
const commands = [
  {
    name: 'send',
    description: 'Sends a message to staff (only for april fools lol)',
    options: [
      {
        name: 'message',
        type: 'STRING',
        description: 'The message to send',
        required: true,
      },
    ],
  },
  {
    name: 'sendissue',
    description: 'Make an issue to our admin and staff and wait for the responses. You can use this command to feedback to ourself 😁',
    options: [
      {
        name: 'Category',
        type: 'STRING',
        description: 'Category for the issue',
        required: true,
        choices: [
    {
      name: 'Making a new role with my yt channel',
      value: 'newroleyt',
      description: 'Uhh you need to read the GRs yt rule before submitting',
    },
          {
            name: 'Bug in the server',
            value: 'reportbug',
            description: 'Report a bug that occurs on the server',
          },
          {
            name: 'Others',
            value: 'others',
            description: 'Other issue that you want to submit'
          },
        ],
      },
      {
        name: 'Description',
        type: 'STRING',
        description: 'Describe it about the issue',
        required: true,
      },
      {
        name: 'Additional Note',
        type: 'STRING',
        description: 'If you want to make a note again to us just type in here',
        required: false,
      },
    ],
  },
];


const rest = new REST({ version: '9' }).setToken(dcapis.token());

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(dcapis.capi(), dcapis.gid()),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  const { commandName, options } = interaction;
  if (commandName === 'send') {
    const message = options.getString('message');
    const channel = client.channels.cache.get(interaction.channelId);
    channel.send(message);
    interaction.reply(`Sent message "${message}" to channel ${channel}.`);
  } else if (commandName === 'sendissue') {
       if (options.has('Additional Note')) {
      const additionalNote = options.getString('Additional Note');
      if (additionalNote === null) {
        
      } else {
        // The user filled in the "Additional Note" option with a string value
      }
  }
});

client.login(dcapis.token());