const { ethers } = require('ethers')

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/APIKEY")

const addressReceiver = 'Wallet Address To Transfer To'

const privateKeys = [
  "PrivateKey01",
  "PrivateKey02",
  "PrivateKey03",
  "PrivateKey04",
  "PrivateKey05"
]
const gasPrice = 70


const bot = async =>{
    provider.on('block', async () => {
        console.log('Listening to new block, waiting ;)');
        for (let i = 0; i < privateKeys.length; i++){
            const _target = new ethers.Wallet(privateKeys[i]);
            const target = _target.connect(provider);
            const balance = await provider.getBalance(target.address);
            const txBuffer = ethers.utils.parseEther("0.008");
            
            if (balance.sub(txBuffer) > 0){
                console.log("New Account with Eth!");
                const amount = balance.sub(txBuffer);
                try {
                    await target.sendTransaction({
                        to: addressReceiver,
                        value: amount,
                        gasPrice: gasPrice * 1000000000,
                        gasLimit: 21000
                    });
                    console.log(`Success! transferred -->${ethers.utils.formatEther(balance)}`);
                } catch(e){
                    console.log(`error: ${e}`);
                }
            }
        }
    })
}
bot();
