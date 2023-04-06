const { Client, Intents, MessageEmbed } = require('discord.js');
const { v4: uuidv4 } = require('uuid');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const prefix = "!"; // add the prefix you want to use for your commands

function makeids() {
  return uuidv4();
}

function conv(thevalue) {
  var firstBuffers1 = '';
  var a = 0;
  while (a !== 3) {
    if (a === 0) {
      firstBuffers1 = Buffer.from(thevalue, 'base64').toString('utf-8');
    } else if (a === 1){
      firstBuffers1 = Buffer.from(firstBuffers1, 'hex').toString('utf-8');
    } else {
      firstBuffers1 = Buffer.from(firstBuffers1, 'base64').toString('utf-8');
      
    }
    a++
  }
  return firstBuffers1;
}

function createEmbed(color, author, title, desc, footer) {
  let embed = new MessageEmbed()
    .setColor(color)
    .setTitle(title)
    .setDescription(desc)
    .setFooter(footer);

  if (author !== undefined && author !== null) {
    embed.setAuthor(author);
  }

  return embed;
}

function instantMessageEmd(modes, author, title, desc, color, id) {
  if (modes === "issue") {
    createEmbed(1,);
  } else if (modes === "issueApproved") {
    createEmbed();
  }
}

const dcapis = {
  token: conv(process.env.DISCORD_BOTTOKEN),
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return; // ignore messages sent by bots
  if (!message.content.startsWith(prefix)) return; // ignore messages that don't start with the prefix

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
 if(commandName === 'xperiment') {
    const subcmd = args.shift().toLowerCase();
    if (subcmd === 'math') {
      const question = args.join(' ');
 try {
      const result = eval(question);
      message.reply(`The result of ${question} is ${ result}.`);
    } catch (error) {
      message.reply(`Sorry, I could not evaluate ${question}. The error is:\n\n${error}`);
    }
    } else if (subcmd === 'ping') {
      message.reply("Pong");
    }
 } else if (commandName === 'send') {
    // get the channel from the first argument
    const channel = message.mentions.channels.first();
    if (!channel) {
      message.reply('Please mention a channel to send the message to!');
      return;
    }

    // remove the first argument and join the rest into a string
    const content = args.slice(1).join(' ');

    // send the message to the specified channel
    channel.send(content);
    message.reply(`Sent message "${content}" to channel ${channel}.`);
  } else if (commandName === 'sendissue') {
    // handle the sendissue command here
  } 
});

client.login(dcapis.token);