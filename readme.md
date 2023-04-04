Well hi, this is my second discord bot project for my friend's server 
(for my first discord bot project it dosent success and also many bugs occurs in there)

Some important notes:

- Do not downgrade your nodejs version to the version that ES6 and ES Module dosent supported (Untill you found the discord slash command library that formatted in commonjs, not ES Module)

- If you forked this repl and then want to fully make it on your own without modifying our code but only modifying the Secrets variables, you need to set ALL values that you change in your secrets variable must encoded to Base64 [(you can use Buffer.from(process.env.Your secrets variable here, 'base64').toString('utf-8') to convert it or you can find string to base64 encoder online)]. But,

- This project is very tricky for newbies in nodejs (Im lazy to make documentation so thats it). Welp, try make this thingys works!