# What is this?
This is an edit (or fork, if you must say so) of [nightbloo/nb3bot](https://github.com/nightbloo/nb3bot), a Dubtrack.FM BOT made for the nightblue3 room.

You will notice there is no "fork" warning on the repository page, that's because this is not a direct fork, but a copy of the repository.
~~That was done intentionally to allow for a "issues" tab on this repository (GitHub doesn't have Issue pages for forks).~~
GitHub in fact does! But you have to enable it from the repository settings. Problem is, the repository is already done ¯\\\_(ツ)_/¯ 

Below you'll find how to setup the BOT yourself, though it might be incomplete to how [nightbloo/nb3bot](https://github.com/nightbloo/nb3bot) has it, so I would recommend using that.

# Requirements to setup
[NodeJS](https://nodejs.org/en/download/) (recommended LTS)
[Redis](https://redis.io/download)

# Getting started
Couple of steps to get started and getting it working:

First of get the repo in a folder that you know how to get back to later on. Then open a NodeJS terminal there.
When you've opened the NodeJS terminal run ```npm install```.

After doing this you have to make a .env file in the main folder (no filename, just .env).
Once you've made the file fill it with the login info/connection info of your bot's account on dubtrack. Which should look like this:
```
# Dubtrack Account
DT_LOGIN=foo    # The emailadress used to login to the bot's account (if you don't have one, then make one)
DT_PASS=bar     # The password used to login to the bot's account
DT_ROOM=roomid  # The room which you want to connect to it's name/id (e.g. www.dubtrack.fm/join/{everything here})

# Server Security
HTTPS_KEY=foo   # HTTPS Key
HTTPS_CERT=bar  # HTTPS Certificate
HTTPS_CA=foobar # HTTPS Certificate Authority

# Soundcloud Credentials
SC_CLIENT_ID=foo # Soundcloud client ID to get song url

# Command Cooldown
COOLDOWN=number # [OPTIONAL] Number for per user cooldown (in seconds). Default is 30

# GAMES
GAME_RESET=comma_separated_list # [OPTIONAL] If set each game listed will have it's cooldown reset on BOT boot.

# Roulette
ROULETTE_PRICE=number    # [OPTIONAL] Number of props an user needs to join a roulette. Default is 3.
ROULETTE_DURATION=number # [OPTIONAL] Number in seconds the roulette lasts. Default is 60.
ROULETTE_COOLDOWN=number # [OPTIONAL] Number in minutes the cooldown for the roulette lasts. Default is 60.

# Scramble
WORDNIK_API_KEY=string   # API Key for Wordnik. Get one at http://developer.wordnik.com/, if not defined then `!scramble` will throw an error.
SCRAMBLE_REWARD=number   # [OPTIONAL] Number of props an user receives upon winning scramble. Default is 3.
SCRAMBLE_DURATION=number # [OPTIONAL] Number in seconds the roulette lasts. Default is 60.
SCRAMBLE_COOLDOWN=number # [OPTIONAL] Number in minutes the cooldown for the roulette lasts. Default is 30.

# Redis Database
REDIS_PORT=number    # [OPTIONAL] Port for Redis database, if not defined then defaults to 6379.
REDIS_HOST=foo       # [OPTIONAL] Host for Redis database, if not defined then defaults to 127.0.0.1.
REDIS_PASSWORD=bar   # [OPTIONAL] Password for Redis database, if not defined then defaults to empty string.
REDIS_FAMILY=number  # [OPTIONAL] Family for Redis database (ip4 or ip6), if not defined then defaults to 4.
REDIS_DB=number      # [OPTIONAL] Redis database to access, if not defined then defaults to 0.

# Twitch Credentials
TWITCH_CLIENT_ID=foo       # Twitch Client ID
TWITCH_CLIENT_SECRET=bar   # Twitch Secret ID

# Image Removal
IMGTIME=number               # [OPTIONAL] Number for image removal (in seconds), if less than 0 then it's disabled. Default is 15
IMGREMOVALSPAM_AMOUNT=number # [OPTIONAL] Number of images on a single message "thread" (messages from the same user, in a row) before removing them (image removal because of spam), if less than 0 then it's disabled. Default is 5.
IMGREMOVALSPAM_TIME=number   # [OPTIONAL] Number of time (in minutes) to unmute user after instant image removal because of spam, if less than 0 then it's disabled. Default is 1.
IMGREMOVALDUBS_AMOUNT=number # [OPTIONAL] Number of dubs necessary by the user to bypass instant image removal because of dubs, if less than 0 then it's disabled. Default is 300.
IMGREMOVALDUBS_TIME=number   # [OPTIONAL] Number of time (in minutes) to unmute user after instant image removal because of dubs, if less than 0 then it's disabled. Default is 5.

# Banphrases
BANPHRASES_IGNORE_SPACES=boolean # [OPTIONAL] If to make ban phrases checker ignore spaces. Default is false

# Discord Webhooks
DISCORD_WEBHOOK_URL=foo         # [OPTIONAL] URL of Webhook, found on Server Settings → Webhooks, if not defined then Discord Webhooks it's disabled
DISCORD_WEBHOOK_INTERVAL=number # [OPTIONAL] Number of millisecond in which to send the logs. Default is 1000

# Emote Only Flags
EMOTES_ONLY=bool #[OPTIONAL] sets emote only mode, Defaults to false
```

After doing all this you can just run ```node dubbot.js``` in your friendly neighborhood node terminal and all should be fine and dandy.
