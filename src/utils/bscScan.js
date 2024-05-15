import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const walletAddress = process.env.REACT_APP_walletAddress;
const baseUrl = 'https://api.bscscan.com/api';

export async function getSoldAmount() {
  let value = 0;
  try {
    const url = `${baseUrl}?module=account&action=tokentx&address=${walletAddress}&apikey=${API_KEY}`;
    const response = await axios.get(url);
    const transactions = response.data.result;

    transactions.forEach((transaction) => {
      //   console.log('Transaction Hash:', transaction.hash);
      //   console.log('Block Number:', transaction.blockNumber);
      //   console.log('From:', transaction.from);
      //   console.log('To:', transaction.to);
      //   console.log('Value:', transaction.value);
      value += transaction.value / 1000000000000000000;
      //   console.log('Gas Price:', transaction.gasPrice);
      //   console.log('Gas Used:', transaction.gasUsed);
      //   console.log(
      //     'Timestamp:',
      //     new Date(transaction.timeStamp * 1000).toISOString()
      //   );
      //   console.log('---------------------------------------');
    });
    return value / 175;
  } catch (error) {
    console.error('Error:', error);
  }
}
