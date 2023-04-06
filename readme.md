Introduction
-
Well hi, this is my second discord bot project for my friend's server 
(for my first discord bot project it dosent success and also many bugs occurs in there)

Some important notes:

- Do not downgrade your nodejs version to the version that ES6 and ES Module dosent supported (Untill you found the discord slash command library that formatted in commonjs, not ES Module)

- If you forked this repl and then want to fully make it on your own without modifying our code but only modifying the Secrets variables, you need to set ALL values that you change in your secrets variable must encoded to Base64 (you can use Buffer.from(process.env.Your secrets variable here, 'base64').toString('utf-8') to convert it or you can find string to base64 encoder online). But,

- This project is very tricky for newbies in nodejs (Im lazy to make documentation so thats it). Welp, try make this thingys works!

To do list:
-
- (In progress) commands
- (in progress) commands for dms
- (in progress) admin detector
- (In progress) saving the 'issues' data so the bot can still knowing is the issues already been solved or not by the staff
- (soon) add the private channel and private vc that only the member whos reporting in /report command (not done too for that command). It will end after the staff use /endcall or only the bot itself in the vc 

Updates
-
- Downgraded discordjs version to 13 (and also I do not want to use slash command so thats it)