const contractAddress = "0x4F70949eC1544DEeF962E0969dB5364bfcCAbEe7";
const abi = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "lotteryHistory",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "lotteryId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "manager",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "players",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "winner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "winnings",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "getPlayersCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getPlayerByIndex",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "getLatestWinner",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "getLatestWinnerInfo",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "enter",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [],
        "name": "pickWinner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getPlayers",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ]
    "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"enter\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLatestWinner\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLatestWinnerInfo\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getPlayerByIndex\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPlayers\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPlayersCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"lotteryHistory\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lotteryId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"manager\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pickWinner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"players\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"winner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"winnings\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/noshigachav3.sol\":\"Noshigachav3\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/noshigachav3.sol\":{\"keccak256\":\"0x4de51ea1e1a2c0a4470ebcee7fe81a9d2db5336dc0929ecbb20ec01ed631974b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ba1b887240053f6cebc66bf49c85e2810ee4758ab7d7027d1a6724ec12da4342\",\"dweb:/ipfs/QmY41bdeV9VxTgEdMjcaSjYy1MBNbT8kxeh6ptEJ531FHt\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600481905550611219806100686000396000f3fe6080604052600436106100c25760003560e01c8063a76594bf1161007f578063e580f47b11610059578063e580f47b14610249578063e97dcb6214610274578063f48f0d8d1461027e578063f71d96cb146102bb576100c2565b8063a76594bf146101c8578063d134474c146101f3578063dfbf53ae1461021e576100c2565b8063481c6a75146100c75780634fdd3b64146100f25780635d495aea1461011d5780636d6fe2301461013457806386956126146101715780638b5b9ccc1461019d575b600080fd5b3480156100d357600080fd5b506100dc6102f8565b6040516100e99190610de5565b60405180910390f35b3480156100fe57600080fd5b5061010761031c565b6040516101149190610e00565b60405180910390f35b34801561012957600080fd5b50610132610365565b005b34801561014057600080fd5b5061015b60048036038101906101569190610b08565b610702565b6040516101689190610e00565b60405180910390f35b34801561017d57600080fd5b50610186610735565b604051610194929190610e1b565b60405180910390f35b3480156101a957600080fd5b506101b26107a7565b6040516101bf9190610e44565b60405180910390f35b3480156101d457600080fd5b506101dd610835565b6040516101ea9190610ee6565b60405180910390f35b3480156101ff57600080fd5b50610208610842565b6040516102159190610ee6565b60405180910390f35b34801561022a57600080fd5b50610233610848565b6040516102409190610de5565b60405180910390f35b34801561025557600080fd5b5061025e61086e565b60405161026b9190610ee6565b60405180910390f35b61027c610874565b005b34801561028a57600080fd5b506102a560048036038101906102a09190610b08565b610922565b6040516102b29190610de5565b60405180910390f35b3480156102c757600080fd5b506102e260048036038101906102dd9190610b08565b6109d7565b6040516102ef9190610de5565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600560006001600454610331919061100e565b815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ea90610e66565b60405180910390fd5b60006001805490501161043b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043290610e86565b60405180910390fd5b600060018054905061044b610a16565b610455919061111d565b905060018181548110610491577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166108fc606460614761054c9190610fb4565b6105569190610f83565b9081150290604051600060405180830381858888f19350505050158015610581573d6000803e3d6000fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc60646061476105cb9190610fb4565b6105d59190610f83565b476105e0919061100e565b9081150290604051600060405180830381858888f1935050505015801561060b573d6000803e3d6000fd5b508060056000600454815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060046000815480929190610673906110ca565b9190505550600067ffffffffffffffff8111156106b9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156106e75781602001602082028036833780820191505090505b50600190805190602001906106fd929190610a4c565b505050565b60056020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600060056000600160045461074d919061100e565b815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000606460614761078f9190610fb4565b6107999190610f83565b905081819350935050509091565b6060600180548060200260200160405190810160405280929190818152602001828054801561082b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116107e1575b5050505050905090565b6000600180549050905090565b60025481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b662386f26fc1000034116108bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b490610ea6565b60405180910390fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600180549050821061096b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096290610ec6565b60405180910390fd5b600182815481106109a5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600181815481106109e757600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600044426001604051602001610a2e93929190610dac565b6040516020818303038152906040528051906020012060001c905090565b828054828255906000526020600020908101928215610ac5579160200282015b82811115610ac45782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610a6c565b5b509050610ad29190610ad6565b5090565b5b80821115610aef576000816000905550600101610ad7565b5090565b600081359050610b02816111cc565b92915050565b600060208284031215610b1a57600080fd5b6000610b2884828501610af3565b91505092915050565b6000610b3d8383610b70565b60208301905092915050565b6000610b558383610b8e565b60208301905092915050565b610b6a81611074565b82525050565b610b7981611062565b82525050565b610b8881611062565b82525050565b610b9781611062565b82525050565b6000610ba882610f26565b610bb28185610f56565b9350610bbd83610f01565b8060005b83811015610bee578151610bd58882610b31565b9750610be083610f3c565b925050600181019050610bc1565b5085935050505092915050565b6000610c0682610f31565b610c108185610f67565b9350610c1b83610f11565b8060005b83811015610c5357610c30826111ac565b610c3a8882610b49565b9750610c4583610f49565b925050600181019050610c1f565b5085935050505092915050565b6000610c6d602783610f72565b91507f4f6e6c7920746865206d616e616765722063616e2063616c6c2074686973206660008301527f756e6374696f6e000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610cd3601e83610f72565b91507f4e6f207061727469636970616e747320696e20746865206c6f747465727900006000830152602082019050919050565b6000610d13601f83610f72565b91507f4d696e696d756d20656e7472792066656520697320302e3031206574686572006000830152602082019050919050565b6000610d53601383610f72565b91507f496e646578206f7574206f6620626f756e6473000000000000000000000000006000830152602082019050919050565b610d8f816110a6565b82525050565b610da6610da1826110a6565b611113565b82525050565b6000610db88286610d95565b602082019150610dc88285610d95565b602082019150610dd88284610bfb565b9150819050949350505050565b6000602082019050610dfa6000830184610b7f565b92915050565b6000602082019050610e156000830184610b61565b92915050565b6000604082019050610e306000830185610b61565b610e3d6020830184610d86565b9392505050565b60006020820190508181036000830152610e5e8184610b9d565b905092915050565b60006020820190508181036000830152610e7f81610c60565b9050919050565b60006020820190508181036000830152610e9f81610cc6565b9050919050565b60006020820190508181036000830152610ebf81610d06565b9050919050565b60006020820190508181036000830152610edf81610d46565b9050919050565b6000602082019050610efb6000830184610d86565b92915050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081549050919050565b6000602082019050919050565b6000600182019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000610f8e826110a6565b9150610f99836110a6565b925082610fa957610fa861117d565b5b828204905092915050565b6000610fbf826110a6565b9150610fca836110a6565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156110035761100261114e565b5b828202905092915050565b6000611019826110a6565b9150611024836110a6565b9250828210156110375761103661114e565b5b828203905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061106d82611086565b9050919050565b600061107f82611086565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006110c36110be836111bf565b611042565b9050919050565b60006110d5826110a6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156111085761110761114e565b5b600182019050919050565b6000819050919050565b6000611128826110a6565b9150611133836110a6565b9250826111435761114261117d565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006111b882546110b0565b9050919050565b60008160001c9050919050565b6111d5816110a6565b81146111e057600080fd5b5056fea264697066735822122081e8054d71a4315dd0972f1cc39655e1819073b4d67d747eb62f88c011ad0da864736f6c63430008000033",
    "deployedBytecode": "0x6080604052600436106100c25760003560e01c8063a76594bf1161007f578063e580f47b11610059578063e580f47b14610249578063e97dcb6214610274578063f48f0d8d1461027e578063f71d96cb146102bb576100c2565b8063a76594bf146101c8578063d134474c146101f3578063dfbf53ae1461021e576100c2565b8063481c6a75146100c75780634fdd3b64146100f25780635d495aea1461011d5780636d6fe2301461013457806386956126146101715780638b5b9ccc1461019d575b600080fd5b3480156100d357600080fd5b506100dc6102f8565b6040516100e99190610de5565b60405180910390f35b3480156100fe57600080fd5b5061010761031c565b6040516101149190610e00565b60405180910390f35b34801561012957600080fd5b50610132610365565b005b34801561014057600080fd5b5061015b60048036038101906101569190610b08565b610702565b6040516101689190610e00565b60405180910390f35b34801561017d57600080fd5b50610186610735565b604051610194929190610e1b565b60405180910390f35b3480156101a957600080fd5b506101b26107a7565b6040516101bf9190610e44565b60405180910390f35b3480156101d457600080fd5b506101dd610835565b6040516101ea9190610ee6565b60405180910390f35b3480156101ff57600080fd5b50610208610842565b6040516102159190610ee6565b60405180910390f35b34801561022a57600080fd5b50610233610848565b6040516102409190610de5565b60405180910390f35b34801561025557600080fd5b5061025e61086e565b60405161026b9190610ee6565b60405180910390f35b61027c610874565b005b34801561028a57600080fd5b506102a560048036038101906102a09190610b08565b610922565b6040516102b29190610de5565b60405180910390f35b3480156102c757600080fd5b506102e260048036038101906102dd9190610b08565b6109d7565b6040516102ef9190610de5565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600560006001600454610331919061100e565b815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ea90610e66565b60405180910390fd5b60006001805490501161043b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043290610e86565b60405180910390fd5b600060018054905061044b610a16565b610455919061111d565b905060018181548110610491577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166108fc606460614761054c9190610fb4565b6105569190610f83565b9081150290604051600060405180830381858888f19350505050158015610581573d6000803e3d6000fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc60646061476105cb9190610fb4565b6105d59190610f83565b476105e0919061100e565b9081150290604051600060405180830381858888f1935050505015801561060b573d6000803e3d6000fd5b508060056000600454815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060046000815480929190610673906110ca565b9190505550600067ffffffffffffffff8111156106b9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156106e75781602001602082028036833780820191505090505b50600190805190602001906106fd929190610a4c565b505050565b60056020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600060056000600160045461074d919061100e565b815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000606460614761078f9190610fb4565b6107999190610f83565b905081819350935050509091565b6060600180548060200260200160405190810160405280929190818152602001828054801561082b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116107e1575b5050505050905090565b6000600180549050905090565b60025481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b662386f26fc1000034116108bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b490610ea6565b60405180910390fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600180549050821061096b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096290610ec6565b60405180910390fd5b600182815481106109a5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600181815481106109e757600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600044426001604051602001610a2e93929190610dac565b6040516020818303038152906040528051906020012060001c905090565b828054828255906000526020600020908101928215610ac5579160200282015b82811115610ac45782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610a6c565b5b509050610ad29190610ad6565b5090565b5b80821115610aef576000816000905550600101610ad7565b5090565b600081359050610b02816111cc565b92915050565b600060208284031215610b1a57600080fd5b6000610b2884828501610af3565b91505092915050565b6000610b3d8383610b70565b60208301905092915050565b6000610b558383610b8e565b60208301905092915050565b610b6a81611074565b82525050565b610b7981611062565b82525050565b610b8881611062565b82525050565b610b9781611062565b82525050565b6000610ba882610f26565b610bb28185610f56565b9350610bbd83610f01565b8060005b83811015610bee578151610bd58882610b31565b9750610be083610f3c565b925050600181019050610bc1565b5085935050505092915050565b6000610c0682610f31565b610c108185610f67565b9350610c1b83610f11565b8060005b83811015610c5357610c30826111ac565b610c3a8882610b49565b9750610c4583610f49565b925050600181019050610c1f565b5085935050505092915050565b6000610c6d602783610f72565b91507f4f6e6c7920746865206d616e616765722063616e2063616c6c2074686973206660008301527f756e6374696f6e000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610cd3601e83610f72565b91507f4e6f207061727469636970616e747320696e20746865206c6f747465727900006000830152602082019050919050565b6000610d13601f83610f72565b91507f4d696e696d756d20656e7472792066656520697320302e3031206574686572006000830152602082019050919050565b6000610d53601383610f72565b91507f496e646578206f7574206f6620626f756e6473000000000000000000000000006000830152602082019050919050565b610d8f816110a6565b82525050565b610da6610da1826110a6565b611113565b82525050565b6000610db88286610d95565b602082019150610dc88285610d95565b602082019150610dd88284610bfb565b9150819050949350505050565b6000602082019050610dfa6000830184610b7f565b92915050565b6000602082019050610e156000830184610b61565b92915050565b6000604082019050610e306000830185610b61565b610e3d6020830184610d86565b9392505050565b60006020820190508181036000830152610e5e8184610b9d565b905092915050565b60006020820190508181036000830152610e7f81610c60565b9050919050565b60006020820190508181036000830152610e9f81610cc6565b9050919050565b60006020820190508181036000830152610ebf81610d06565b9050919050565b60006020820190508181036000830152610edf81610d46565b9050919050565b6000602082019050610efb6000830184610d86565b92915050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081549050919050565b6000602082019050919050565b6000600182019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000610f8e826110a6565b9150610f99836110a6565b925082610fa957610fa861117d565b5b828204905092915050565b6000610fbf826110a6565b9150610fca836110a6565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156110035761100261114e565b5b828202905092915050565b6000611019826110a6565b9150611024836110a6565b9250828210156110375761103661114e565b5b828203905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061106d82611086565b9050919050565b600061107f82611086565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006110c36110be836111bf565b611042565b9050919050565b60006110d5826110a6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156111085761110761114e565b5b600182019050919050565b6000819050919050565b6000611128826110a6565b9150611133836110a6565b9250826111435761114261117d565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006111b882546110b0565b9050919050565b60008160001c9050919050565b6111d5816110a6565b81146111e057600080fd5b5056fea264697066735822122081e8054d71a4315dd0972f1cc39655e1819073b4d67d747eb62f88c011ad0da864736f6c63430008000033",
    "immutableReferences": {},
    "generatedSources": [],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:12404:2",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "59:87:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "69:29:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "91:6:2"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "78:12:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "78:20:2"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "69:5:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "134:5:2"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "107:26:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "107:33:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "107:33:2"
                  }
                ]
              },
              "name": "abi_decode_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "37:6:2",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "45:3:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "53:5:2",
                  "type": ""
                }
              ],
              "src": "7:139:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "218:196:2",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "264:16:2",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "273:1:2",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "276:1:2",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "266:6:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "266:12:2"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "266:12:2"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "239:7:2"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "248:9:2"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "235:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "235:23:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "260:2:2",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "231:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "231:32:2"
                    },
                    "nodeType": "YulIf",
                    "src": "228:2:2"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "290:117:2",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "305:15:2",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "319:1:2",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "309:6:2",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "334:63:2",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "369:9:2"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "380:6:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "365:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "365:22:2"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "389:7:2"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "344:20:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "344:53:2"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "334:6:2"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "188:9:2",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "199:7:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "211:6:2",
                  "type": ""
                }
              ],
              "src": "152:262:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "500:99:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "544:6:2"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "552:3:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address",
                        "nodeType": "YulIdentifier",
                        "src": "510:33:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "510:46:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "510:46:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "565:28:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "583:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "588:4:2",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "579:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "579:14:2"
                    },
                    "variableNames": [
                      {
                        "name": "updatedPos",
                        "nodeType": "YulIdentifier",
                        "src": "565:10:2"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encodeUpdatedPos_t_address_to_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "473:6:2",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "481:3:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updatedPos",
                  "nodeType": "YulTypedName",
                  "src": "489:10:2",
                  "type": ""
                }
              ],
              "src": "420:179:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "693:107:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "745:6:2"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "753:3:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_inplace",
                        "nodeType": "YulIdentifier",
                        "src": "703:41:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "703:54:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "703:54:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "766:28:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "784:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "789:4:2",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "780:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "780:14:2"
                    },
                    "variableNames": [
                      {
                        "name": "updatedPos",
                        "nodeType": "YulIdentifier",
                        "src": "766:10:2"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encodeUpdatedPos_t_address_to_t_address_inplace",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "666:6:2",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "674:3:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updatedPos",
                  "nodeType": "YulTypedName",
                  "src": "682:10:2",
                  "type": ""
                }
              ],
              "src": "605:195:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "887:61:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "904:3:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "935:5:2"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address_payable",
                            "nodeType": "YulIdentifier",
                            "src": "909:25:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "909:32:2"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "897:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "897:45:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "897:45:2"
                  }
                ]
              },
              "name": "abi_encode_t_address_payable_to_t_address_payable_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "875:5:2",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "882:3:2",
                  "type": ""
                }
              ],
              "src": "806:142:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1009:53:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1026:3:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1049:5:2"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "1031:17:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1031:24:2"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1019:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1019:37:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1019:37:2"
                  }
                ]
              },
              "name": "abi_encode_t_address_to_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "997:5:2",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1004:3:2",
                  "type": ""
                }
              ],
              "src": "954:108:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1133:53:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1150:3:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1173:5:2"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "1155:17:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1155:24:2"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1143:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1143:37:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1143:37:2"
                  }
                ]
              },
              "name": "abi_encode_t_address_to_t_address_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1121:5:2",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1128:3:2",
                  "type": ""
                }
              ],
              "src": "1068:118:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1255:53:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1272:3:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1295:5:2"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "1277:17:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1277:24:2"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1265:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1265:37:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1265:37:2"
                  }
                ]
              },
              "name": "abi_encode_t_address_to_t_address_inplace",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1243:5:2",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1250:3:2",
                  "type": ""
                }
              ],
              "src": "1192:116:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1468:608:2",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1478:68:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1540:5:2"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_array$_t_address_$dyn_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "1492:47:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1492:54:2"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "1482:6:2",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1555:93:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1636:3:2"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1641:6:2"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_array$_t_address_$dyn_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1562:73:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1562:86:2"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1555:3:2"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1657:71:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1722:5:2"
                        }
                      ],
                      "functionName": {
                        "name": "array_dataslot_t_array$_t_address_$dyn_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "1672:49:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1672:56:2"
                    },
                    "variables": [
                      {
                        "name": "baseRef",
                        "nodeType": "YulTypedName",
                        "src": "1661:7:2",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1737:21:2",
                    "value": {
                      "name": "baseRef",
                      "nodeType": "YulIdentifier",
                      "src": "1751:7:2"
                    },
                    "variables": [
                      {
                        "name": "srcPtr",
                        "nodeType": "YulTypedName",
                        "src": "1741:6:2",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1827:224:2",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "1841:34:2",
                          "value": {
                            "arguments": [
                              {
                                "name": "srcPtr",
                                "nodeType": "YulIdentifier",
                                "src": "1868:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "mload",
                              "nodeType": "YulIdentifier",
                              "src": "1862:5:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1862:13:2"
                          },
                          "variables": [
                            {
                              "name": "elementValue0",
                              "nodeType": "YulTypedName",
                              "src": "1845:13:2",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "1888:70:2",
                          "value": {
                            "arguments": [
                              {
                                "name": "elementValue0",
                                "nodeType": "YulIdentifier",
                                "src": "1939:13:2"
                              },
                              {
                                "name": "pos",
                                "nodeType": "YulIdentifier",
                                "src": "1954:3:2"
                              }
                            ],
                            "functionName": {
                              "name": "abi_encodeUpdatedPos_t_address_to_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "1895:43:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1895:63:2"
                          },
                          "variableNames": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1888:3:2"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "1971:70:2",
                          "value": {
                            "arguments": [
                              {
                                "name": "srcPtr",
                                "nodeType": "YulIdentifier",
                                "src": "2034:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "array_nextElement_t_array$_t_address_$dyn_memory_ptr",
                              "nodeType": "YulIdentifier",
                              "src": "1981:52:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1981:60:2"
                          },
                          "variableNames": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "1971:6:2"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "1789:1:2"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1792:6:2"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "1786:2:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1786:13:2"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "1800:18:2",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "1802:14:2",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "1811:1:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1814:1:2",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1807:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1807:9:2"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "1802:1:2"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "1771:14:2",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "1773:10:2",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1782:1:2",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "i",
                              "nodeType": "YulTypedName",
                              "src": "1777:1:2",
                              "type": ""
                            }
                          ]
                        }
                      ]
                    },
                    "src": "1767:284:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2060:10:2",
                    "value": {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2067:3:2"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2060:3:2"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_array$_t_address_$dyn_memory_ptr_to_t_array$_t_address_$dyn_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1447:5:2",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1454:3:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "1463:3:2",
                  "type": ""
                }
              ],
              "src": "1344:732:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2251:656:2",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2261:65:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2320:5:2"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_array$_t_address_$dyn_storage",
                        "nodeType": "YulIdentifier",
                        "src": "2275:44:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2275:51:2"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "2265:6:2",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2335:111:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2434:3:2"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2439:6:2"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_array$_t_address_$dyn_memory_ptr_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2342:91:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2342:104:2"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2335:3:2"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2455:68:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2517:5:2"
                        }
                      ],
                      "functionName": {
                        "name": "array_dataslot_t_array$_t_address_$dyn_storage",
                        "nodeType": "YulIdentifier",
                        "src": "2470:46:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2470:53:2"
                    },
                    "variables": [
                      {
                        "name": "baseRef",
                        "nodeType": "YulTypedName",
                        "src": "2459:7:2",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2532:21:2",
                    "value": {
                      "name": "baseRef",
                      "nodeType": "YulIdentifier",
                      "src": "2546:7:2"
                    },
                    "variables": [
                      {
                        "name": "srcPtr",
                        "nodeType": "YulTypedName",
                        "src": "2536:6:2",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2622:260:2",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "2636:65:2",
                          "value": {
                            "arguments": [
                              {
                                "name": "srcPtr",
                                "nodeType": "YulIdentifier",
                                "src": "2694:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "read_from_storage_offset_0_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "2657:36:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2657:44:2"
                          },
                          "variables": [
                            {
                              "name": "elementValue0",
                              "nodeType": "YulTypedName",
                              "src": "2640:13:2",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "2714:78:2",
                          "value": {
                            "arguments": [
                              {
                                "name": "elementValue0",
                                "nodeType": "YulIdentifier",
                                "src": "2773:13:2"
                              },
                              {
                                "name": "pos",
                                "nodeType": "YulIdentifier",
                                "src": "2788:3:2"
                              }
                            ],
                            "functionName": {
                              "name": "abi_encodeUpdatedPos_t_address_to_t_address_inplace",
                              "nodeType": "YulIdentifier",
                              "src": "2721:51:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2721:71:2"
                          },
                          "variableNames": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "2714:3:2"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "2805:67:2",
                          "value": {
                            "arguments": [
                              {
                                "name": "srcPtr",
                                "nodeType": "YulIdentifier",
                                "src": "2865:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "array_nextElement_t_array$_t_address_$dyn_storage",
                              "nodeType": "YulIdentifier",
                              "src": "2815:49:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2815:57:2"
                          },
                          "variableNames": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "2805:6:2"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "2584:1:2"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2587:6:2"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "2581:2:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2581:13:2"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "2595:18:2",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "2597:14:2",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "2606:1:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2609:1:2",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2602:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2602:9:2"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "2597:1:2"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "2566:14:2",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "2568:10:2",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2577:1:2",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "i",
                              "nodeType": "YulTypedName",
                              "src": "2572:1:2",
                              "type": ""
                            }
                          ]
                        }
                      ]
                    },
                    "src": "2562:320:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2891:10:2",
                    "value": {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2898:3:2"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2891:3:2"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_array$_t_address_$dyn_storage_to_t_array$_t_address_$dyn_memory_ptr_nonPadded_inplace_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2230:5:2",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "2237:3:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "2246:3:2",
                  "type": ""
                }
              ],
              "src": "2112:795:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3059:225:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3069:74:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3135:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3140:2:2",
                          "type": "",
                          "value": "39"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3076:58:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3076:67:2"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3069:3:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3164:3:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3169:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3160:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3160:11:2"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "3173:34:2",
                          "type": "",
                          "value": "Only the manager can call this f"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3153:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3153:55:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3153:55:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3229:3:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3234:2:2",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3225:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3225:12:2"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "3239:9:2",
                          "type": "",
                          "value": "unction"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3218:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3218:31:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3218:31:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3259:19:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3270:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3275:2:2",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3266:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3266:12:2"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3259:3:2"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_18c023f83301df1c29c8422fc38f30a87711a3385fbb92b6c73211c3a9379570_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3047:3:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3055:3:2",
                  "type": ""
                }
              ],
              "src": "2913:371:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3436:182:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3446:74:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3512:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3517:2:2",
                          "type": "",
                          "value": "30"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3453:58:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3453:67:2"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3446:3:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3541:3:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3546:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3537:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3537:11:2"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "3550:32:2",
                          "type": "",
                          "value": "No participants in the lottery"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3530:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3530:53:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3530:53:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3593:19:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3604:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3609:2:2",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3600:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3600:12:2"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3593:3:2"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_9134d835a173bd374f6a11e1d53fa96984ec9491b867df78baeca4c974ae9b31_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3424:3:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3432:3:2",
                  "type": ""
                }
              ],
              "src": "3290:328:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3770:183:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3780:74:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3846:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3851:2:2",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3787:58:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3787:67:2"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3780:3:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3875:3:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3880:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3871:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3871:11:2"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "3884:33:2",
                          "type": "",
                          "value": "Minimum entry fee is 0.01 ether"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3864:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3864:54:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3864:54:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3928:19:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3939:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3944:2:2",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3935:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3935:12:2"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3928:3:2"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_aeb462cb4421fe27db027e82cf1801c697f2abb8f77bf79b36906675a26d7ddb_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3758:3:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3766:3:2",
                  "type": ""
                }
              ],
              "src": "3624:329:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4105:171:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4115:74:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "4181:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4186:2:2",
                          "type": "",
                          "value": "19"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4122:58:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4122:67:2"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4115:3:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "4210:3:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4215:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4206:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4206:11:2"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "4219:21:2",
                          "type": "",
                          "value": "Index out of bounds"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4199:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4199:42:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4199:42:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4251:19:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "4262:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4267:2:2",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4258:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4258:12:2"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "4251:3:2"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_dd00b67a545791a54dd99d9c09eb42099756ea4ee2bd47188784c22234589367_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "4093:3:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "4101:3:2",
                  "type": ""
                }
              ],
              "src": "3959:317:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4347:53:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "4364:3:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "4387:5:2"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "4369:17:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4369:24:2"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4357:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4357:37:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4357:37:2"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4335:5:2",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "4342:3:2",
                  "type": ""
                }
              ],
              "src": "4282:118:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4489:74:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "4506:3:2"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "4549:5:2"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "4531:17:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4531:24:2"
                            }
                          ],
                          "functionName": {
                            "name": "leftAlign_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "4511:19:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4511:45:2"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4499:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4499:58:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4499:58:2"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4477:5:2",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "4484:3:2",
                  "type": ""
                }
              ],
              "src": "4406:157:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4788:392:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4861:6:2"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "4870:3:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4799:61:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4799:75:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4799:75:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4883:19:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "4894:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4899:2:2",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4890:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4890:12:2"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4883:3:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "4974:6:2"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "4983:3:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4912:61:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4912:75:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4912:75:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4996:19:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "5007:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5012:2:2",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5003:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5003:12:2"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4996:3:2"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5025:129:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "5141:6:2"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "5150:3:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_array$_t_address_$dyn_storage_to_t_array$_t_address_$dyn_memory_ptr_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "5032:108:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5032:122:2"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5025:3:2"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5164:10:2",
                    "value": {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "5171:3:2"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "5164:3:2"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_packed_t_uint256_t_uint256_t_array$_t_address_$dyn_storage__to_t_uint256_t_uint256_t_array$_t_address_$dyn_memory_ptr__nonPadded_inplace_fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "4751:3:2",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "4757:6:2",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "4765:6:2",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4773:6:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "4784:3:2",
                  "type": ""
                }
              ],
              "src": "4569:611:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5284:124:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5294:26:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5306:9:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5317:2:2",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5302:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5302:18:2"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5294:4:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5374:6:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5387:9:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5398:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5383:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5383:17:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "5330:43:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5330:71:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5330:71:2"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5256:9:2",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "5268:6:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5279:4:2",
                  "type": ""
                }
              ],
              "src": "5186:222:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5528:140:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5538:26:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5550:9:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5561:2:2",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5546:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5546:18:2"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5538:4:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5634:6:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5647:9:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5658:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5643:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5643:17:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_payable_to_t_address_payable_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "5574:59:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5574:87:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5574:87:2"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5500:9:2",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "5512:6:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5523:4:2",
                  "type": ""
                }
              ],
              "src": "5414:254:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5816:222:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5826:26:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5838:9:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5849:2:2",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5834:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5834:18:2"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5826:4:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5922:6:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5935:9:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5946:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5931:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5931:17:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_payable_to_t_address_payable_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "5862:59:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5862:87:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5862:87:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "6003:6:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6016:9:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6027:2:2",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6012:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6012:18:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "5959:43:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5959:72:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5959:72:2"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_payable_t_uint256__to_t_address_payable_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5780:9:2",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "5792:6:2",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "5800:6:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5811:4:2",
                  "type": ""
                }
              ],
              "src": "5674:364:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6192:225:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6202:26:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6214:9:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6225:2:2",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6210:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6210:18:2"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6202:4:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6249:9:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6260:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6245:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6245:17:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "6268:4:2"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6274:9:2"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "6264:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6264:20:2"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6238:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6238:47:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6238:47:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6294:116:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "6396:6:2"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "6405:4:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_array$_t_address_$dyn_memory_ptr_to_t_array$_t_address_$dyn_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6302:93:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6302:108:2"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6294:4:2"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_array$_t_address_$dyn_memory_ptr__to_t_array$_t_address_$dyn_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6164:9:2",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "6176:6:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6187:4:2",
                  "type": ""
                }
              ],
              "src": "6044:373:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6594:248:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6604:26:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6616:9:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6627:2:2",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6612:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6612:18:2"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6604:4:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6651:9:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6662:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6647:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6647:17:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "6670:4:2"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6676:9:2"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "6666:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6666:20:2"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6640:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6640:47:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6640:47:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6696:139:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "6830:4:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_18c023f83301df1c29c8422fc38f30a87711a3385fbb92b6c73211c3a9379570_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6704:124:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6704:131:2"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6696:4:2"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_18c023f83301df1c29c8422fc38f30a87711a3385fbb92b6c73211c3a9379570__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6574:9:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6589:4:2",
                  "type": ""
                }
              ],
              "src": "6423:419:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7019:248:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "7029:26:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7041:9:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7052:2:2",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7037:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7037:18:2"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7029:4:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7076:9:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7087:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7072:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7072:17:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "7095:4:2"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7101:9:2"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "7091:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7091:20:2"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7065:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7065:47:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7065:47:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7121:139:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "7255:4:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_9134d835a173bd374f6a11e1d53fa96984ec9491b867df78baeca4c974ae9b31_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "7129:124:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7129:131:2"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7121:4:2"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_9134d835a173bd374f6a11e1d53fa96984ec9491b867df78baeca4c974ae9b31__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6999:9:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "7014:4:2",
                  "type": ""
                }
              ],
              "src": "6848:419:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7444:248:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "7454:26:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7466:9:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7477:2:2",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7462:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7462:18:2"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7454:4:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7501:9:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7512:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7497:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7497:17:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "7520:4:2"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7526:9:2"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "7516:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7516:20:2"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7490:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7490:47:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7490:47:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7546:139:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "7680:4:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_aeb462cb4421fe27db027e82cf1801c697f2abb8f77bf79b36906675a26d7ddb_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "7554:124:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7554:131:2"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7546:4:2"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_aeb462cb4421fe27db027e82cf1801c697f2abb8f77bf79b36906675a26d7ddb__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "7424:9:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "7439:4:2",
                  "type": ""
                }
              ],
              "src": "7273:419:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7869:248:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "7879:26:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7891:9:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7902:2:2",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7887:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7887:18:2"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7879:4:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7926:9:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7937:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7922:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7922:17:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "7945:4:2"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7951:9:2"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "7941:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7941:20:2"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7915:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7915:47:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7915:47:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7971:139:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "8105:4:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_dd00b67a545791a54dd99d9c09eb42099756ea4ee2bd47188784c22234589367_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "7979:124:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7979:131:2"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7971:4:2"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_dd00b67a545791a54dd99d9c09eb42099756ea4ee2bd47188784c22234589367__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "7849:9:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "7864:4:2",
                  "type": ""
                }
              ],
              "src": "7698:419:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8221:124:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8231:26:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "8243:9:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8254:2:2",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8239:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8239:18:2"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8231:4:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "8311:6:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8324:9:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8335:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8320:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8320:17:2"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "8267:43:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8267:71:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8267:71:2"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "8193:9:2",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "8205:6:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "8216:4:2",
                  "type": ""
                }
              ],
              "src": "8123:222:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8423:60:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8433:11:2",
                    "value": {
                      "name": "ptr",
                      "nodeType": "YulIdentifier",
                      "src": "8441:3:2"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "8433:4:2"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8454:22:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "8466:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8471:4:2",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8462:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8462:14:2"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "8454:4:2"
                      }
                    ]
                  }
                ]
              },
              "name": "array_dataslot_t_array$_t_address_$dyn_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "ptr",
                  "nodeType": "YulTypedName",
                  "src": "8410:3:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "8418:4:2",
                  "type": ""
                }
              ],
              "src": "8351:132:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8558:87:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8568:11:2",
                    "value": {
                      "name": "ptr",
                      "nodeType": "YulIdentifier",
                      "src": "8576:3:2"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "8568:4:2"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8596:1:2",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "8599:3:2"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8589:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8589:14:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8589:14:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8612:26:2",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8630:1:2",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8633:4:2",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "keccak256",
                        "nodeType": "YulIdentifier",
                        "src": "8620:9:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8620:18:2"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "8612:4:2"
                      }
                    ]
                  }
                ]
              },
              "name": "array_dataslot_t_array$_t_address_$dyn_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "ptr",
                  "nodeType": "YulTypedName",
                  "src": "8545:3:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "8553:4:2",
                  "type": ""
                }
              ],
              "src": "8489:156:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8725:40:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8736:22:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "8752:5:2"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "8746:5:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8746:12:2"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "8736:6:2"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_array$_t_address_$dyn_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "8708:5:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "8718:6:2",
                  "type": ""
                }
              ],
              "src": "8651:114:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8842:40:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8853:22:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "8869:5:2"
                        }
                      ],
                      "functionName": {
                        "name": "sload",
                        "nodeType": "YulIdentifier",
                        "src": "8863:5:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8863:12:2"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "8853:6:2"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_array$_t_address_$dyn_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "8825:5:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "8835:6:2",
                  "type": ""
                }
              ],
              "src": "8771:111:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8963:38:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8973:22:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "8985:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8990:4:2",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8981:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8981:14:2"
                    },
                    "variableNames": [
                      {
                        "name": "next",
                        "nodeType": "YulIdentifier",
                        "src": "8973:4:2"
                      }
                    ]
                  }
                ]
              },
              "name": "array_nextElement_t_array$_t_address_$dyn_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "ptr",
                  "nodeType": "YulTypedName",
                  "src": "8950:3:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "next",
                  "nodeType": "YulTypedName",
                  "src": "8958:4:2",
                  "type": ""
                }
              ],
              "src": "8888:113:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9079:38:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9089:22:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "9101:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9106:4:2",
                          "type": "",
                          "value": "0x01"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "9097:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9097:14:2"
                    },
                    "variableNames": [
                      {
                        "name": "next",
                        "nodeType": "YulIdentifier",
                        "src": "9089:4:2"
                      }
                    ]
                  }
                ]
              },
              "name": "array_nextElement_t_array$_t_address_$dyn_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "ptr",
                  "nodeType": "YulTypedName",
                  "src": "9066:3:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "next",
                  "nodeType": "YulTypedName",
                  "src": "9074:4:2",
                  "type": ""
                }
              ],
              "src": "9007:110:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9234:73:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "9251:3:2"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "9256:6:2"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9244:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9244:19:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9244:19:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9272:29:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "9291:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9296:4:2",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "9287:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9287:14:2"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "9272:11:2"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_array$_t_address_$dyn_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "9206:3:2",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "9211:6:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "9222:11:2",
                  "type": ""
                }
              ],
              "src": "9123:184:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9442:34:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9452:18:2",
                    "value": {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "9467:3:2"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "9452:11:2"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_array$_t_address_$dyn_memory_ptr_nonPadded_inplace_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "9414:3:2",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "9419:6:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "9430:11:2",
                  "type": ""
                }
              ],
              "src": "9313:163:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9578:73:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "9595:3:2"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "9600:6:2"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9588:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9588:19:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9588:19:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9616:29:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "9635:3:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9640:4:2",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "9631:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9631:14:2"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "9616:11:2"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "9550:3:2",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "9555:6:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "9566:11:2",
                  "type": ""
                }
              ],
              "src": "9482:169:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9699:143:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9709:25:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "9732:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "9714:17:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9714:20:2"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9709:1:2"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9743:25:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "9766:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "9748:17:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9748:20:2"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9743:1:2"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "9790:22:2",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x12",
                              "nodeType": "YulIdentifier",
                              "src": "9792:16:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9792:18:2"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "9792:18:2"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "9787:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "9780:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9780:9:2"
                    },
                    "nodeType": "YulIf",
                    "src": "9777:2:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9822:14:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "9831:1:2"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "9834:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "9827:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9827:9:2"
                    },
                    "variableNames": [
                      {
                        "name": "r",
                        "nodeType": "YulIdentifier",
                        "src": "9822:1:2"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_div_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "9688:1:2",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "9691:1:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "r",
                  "nodeType": "YulTypedName",
                  "src": "9697:1:2",
                  "type": ""
                }
              ],
              "src": "9657:185:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9896:300:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9906:25:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "9929:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "9911:17:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9911:20:2"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9906:1:2"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9940:25:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "9963:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "9945:17:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9945:20:2"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9940:1:2"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "10138:22:2",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "10140:16:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10140:18:2"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "10140:18:2"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "10050:1:2"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "10043:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10043:9:2"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "10036:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10036:17:2"
                        },
                        {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "10058:1:2"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10065:66:2",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                },
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "10133:1:2"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "10061:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10061:74:2"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "10055:2:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10055:81:2"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "10032:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10032:105:2"
                    },
                    "nodeType": "YulIf",
                    "src": "10029:2:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10170:20:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "10185:1:2"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "10188:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "10181:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10181:9:2"
                    },
                    "variableNames": [
                      {
                        "name": "product",
                        "nodeType": "YulIdentifier",
                        "src": "10170:7:2"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_mul_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "9879:1:2",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "9882:1:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "product",
                  "nodeType": "YulTypedName",
                  "src": "9888:7:2",
                  "type": ""
                }
              ],
              "src": "9848:348:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10247:146:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10257:25:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "10280:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "10262:17:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10262:20:2"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10257:1:2"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10291:25:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "10314:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "10296:17:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10296:20:2"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10291:1:2"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "10338:22:2",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "10340:16:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10340:18:2"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "10340:18:2"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "10332:1:2"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "10335:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "10329:2:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10329:8:2"
                    },
                    "nodeType": "YulIf",
                    "src": "10326:2:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10370:17:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "10382:1:2"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "10385:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "sub",
                        "nodeType": "YulIdentifier",
                        "src": "10378:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10378:9:2"
                    },
                    "variableNames": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "10370:4:2"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_sub_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "10233:1:2",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "10236:1:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "diff",
                  "nodeType": "YulTypedName",
                  "src": "10242:4:2",
                  "type": ""
                }
              ],
              "src": "10202:191:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10457:81:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10467:65:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "10482:5:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10489:42:2",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "10478:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10478:54:2"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "10467:7:2"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_from_storage_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "10439:5:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "10449:7:2",
                  "type": ""
                }
              ],
              "src": "10399:139:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10589:51:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10599:35:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "10628:5:2"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "10610:17:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10610:24:2"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "10599:7:2"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "10571:5:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "10581:7:2",
                  "type": ""
                }
              ],
              "src": "10544:96:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10699:51:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10709:35:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "10738:5:2"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "10720:17:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10720:24:2"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "10709:7:2"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address_payable",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "10681:5:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "10691:7:2",
                  "type": ""
                }
              ],
              "src": "10646:104:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10801:81:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10811:65:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "10826:5:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10833:42:2",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "10822:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10822:54:2"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "10811:7:2"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint160",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "10783:5:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "10793:7:2",
                  "type": ""
                }
              ],
              "src": "10756:126:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10933:32:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10943:16:2",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "10954:5:2"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "10943:7:2"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "10915:5:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "10925:7:2",
                  "type": ""
                }
              ],
              "src": "10888:77:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11046:91:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "11056:75:2",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "slot_value",
                              "nodeType": "YulIdentifier",
                              "src": "11119:10:2"
                            }
                          ],
                          "functionName": {
                            "name": "shift_right_0_unsigned",
                            "nodeType": "YulIdentifier",
                            "src": "11096:22:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11096:34:2"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_from_storage_t_address",
                        "nodeType": "YulIdentifier",
                        "src": "11065:30:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11065:66:2"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "11056:5:2"
                      }
                    ]
                  }
                ]
              },
              "name": "extract_from_storage_value_offset_0t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot_value",
                  "nodeType": "YulTypedName",
                  "src": "11025:10:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "11040:5:2",
                  "type": ""
                }
              ],
              "src": "10971:166:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11186:190:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "11196:33:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "11223:5:2"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "11205:17:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11205:24:2"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "11196:5:2"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "11319:22:2",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "11321:16:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11321:18:2"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "11321:18:2"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "11244:5:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11251:66:2",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "11241:2:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11241:77:2"
                    },
                    "nodeType": "YulIf",
                    "src": "11238:2:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "11350:20:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "11361:5:2"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11368:1:2",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "11357:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11357:13:2"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "11350:3:2"
                      }
                    ]
                  }
                ]
              },
              "name": "increment_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "11172:5:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "11182:3:2",
                  "type": ""
                }
              ],
              "src": "11143:233:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11429:32:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "11439:16:2",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "11450:5:2"
                    },
                    "variableNames": [
                      {
                        "name": "aligned",
                        "nodeType": "YulIdentifier",
                        "src": "11439:7:2"
                      }
                    ]
                  }
                ]
              },
              "name": "leftAlign_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "11411:5:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "aligned",
                  "nodeType": "YulTypedName",
                  "src": "11421:7:2",
                  "type": ""
                }
              ],
              "src": "11382:79:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11501:142:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "11511:25:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "11534:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "11516:17:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11516:20:2"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "11511:1:2"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "11545:25:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "11568:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "11550:17:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11550:20:2"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "11545:1:2"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "11592:22:2",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x12",
                              "nodeType": "YulIdentifier",
                              "src": "11594:16:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11594:18:2"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "11594:18:2"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "11589:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "11582:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11582:9:2"
                    },
                    "nodeType": "YulIf",
                    "src": "11579:2:2"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "11623:14:2",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "11632:1:2"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "11635:1:2"
                        }
                      ],
                      "functionName": {
                        "name": "mod",
                        "nodeType": "YulIdentifier",
                        "src": "11628:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11628:9:2"
                    },
                    "variableNames": [
                      {
                        "name": "r",
                        "nodeType": "YulIdentifier",
                        "src": "11623:1:2"
                      }
                    ]
                  }
                ]
              },
              "name": "mod_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "11490:1:2",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "11493:1:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "r",
                  "nodeType": "YulTypedName",
                  "src": "11499:1:2",
                  "type": ""
                }
              ],
              "src": "11467:176:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11677:152:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11694:1:2",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11697:77:2",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11687:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11687:88:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11687:88:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11791:1:2",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11794:4:2",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11784:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11784:15:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11784:15:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11815:1:2",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11818:4:2",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "11808:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11808:15:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11808:15:2"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "11649:180:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11863:152:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11880:1:2",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11883:77:2",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11873:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11873:88:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11873:88:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11977:1:2",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11980:4:2",
                          "type": "",
                          "value": "0x12"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11970:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11970:15:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11970:15:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12001:1:2",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12004:4:2",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "11994:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11994:15:2"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11994:15:2"
                  }
                ]
              },
              "name": "panic_error_0x12",
              "nodeType": "YulFunctionDefinition",
              "src": "11835:180:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12082:83:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "12092:66:2",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "slot",
                              "nodeType": "YulIdentifier",
                              "src": "12152:4:2"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nodeType": "YulIdentifier",
                            "src": "12146:5:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12146:11:2"
                        }
                      ],
                      "functionName": {
                        "name": "extract_from_storage_value_offset_0t_address",
                        "nodeType": "YulIdentifier",
                        "src": "12101:44:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12101:57:2"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "12092:5:2"
                      }
                    ]
                  }
                ]
              },
              "name": "read_from_storage_offset_0_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "12067:4:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "12076:5:2",
                  "type": ""
                }
              ],
              "src": "12021:144:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12222:51:2",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "12232:34:2",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12257:1:2",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "12260:5:2"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "12253:3:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12253:13:2"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "12232:8:2"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_right_0_unsigned",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "12203:5:2",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "12213:8:2",
                  "type": ""
                }
              ],
              "src": "12171:102:2"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12322:79:2",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "12379:16:2",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "12388:1:2",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "12391:1:2",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "12381:6:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12381:12:2"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "12381:12:2"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "12345:5:2"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "12370:5:2"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "12352:17:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12352:24:2"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "12342:2:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12342:35:2"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "12335:6:2"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12335:43:2"
                    },
                    "nodeType": "YulIf",
                    "src": "12332:2:2"
                  }
                ]
              },
              "name": "validator_revert_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "12315:5:2",
                  "type": ""
                }
              ],
              "src": "12279:122:2"
            }
          ]
        },
        "contents": "{\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encodeUpdatedPos_t_address_to_t_address(value0, pos) -> updatedPos {\n        abi_encode_t_address_to_t_address(value0, pos)\n        updatedPos := add(pos, 0x20)\n    }\n\n    function abi_encodeUpdatedPos_t_address_to_t_address_inplace(value0, pos) -> updatedPos {\n        abi_encode_t_address_to_t_address_inplace(value0, pos)\n        updatedPos := add(pos, 0x20)\n    }\n\n    function abi_encode_t_address_payable_to_t_address_payable_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address_payable(value))\n    }\n\n    function abi_encode_t_address_to_t_address(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_t_address_to_t_address_inplace(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    // address[] -> address[]\n    function abi_encode_t_array$_t_address_$dyn_memory_ptr_to_t_array$_t_address_$dyn_memory_ptr_fromStack(value, pos)  -> end  {\n        let length := array_length_t_array$_t_address_$dyn_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_array$_t_address_$dyn_memory_ptr_fromStack(pos, length)\n        let baseRef := array_dataslot_t_array$_t_address_$dyn_memory_ptr(value)\n        let srcPtr := baseRef\n        for { let i := 0 } lt(i, length) { i := add(i, 1) }\n        {\n            let elementValue0 := mload(srcPtr)\n            pos := abi_encodeUpdatedPos_t_address_to_t_address(elementValue0, pos)\n            srcPtr := array_nextElement_t_array$_t_address_$dyn_memory_ptr(srcPtr)\n        }\n        end := pos\n    }\n\n    // address[] -> address[]\n    function abi_encode_t_array$_t_address_$dyn_storage_to_t_array$_t_address_$dyn_memory_ptr_nonPadded_inplace_fromStack(value, pos)  -> end  {\n        let length := array_length_t_array$_t_address_$dyn_storage(value)\n        pos := array_storeLengthForEncoding_t_array$_t_address_$dyn_memory_ptr_nonPadded_inplace_fromStack(pos, length)\n        let baseRef := array_dataslot_t_array$_t_address_$dyn_storage(value)\n        let srcPtr := baseRef\n        for { let i := 0 } lt(i, length) { i := add(i, 1) }\n        {\n            let elementValue0 := read_from_storage_offset_0_t_address(srcPtr)\n            pos := abi_encodeUpdatedPos_t_address_to_t_address_inplace(elementValue0, pos)\n            srcPtr := array_nextElement_t_array$_t_address_$dyn_storage(srcPtr)\n        }\n        end := pos\n    }\n\n    function abi_encode_t_stringliteral_18c023f83301df1c29c8422fc38f30a87711a3385fbb92b6c73211c3a9379570_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 39)\n\n        mstore(add(pos, 0), \"Only the manager can call this f\")\n\n        mstore(add(pos, 32), \"unction\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_9134d835a173bd374f6a11e1d53fa96984ec9491b867df78baeca4c974ae9b31_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 30)\n\n        mstore(add(pos, 0), \"No participants in the lottery\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_aeb462cb4421fe27db027e82cf1801c697f2abb8f77bf79b36906675a26d7ddb_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n\n        mstore(add(pos, 0), \"Minimum entry fee is 0.01 ether\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_dd00b67a545791a54dd99d9c09eb42099756ea4ee2bd47188784c22234589367_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 19)\n\n        mstore(add(pos, 0), \"Index out of bounds\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack(value, pos) {\n        mstore(pos, leftAlign_t_uint256(cleanup_t_uint256(value)))\n    }\n\n    function abi_encode_tuple_packed_t_uint256_t_uint256_t_array$_t_address_$dyn_storage__to_t_uint256_t_uint256_t_array$_t_address_$dyn_memory_ptr__nonPadded_inplace_fromStack_reversed(pos , value2, value1, value0) -> end {\n\n        abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack(value0,  pos)\n        pos := add(pos, 32)\n\n        abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack(value1,  pos)\n        pos := add(pos, 32)\n\n        pos := abi_encode_t_array$_t_address_$dyn_storage_to_t_array$_t_address_$dyn_memory_ptr_nonPadded_inplace_fromStack(value2,  pos)\n\n        end := pos\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_payable_to_t_address_payable_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_address_payable_t_uint256__to_t_address_payable_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_payable_to_t_address_payable_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function abi_encode_tuple_t_array$_t_address_$dyn_memory_ptr__to_t_array$_t_address_$dyn_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_array$_t_address_$dyn_memory_ptr_to_t_array$_t_address_$dyn_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_18c023f83301df1c29c8422fc38f30a87711a3385fbb92b6c73211c3a9379570__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_18c023f83301df1c29c8422fc38f30a87711a3385fbb92b6c73211c3a9379570_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_9134d835a173bd374f6a11e1d53fa96984ec9491b867df78baeca4c974ae9b31__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9134d835a173bd374f6a11e1d53fa96984ec9491b867df78baeca4c974ae9b31_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_aeb462cb4421fe27db027e82cf1801c697f2abb8f77bf79b36906675a26d7ddb__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_aeb462cb4421fe27db027e82cf1801c697f2abb8f77bf79b36906675a26d7ddb_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_dd00b67a545791a54dd99d9c09eb42099756ea4ee2bd47188784c22234589367__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_dd00b67a545791a54dd99d9c09eb42099756ea4ee2bd47188784c22234589367_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_dataslot_t_array$_t_address_$dyn_memory_ptr(ptr) -> data {\n        data := ptr\n\n        data := add(ptr, 0x20)\n\n    }\n\n    function array_dataslot_t_array$_t_address_$dyn_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function array_length_t_array$_t_address_$dyn_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_length_t_array$_t_address_$dyn_storage(value) -> length {\n\n        length := sload(value)\n\n    }\n\n    function array_nextElement_t_array$_t_address_$dyn_memory_ptr(ptr) -> next {\n        next := add(ptr, 0x20)\n    }\n\n    function array_nextElement_t_array$_t_address_$dyn_storage(ptr) -> next {\n        next := add(ptr, 0x01)\n    }\n\n    function array_storeLengthForEncoding_t_array$_t_address_$dyn_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function array_storeLengthForEncoding_t_array$_t_address_$dyn_memory_ptr_nonPadded_inplace_fromStack(pos, length) -> updated_pos {\n        updated_pos := pos\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function cleanup_from_storage_t_address(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_address_payable(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function extract_from_storage_value_offset_0t_address(slot_value) -> value {\n        value := cleanup_from_storage_t_address(shift_right_0_unsigned(slot_value))\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function leftAlign_t_uint256(value) -> aligned {\n        aligned := value\n    }\n\n    function mod_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function read_from_storage_offset_0_t_address(slot) -> value {\n        value := extract_from_storage_value_offset_0t_address(sload(slot))\n\n    }\n\n    function shift_right_0_unsigned(value) -> newValue {\n        newValue :=\n\n        shr(0, value)\n\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
        "id": 2,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "60:2329:1:-:0;;;295:77;;;;;;;;;;330:10;320:7;;:20;;;;;;;;;;;;;;;;;;363:1;351:9;:13;;;;60:2329;;;;;;",
    "deployedSourceMap": "60:2329:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;89:22;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;663:120;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1528:756;;;;;;;;;;;;;:::i;:::-;;232:54;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;791:317;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;2292:94;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;380;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;149:20;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;176:21;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;204;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1116:161;;;:::i;:::-;;482:173;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;118:24;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;89:22;;;;;;;;;;;;:::o;663:120::-;711:15;746:14;:29;773:1;761:9;;:13;;;;:::i;:::-;746:29;;;;;;;;;;;;;;;;;;;;;739:36;;663:120;:::o;1528:756::-;1604:7;;;;;;;;;;1590:21;;:10;:21;;;1568:110;;;;;;;;;;;;:::i;:::-;;;;;;;;;1714:1;1697:7;:14;;;;:18;1689:61;;;;;;;;;;;;:::i;:::-;;;;;;;;;1761:10;1785:7;:14;;;;1774:8;:6;:8::i;:::-;:25;;;;:::i;:::-;1761:38;;1819:7;1827:5;1819:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1810:6;;:23;;;;;;;;;;;;;;;;;;1844:29;1884:6;;;;;;;;;;;1844:47;;1902:13;:22;;:58;1956:3;1950:2;1926:21;:26;;;;:::i;:::-;1925:34;;;;:::i;:::-;1902:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1979:7;;;;;;;;;;1971:25;;:109;2066:3;2060:2;2036:21;:26;;;;:::i;:::-;2035:34;;;;:::i;:::-;2011:21;:58;;;;:::i;:::-;1971:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:13;2128:14;:25;2143:9;;2128:25;;;;;;;;;;;;:41;;;;;;;;;;;;;;;;;;2180:9;;:11;;;;;;;;;:::i;:::-;;;;;;2228:1;2214:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2204:7;:26;;;;;;;;;;;;:::i;:::-;;1528:756;;:::o;232:54::-;;;;;;;;;;;;;;;;;;;;;;:::o;791:317::-;843:15;860:4;877:28;908:14;:29;935:1;923:9;;:13;;;;:::i;:::-;908:29;;;;;;;;;;;;;;;;;;;;;877:60;;948:19;1001:3;995:2;971:21;:26;;;;:::i;:::-;970:34;;;;:::i;:::-;948:56;;1071:12;1085:14;1063:37;;;;;;791:317;;:::o;2292:94::-;2335:16;2371:7;2364:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2292:94;:::o;380:::-;428:4;452:7;:14;;;;445:21;;380:94;:::o;149:20::-;;;;:::o;176:21::-;;;;;;;;;;;;;:::o;204:::-;;;;:::o;1116:161::-;1179:10;1167:9;:22;1159:66;;;;;;;;;;;;:::i;:::-;;;;;;;;;1236:7;1257:10;1236:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1116:161::o;482:173::-;541:7;577;:14;;;;569:5;:22;561:54;;;;;;;;;;;;:::i;:::-;;;;;;;;;633:7;641:5;633:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;626:21;;482:173;;;:::o;118:24::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1285:235::-;1326:4;1435:16;1453:15;1470:7;1418:60;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;1386:111;;;;;;1363:149;;1343:169;;1285:235;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:139:2:-;;91:6;78:20;69:29;;107:33;134:5;107:33;:::i;:::-;59:87;;;;:::o;152:262::-;;260:2;248:9;239:7;235:23;231:32;228:2;;;276:1;273;266:12;228:2;319:1;344:53;389:7;380:6;369:9;365:22;344:53;:::i;:::-;334:63;;290:117;218:196;;;;:::o;420:179::-;;510:46;552:3;544:6;510:46;:::i;:::-;588:4;583:3;579:14;565:28;;500:99;;;;:::o;605:195::-;;703:54;753:3;745:6;703:54;:::i;:::-;789:4;784:3;780:14;766:28;;693:107;;;;:::o;806:142::-;909:32;935:5;909:32;:::i;:::-;904:3;897:45;887:61;;:::o;954:108::-;1031:24;1049:5;1031:24;:::i;:::-;1026:3;1019:37;1009:53;;:::o;1068:118::-;1155:24;1173:5;1155:24;:::i;:::-;1150:3;1143:37;1133:53;;:::o;1192:116::-;1277:24;1295:5;1277:24;:::i;:::-;1272:3;1265:37;1255:53;;:::o;1344:732::-;;1492:54;1540:5;1492:54;:::i;:::-;1562:86;1641:6;1636:3;1562:86;:::i;:::-;1555:93;;1672:56;1722:5;1672:56;:::i;:::-;1751:7;1782:1;1767:284;1792:6;1789:1;1786:13;1767:284;;;1868:6;1862:13;1895:63;1954:3;1939:13;1895:63;:::i;:::-;1888:70;;1981:60;2034:6;1981:60;:::i;:::-;1971:70;;1827:224;1814:1;1811;1807:9;1802:14;;1767:284;;;1771:14;2067:3;2060:10;;1468:608;;;;;;;:::o;2112:795::-;;2275:51;2320:5;2275:51;:::i;:::-;2342:104;2439:6;2434:3;2342:104;:::i;:::-;2335:111;;2470:53;2517:5;2470:53;:::i;:::-;2546:7;2577:1;2562:320;2587:6;2584:1;2581:13;2562:320;;;2657:44;2694:6;2657:44;:::i;:::-;2721:71;2788:3;2773:13;2721:71;:::i;:::-;2714:78;;2815:57;2865:6;2815:57;:::i;:::-;2805:67;;2622:260;2609:1;2606;2602:9;2597:14;;2562:320;;;2566:14;2898:3;2891:10;;2251:656;;;;;;;:::o;2913:371::-;;3076:67;3140:2;3135:3;3076:67;:::i;:::-;3069:74;;3173:34;3169:1;3164:3;3160:11;3153:55;3239:9;3234:2;3229:3;3225:12;3218:31;3275:2;3270:3;3266:12;3259:19;;3059:225;;;:::o;3290:328::-;;3453:67;3517:2;3512:3;3453:67;:::i;:::-;3446:74;;3550:32;3546:1;3541:3;3537:11;3530:53;3609:2;3604:3;3600:12;3593:19;;3436:182;;;:::o;3624:329::-;;3787:67;3851:2;3846:3;3787:67;:::i;:::-;3780:74;;3884:33;3880:1;3875:3;3871:11;3864:54;3944:2;3939:3;3935:12;3928:19;;3770:183;;;:::o;3959:317::-;;4122:67;4186:2;4181:3;4122:67;:::i;:::-;4115:74;;4219:21;4215:1;4210:3;4206:11;4199:42;4267:2;4262:3;4258:12;4251:19;;4105:171;;;:::o;4282:118::-;4369:24;4387:5;4369:24;:::i;:::-;4364:3;4357:37;4347:53;;:::o;4406:157::-;4511:45;4531:24;4549:5;4531:24;:::i;:::-;4511:45;:::i;:::-;4506:3;4499:58;4489:74;;:::o;4569:611::-;;4799:75;4870:3;4861:6;4799:75;:::i;:::-;4899:2;4894:3;4890:12;4883:19;;4912:75;4983:3;4974:6;4912:75;:::i;:::-;5012:2;5007:3;5003:12;4996:19;;5032:122;5150:3;5141:6;5032:122;:::i;:::-;5025:129;;5171:3;5164:10;;4788:392;;;;;;:::o;5186:222::-;;5317:2;5306:9;5302:18;5294:26;;5330:71;5398:1;5387:9;5383:17;5374:6;5330:71;:::i;:::-;5284:124;;;;:::o;5414:254::-;;5561:2;5550:9;5546:18;5538:26;;5574:87;5658:1;5647:9;5643:17;5634:6;5574:87;:::i;:::-;5528:140;;;;:::o;5674:364::-;;5849:2;5838:9;5834:18;5826:26;;5862:87;5946:1;5935:9;5931:17;5922:6;5862:87;:::i;:::-;5959:72;6027:2;6016:9;6012:18;6003:6;5959:72;:::i;:::-;5816:222;;;;;:::o;6044:373::-;;6225:2;6214:9;6210:18;6202:26;;6274:9;6268:4;6264:20;6260:1;6249:9;6245:17;6238:47;6302:108;6405:4;6396:6;6302:108;:::i;:::-;6294:116;;6192:225;;;;:::o;6423:419::-;;6627:2;6616:9;6612:18;6604:26;;6676:9;6670:4;6666:20;6662:1;6651:9;6647:17;6640:47;6704:131;6830:4;6704:131;:::i;:::-;6696:139;;6594:248;;;:::o;6848:419::-;;7052:2;7041:9;7037:18;7029:26;;7101:9;7095:4;7091:20;7087:1;7076:9;7072:17;7065:47;7129:131;7255:4;7129:131;:::i;:::-;7121:139;;7019:248;;;:::o;7273:419::-;;7477:2;7466:9;7462:18;7454:26;;7526:9;7520:4;7516:20;7512:1;7501:9;7497:17;7490:47;7554:131;7680:4;7554:131;:::i;:::-;7546:139;;7444:248;;;:::o;7698:419::-;;7902:2;7891:9;7887:18;7879:26;;7951:9;7945:4;7941:20;7937:1;7926:9;7922:17;7915:47;7979:131;8105:4;7979:131;:::i;:::-;7971:139;;7869:248;;;:::o;8123:222::-;;8254:2;8243:9;8239:18;8231:26;;8267:71;8335:1;8324:9;8320:17;8311:6;8267:71;:::i;:::-;8221:124;;;;:::o;8351:132::-;;8441:3;8433:11;;8471:4;8466:3;8462:14;8454:22;;8423:60;;;:::o;8489:156::-;;8576:3;8568:11;;8599:3;8596:1;8589:14;8633:4;8630:1;8620:18;8612:26;;8558:87;;;:::o;8651:114::-;;8752:5;8746:12;8736:22;;8725:40;;;:::o;8771:111::-;;8869:5;8863:12;8853:22;;8842:40;;;:::o;8888:113::-;;8990:4;8985:3;8981:14;8973:22;;8963:38;;;:::o;9007:110::-;;9106:4;9101:3;9097:14;9089:22;;9079:38;;;:::o;9123:184::-;;9256:6;9251:3;9244:19;9296:4;9291:3;9287:14;9272:29;;9234:73;;;;:::o;9313:163::-;;9467:3;9452:18;;9442:34;;;;:::o;9482:169::-;;9600:6;9595:3;9588:19;9640:4;9635:3;9631:14;9616:29;;9578:73;;;;:::o;9657:185::-;;9714:20;9732:1;9714:20;:::i;:::-;9709:25;;9748:20;9766:1;9748:20;:::i;:::-;9743:25;;9787:1;9777:2;;9792:18;;:::i;:::-;9777:2;9834:1;9831;9827:9;9822:14;;9699:143;;;;:::o;9848:348::-;;9911:20;9929:1;9911:20;:::i;:::-;9906:25;;9945:20;9963:1;9945:20;:::i;:::-;9940:25;;10133:1;10065:66;10061:74;10058:1;10055:81;10050:1;10043:9;10036:17;10032:105;10029:2;;;10140:18;;:::i;:::-;10029:2;10188:1;10185;10181:9;10170:20;;9896:300;;;;:::o;10202:191::-;;10262:20;10280:1;10262:20;:::i;:::-;10257:25;;10296:20;10314:1;10296:20;:::i;:::-;10291:25;;10335:1;10332;10329:8;10326:2;;;10340:18;;:::i;:::-;10326:2;10385:1;10382;10378:9;10370:17;;10247:146;;;;:::o;10399:139::-;;10489:42;10482:5;10478:54;10467:65;;10457:81;;;:::o;10544:96::-;;10610:24;10628:5;10610:24;:::i;:::-;10599:35;;10589:51;;;:::o;10646:104::-;;10720:24;10738:5;10720:24;:::i;:::-;10709:35;;10699:51;;;:::o;10756:126::-;;10833:42;10826:5;10822:54;10811:65;;10801:81;;;:::o;10888:77::-;;10954:5;10943:16;;10933:32;;;:::o;10971:166::-;;11065:66;11096:34;11119:10;11096:34;:::i;:::-;11065:66;:::i;:::-;11056:75;;11046:91;;;:::o;11143:233::-;;11205:24;11223:5;11205:24;:::i;:::-;11196:33;;11251:66;11244:5;11241:77;11238:2;;;11321:18;;:::i;:::-;11238:2;11368:1;11361:5;11357:13;11350:20;;11186:190;;;:::o;11382:79::-;;11450:5;11439:16;;11429:32;;;:::o;11467:176::-;;11516:20;11534:1;11516:20;:::i;:::-;11511:25;;11550:20;11568:1;11550:20;:::i;:::-;11545:25;;11589:1;11579:2;;11594:18;;:::i;:::-;11579:2;11635:1;11632;11628:9;11623:14;;11501:142;;;;:::o;11649:180::-;11697:77;11694:1;11687:88;11794:4;11791:1;11784:15;11818:4;11815:1;11808:15;11835:180;11883:77;11880:1;11873:88;11980:4;11977:1;11970:15;12004:4;12001:1;11994:15;12021:144;;12101:57;12152:4;12146:11;12101:57;:::i;:::-;12092:66;;12082:83;;;:::o;12171:102::-;;12260:5;12257:1;12253:13;12232:34;;12222:51;;;:::o;12279:122::-;12352:24;12370:5;12352:24;:::i;:::-;12345:5;12342:35;12332:2;;12391:1;12388;12381:12;12332:2;12322:79;:::o",
    "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.0;\r\n\r\ncontract Noshigachav3 {\r\n    address public manager;\r\n    address[] public players;\r\n    uint public winnings;\r\n    address public winner;\r\n    uint public lotteryId;\r\n    mapping(uint => address payable) public lotteryHistory;\r\n\r\n    constructor() {\r\n        manager = msg.sender;\r\n        lotteryId = 1;\r\n    }\r\n\r\n    function getPlayersCount() public view returns (uint) {\r\n        return players.length;\r\n    }\r\n\r\n    function getPlayerByIndex(uint index) public view returns (address) {\r\n        require(index < players.length, \"Index out of bounds\");\r\n        return players[index];\r\n    }\r\n\r\n    function getLatestWinner() public view returns (address payable) {\r\n        return lotteryHistory[lotteryId - 1];\r\n    }\r\n\r\n    function getLatestWinnerInfo() public view returns (address payable, uint) {\r\n        address payable latestWinner = lotteryHistory[lotteryId - 1];\r\n        uint latestWinnings = (address(this).balance * 97) / 100; // Adjust this based on your contract's logic\r\n\r\n        return (latestWinner, latestWinnings);\r\n    }\r\n\r\n    function enter() public payable {\r\n        require(msg.value > 0.01 ether, \"Minimum entry fee is 0.01 ether\");\r\n        players.push(payable(msg.sender));\r\n    }\r\n\r\n    function random() internal view returns (uint) {\r\n        return\r\n            uint(\r\n                keccak256(\r\n                    abi.encodePacked(block.difficulty, block.timestamp, players)\r\n                )\r\n            );\r\n    }\r\n\r\n    function pickWinner() public {\r\n        require(\r\n            msg.sender == manager,\r\n            \"Only the manager can call this function\"\r\n        );\r\n        require(players.length > 0, \"No participants in the lottery\");\r\n        uint index = random() % players.length;\r\n        winner = players[index];\r\n        address payable winnerAddress = payable(winner);\r\n        winnerAddress.transfer((address(this).balance * 97) / 100);\r\n        payable(manager).transfer(\r\n            address(this).balance - (address(this).balance * 97) / 100\r\n        ); // Remaining balance for the manager\r\n        lotteryHistory[lotteryId] = winnerAddress;\r\n        lotteryId++;\r\n\r\n        players = new address[](0); // Reset the players array for the next round\r\n    }\r\n\r\n    function getPlayers() public view returns (address[] memory) {\r\n        return players;\r\n    }\r\n}\r\n",
    "sourcePath": "C:\\Users\\admin\\Downloads\\Y17Dec\\noshigachav3.io\\contracts\\noshigachav3.sol",
    "ast": {
      "absolutePath": "project:/contracts/noshigachav3.sol",
      "exportedSymbols": {
        "Noshigachav3": [
          503
        ]
      },
      "id": 504,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 253,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "33:23:1"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 503,
          "linearizedBaseContracts": [
            503
          ],
          "name": "Noshigachav3",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "functionSelector": "481c6a75",
              "id": 255,
              "mutability": "mutable",
              "name": "manager",
              "nodeType": "VariableDeclaration",
              "scope": 503,
              "src": "89:22:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 254,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "89:7:1",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "f71d96cb",
              "id": 258,
              "mutability": "mutable",
              "name": "players",
              "nodeType": "VariableDeclaration",
              "scope": 503,
              "src": "118:24:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                "typeString": "address[]"
              },
              "typeName": {
                "baseType": {
                  "id": 256,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "118:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "id": 257,
                "nodeType": "ArrayTypeName",
                "src": "118:9:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[]"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "d134474c",
              "id": 260,
              "mutability": "mutable",
              "name": "winnings",
              "nodeType": "VariableDeclaration",
              "scope": 503,
              "src": "149:20:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 259,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "149:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "dfbf53ae",
              "id": 262,
              "mutability": "mutable",
              "name": "winner",
              "nodeType": "VariableDeclaration",
              "scope": 503,
              "src": "176:21:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 261,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "176:7:1",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "e580f47b",
              "id": 264,
              "mutability": "mutable",
              "name": "lotteryId",
              "nodeType": "VariableDeclaration",
              "scope": 503,
              "src": "204:21:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 263,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "204:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "6d6fe230",
              "id": 268,
              "mutability": "mutable",
              "name": "lotteryHistory",
              "nodeType": "VariableDeclaration",
              "scope": 503,
              "src": "232:54:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                "typeString": "mapping(uint256 => address payable)"
              },
              "typeName": {
                "id": 267,
                "keyType": {
                  "id": 265,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "240:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "232:32:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                  "typeString": "mapping(uint256 => address payable)"
                },
                "valueType": {
                  "id": 266,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "248:15:1",
                  "stateMutability": "payable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "body": {
                "id": 280,
                "nodeType": "Block",
                "src": "309:63:1",
                "statements": [
                  {
                    "expression": {
                      "id": 274,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 271,
                        "name": "manager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 255,
                        "src": "320:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 272,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "330:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 273,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "330:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "320:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 275,
                    "nodeType": "ExpressionStatement",
                    "src": "320:20:1"
                  },
                  {
                    "expression": {
                      "id": 278,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 276,
                        "name": "lotteryId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 264,
                        "src": "351:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "31",
                        "id": 277,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "363:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "351:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 279,
                    "nodeType": "ExpressionStatement",
                    "src": "351:13:1"
                  }
                ]
              },
              "id": 281,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 269,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "306:2:1"
              },
              "returnParameters": {
                "id": 270,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "309:0:1"
              },
              "scope": 503,
              "src": "295:77:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 289,
                "nodeType": "Block",
                "src": "434:40:1",
                "statements": [
                  {
                    "expression": {
                      "expression": {
                        "id": 286,
                        "name": "players",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 258,
                        "src": "452:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 287,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "452:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 285,
                    "id": 288,
                    "nodeType": "Return",
                    "src": "445:21:1"
                  }
                ]
              },
              "functionSelector": "a76594bf",
              "id": 290,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getPlayersCount",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 282,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "404:2:1"
              },
              "returnParameters": {
                "id": 285,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 284,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 290,
                    "src": "428:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 283,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "428:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "427:6:1"
              },
              "scope": 503,
              "src": "380:94:1",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 309,
                "nodeType": "Block",
                "src": "550:105:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 301,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 298,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 292,
                            "src": "569:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "expression": {
                              "id": 299,
                              "name": "players",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 258,
                              "src": "577:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 300,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "577:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "569:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "496e646578206f7574206f6620626f756e6473",
                          "id": 302,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "593:21:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_dd00b67a545791a54dd99d9c09eb42099756ea4ee2bd47188784c22234589367",
                            "typeString": "literal_string \"Index out of bounds\""
                          },
                          "value": "Index out of bounds"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_dd00b67a545791a54dd99d9c09eb42099756ea4ee2bd47188784c22234589367",
                            "typeString": "literal_string \"Index out of bounds\""
                          }
                        ],
                        "id": 297,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "561:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 303,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "561:54:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 304,
                    "nodeType": "ExpressionStatement",
                    "src": "561:54:1"
                  },
                  {
                    "expression": {
                      "baseExpression": {
                        "id": 305,
                        "name": "players",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 258,
                        "src": "633:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 307,
                      "indexExpression": {
                        "id": 306,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 292,
                        "src": "641:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "633:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 296,
                    "id": 308,
                    "nodeType": "Return",
                    "src": "626:21:1"
                  }
                ]
              },
              "functionSelector": "f48f0d8d",
              "id": 310,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getPlayerByIndex",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 293,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 292,
                    "mutability": "mutable",
                    "name": "index",
                    "nodeType": "VariableDeclaration",
                    "scope": 310,
                    "src": "508:10:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 291,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "508:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "507:12:1"
              },
              "returnParameters": {
                "id": 296,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 295,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 310,
                    "src": "541:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 294,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "541:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "540:9:1"
              },
              "scope": 503,
              "src": "482:173:1",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 321,
                "nodeType": "Block",
                "src": "728:55:1",
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "id": 315,
                        "name": "lotteryHistory",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 268,
                        "src": "746:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                          "typeString": "mapping(uint256 => address payable)"
                        }
                      },
                      "id": 319,
                      "indexExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 318,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 316,
                          "name": "lotteryId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 264,
                          "src": "761:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 317,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "773:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "761:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "746:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "functionReturnParameters": 314,
                    "id": 320,
                    "nodeType": "Return",
                    "src": "739:36:1"
                  }
                ]
              },
              "functionSelector": "4fdd3b64",
              "id": 322,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getLatestWinner",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 311,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "687:2:1"
              },
              "returnParameters": {
                "id": 314,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 313,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 322,
                    "src": "711:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    },
                    "typeName": {
                      "id": 312,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "711:15:1",
                      "stateMutability": "payable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "710:17:1"
              },
              "scope": 503,
              "src": "663:120:1",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 354,
                "nodeType": "Block",
                "src": "866:242:1",
                "statements": [
                  {
                    "assignments": [
                      330
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 330,
                        "mutability": "mutable",
                        "name": "latestWinner",
                        "nodeType": "VariableDeclaration",
                        "scope": 354,
                        "src": "877:28:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        "typeName": {
                          "id": 329,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "877:15:1",
                          "stateMutability": "payable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 336,
                    "initialValue": {
                      "baseExpression": {
                        "id": 331,
                        "name": "lotteryHistory",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 268,
                        "src": "908:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                          "typeString": "mapping(uint256 => address payable)"
                        }
                      },
                      "id": 335,
                      "indexExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 334,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 332,
                          "name": "lotteryId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 264,
                          "src": "923:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 333,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "935:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "923:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "908:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "877:60:1"
                  },
                  {
                    "assignments": [
                      338
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 338,
                        "mutability": "mutable",
                        "name": "latestWinnings",
                        "nodeType": "VariableDeclaration",
                        "scope": 354,
                        "src": "948:19:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 337,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "948:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 349,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 348,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 345,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 341,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967268,
                                    "src": "979:4:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_Noshigachav3_$503",
                                      "typeString": "contract Noshigachav3"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_Noshigachav3_$503",
                                      "typeString": "contract Noshigachav3"
                                    }
                                  ],
                                  "id": 340,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "971:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 339,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "971:7:1",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 342,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "971:13:1",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 343,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "balance",
                              "nodeType": "MemberAccess",
                              "src": "971:21:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "hexValue": "3937",
                              "id": 344,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "995:2:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_97_by_1",
                                "typeString": "int_const 97"
                              },
                              "value": "97"
                            },
                            "src": "971:26:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 346,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "970:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "313030",
                        "id": 347,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1001:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      },
                      "src": "970:34:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "948:56:1"
                  },
                  {
                    "expression": {
                      "components": [
                        {
                          "id": 350,
                          "name": "latestWinner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 330,
                          "src": "1071:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "id": 351,
                          "name": "latestWinnings",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 338,
                          "src": "1085:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 352,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1070:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_payable_$_t_uint256_$",
                        "typeString": "tuple(address payable,uint256)"
                      }
                    },
                    "functionReturnParameters": 328,
                    "id": 353,
                    "nodeType": "Return",
                    "src": "1063:37:1"
                  }
                ]
              },
              "functionSelector": "86956126",
              "id": 355,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getLatestWinnerInfo",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 323,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "819:2:1"
              },
              "returnParameters": {
                "id": 328,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 325,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 355,
                    "src": "843:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    },
                    "typeName": {
                      "id": 324,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "843:15:1",
                      "stateMutability": "payable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 327,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 355,
                    "src": "860:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 326,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "860:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "842:23:1"
              },
              "scope": 503,
              "src": "791:317:1",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 376,
                "nodeType": "Block",
                "src": "1148:129:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 362,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 359,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "1167:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 360,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "1167:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "302e3031",
                            "id": 361,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1179:10:1",
                            "subdenomination": "ether",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10000000000000000_by_1",
                              "typeString": "int_const 10000000000000000"
                            },
                            "value": "0.01"
                          },
                          "src": "1167:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4d696e696d756d20656e7472792066656520697320302e3031206574686572",
                          "id": 363,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1191:33:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_aeb462cb4421fe27db027e82cf1801c697f2abb8f77bf79b36906675a26d7ddb",
                            "typeString": "literal_string \"Minimum entry fee is 0.01 ether\""
                          },
                          "value": "Minimum entry fee is 0.01 ether"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_aeb462cb4421fe27db027e82cf1801c697f2abb8f77bf79b36906675a26d7ddb",
                            "typeString": "literal_string \"Minimum entry fee is 0.01 ether\""
                          }
                        ],
                        "id": 358,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1159:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 364,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1159:66:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 365,
                    "nodeType": "ExpressionStatement",
                    "src": "1159:66:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 371,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "1257:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 372,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "1257:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 370,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1249:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_payable_$",
                              "typeString": "type(address payable)"
                            },
                            "typeName": {
                              "id": 369,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1249:8:1",
                              "stateMutability": "payable",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 373,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1249:19:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "expression": {
                          "id": 366,
                          "name": "players",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 258,
                          "src": "1236:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[] storage ref"
                          }
                        },
                        "id": 368,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "src": "1236:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 374,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1236:33:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 375,
                    "nodeType": "ExpressionStatement",
                    "src": "1236:33:1"
                  }
                ]
              },
              "functionSelector": "e97dcb62",
              "id": 377,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "enter",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 356,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1130:2:1"
              },
              "returnParameters": {
                "id": 357,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1148:0:1"
              },
              "scope": 503,
              "src": "1116:161:1",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 396,
                "nodeType": "Block",
                "src": "1332:188:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 387,
                                    "name": "block",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967292,
                                    "src": "1435:5:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_block",
                                      "typeString": "block"
                                    }
                                  },
                                  "id": 388,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "difficulty",
                                  "nodeType": "MemberAccess",
                                  "src": "1435:16:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "expression": {
                                    "id": 389,
                                    "name": "block",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967292,
                                    "src": "1453:5:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_block",
                                      "typeString": "block"
                                    }
                                  },
                                  "id": 390,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "timestamp",
                                  "nodeType": "MemberAccess",
                                  "src": "1453:15:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "id": 391,
                                  "name": "players",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 258,
                                  "src": "1470:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                    "typeString": "address[] storage ref"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                    "typeString": "address[] storage ref"
                                  }
                                ],
                                "expression": {
                                  "id": 385,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967295,
                                  "src": "1418:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 386,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "1418:16:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 392,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1418:60:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 384,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967288,
                            "src": "1386:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 393,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1386:111:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 383,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1363:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 382,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1363:4:1",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 394,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1363:149:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 381,
                    "id": 395,
                    "nodeType": "Return",
                    "src": "1343:169:1"
                  }
                ]
              },
              "id": 397,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "random",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 378,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1300:2:1"
              },
              "returnParameters": {
                "id": 381,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 380,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 397,
                    "src": "1326:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 379,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1326:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1325:6:1"
              },
              "scope": 503,
              "src": "1285:235:1",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 492,
                "nodeType": "Block",
                "src": "1557:727:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 404,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 401,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "1590:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 402,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1590:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 403,
                            "name": "manager",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 255,
                            "src": "1604:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1590:21:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4f6e6c7920746865206d616e616765722063616e2063616c6c20746869732066756e6374696f6e",
                          "id": 405,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1626:41:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_18c023f83301df1c29c8422fc38f30a87711a3385fbb92b6c73211c3a9379570",
                            "typeString": "literal_string \"Only the manager can call this function\""
                          },
                          "value": "Only the manager can call this function"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_18c023f83301df1c29c8422fc38f30a87711a3385fbb92b6c73211c3a9379570",
                            "typeString": "literal_string \"Only the manager can call this function\""
                          }
                        ],
                        "id": 400,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1568:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 406,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1568:110:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 407,
                    "nodeType": "ExpressionStatement",
                    "src": "1568:110:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 412,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 409,
                              "name": "players",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 258,
                              "src": "1697:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "1697:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 411,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1714:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1697:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4e6f207061727469636970616e747320696e20746865206c6f7474657279",
                          "id": 413,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1717:32:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_9134d835a173bd374f6a11e1d53fa96984ec9491b867df78baeca4c974ae9b31",
                            "typeString": "literal_string \"No participants in the lottery\""
                          },
                          "value": "No participants in the lottery"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_9134d835a173bd374f6a11e1d53fa96984ec9491b867df78baeca4c974ae9b31",
                            "typeString": "literal_string \"No participants in the lottery\""
                          }
                        ],
                        "id": 408,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1689:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 414,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1689:61:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 415,
                    "nodeType": "ExpressionStatement",
                    "src": "1689:61:1"
                  },
                  {
                    "assignments": [
                      417
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 417,
                        "mutability": "mutable",
                        "name": "index",
                        "nodeType": "VariableDeclaration",
                        "scope": 492,
                        "src": "1761:10:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 416,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1761:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 423,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 422,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 418,
                          "name": "random",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 397,
                          "src": "1774:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                            "typeString": "function () view returns (uint256)"
                          }
                        },
                        "id": 419,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1774:8:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "%",
                      "rightExpression": {
                        "expression": {
                          "id": 420,
                          "name": "players",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 258,
                          "src": "1785:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[] storage ref"
                          }
                        },
                        "id": 421,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "1785:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1774:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1761:38:1"
                  },
                  {
                    "expression": {
                      "id": 428,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 424,
                        "name": "winner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 262,
                        "src": "1810:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "baseExpression": {
                          "id": 425,
                          "name": "players",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 258,
                          "src": "1819:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[] storage ref"
                          }
                        },
                        "id": 427,
                        "indexExpression": {
                          "id": 426,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 417,
                          "src": "1827:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1819:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1810:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 429,
                    "nodeType": "ExpressionStatement",
                    "src": "1810:23:1"
                  },
                  {
                    "assignments": [
                      431
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 431,
                        "mutability": "mutable",
                        "name": "winnerAddress",
                        "nodeType": "VariableDeclaration",
                        "scope": 492,
                        "src": "1844:29:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        "typeName": {
                          "id": 430,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1844:15:1",
                          "stateMutability": "payable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 436,
                    "initialValue": {
                      "arguments": [
                        {
                          "id": 434,
                          "name": "winner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 262,
                          "src": "1884:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 433,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1876:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_payable_$",
                          "typeString": "type(address payable)"
                        },
                        "typeName": {
                          "id": 432,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1876:8:1",
                          "stateMutability": "payable",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 435,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1876:15:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1844:47:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 449,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 446,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "id": 442,
                                        "name": "this",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4294967268,
                                        "src": "1934:4:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_contract$_Noshigachav3_$503",
                                          "typeString": "contract Noshigachav3"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_Noshigachav3_$503",
                                          "typeString": "contract Noshigachav3"
                                        }
                                      ],
                                      "id": 441,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "1926:7:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": {
                                        "id": 440,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1926:7:1",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 443,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1926:13:1",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "id": 444,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "balance",
                                  "nodeType": "MemberAccess",
                                  "src": "1926:21:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "hexValue": "3937",
                                  "id": 445,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1950:2:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_97_by_1",
                                    "typeString": "int_const 97"
                                  },
                                  "value": "97"
                                },
                                "src": "1926:26:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 447,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1925:28:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "hexValue": "313030",
                            "id": 448,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1956:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100_by_1",
                              "typeString": "int_const 100"
                            },
                            "value": "100"
                          },
                          "src": "1925:34:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 437,
                          "name": "winnerAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 431,
                          "src": "1902:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 439,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "src": "1902:22:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 450,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1902:58:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 451,
                    "nodeType": "ExpressionStatement",
                    "src": "1902:58:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 472,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 459,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967268,
                                  "src": "2019:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Noshigachav3_$503",
                                    "typeString": "contract Noshigachav3"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Noshigachav3_$503",
                                    "typeString": "contract Noshigachav3"
                                  }
                                ],
                                "id": 458,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2011:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 457,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2011:7:1",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 460,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2011:13:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 461,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "2011:21:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 471,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 468,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "id": 464,
                                          "name": "this",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 4294967268,
                                          "src": "2044:4:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Noshigachav3_$503",
                                            "typeString": "contract Noshigachav3"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_contract$_Noshigachav3_$503",
                                            "typeString": "contract Noshigachav3"
                                          }
                                        ],
                                        "id": 463,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "2036:7:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_address_$",
                                          "typeString": "type(address)"
                                        },
                                        "typeName": {
                                          "id": 462,
                                          "name": "address",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "2036:7:1",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 465,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2036:13:1",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "id": 466,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "balance",
                                    "nodeType": "MemberAccess",
                                    "src": "2036:21:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "hexValue": "3937",
                                    "id": 467,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2060:2:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_97_by_1",
                                      "typeString": "int_const 97"
                                    },
                                    "value": "97"
                                  },
                                  "src": "2036:26:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 469,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "2035:28:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "hexValue": "313030",
                              "id": 470,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2066:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_100_by_1",
                                "typeString": "int_const 100"
                              },
                              "value": "100"
                            },
                            "src": "2035:34:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2011:58:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "id": 454,
                              "name": "manager",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 255,
                              "src": "1979:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 453,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1971:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_payable_$",
                              "typeString": "type(address payable)"
                            },
                            "typeName": {
                              "id": 452,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1971:8:1",
                              "stateMutability": "payable",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 455,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1971:16:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 456,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "src": "1971:25:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 473,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1971:109:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 474,
                    "nodeType": "ExpressionStatement",
                    "src": "1971:109:1"
                  },
                  {
                    "expression": {
                      "id": 479,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 475,
                          "name": "lotteryHistory",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 268,
                          "src": "2128:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                            "typeString": "mapping(uint256 => address payable)"
                          }
                        },
                        "id": 477,
                        "indexExpression": {
                          "id": 476,
                          "name": "lotteryId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 264,
                          "src": "2143:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2128:25:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 478,
                        "name": "winnerAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 431,
                        "src": "2156:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "2128:41:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "id": 480,
                    "nodeType": "ExpressionStatement",
                    "src": "2128:41:1"
                  },
                  {
                    "expression": {
                      "id": 482,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2180:11:1",
                      "subExpression": {
                        "id": 481,
                        "name": "lotteryId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 264,
                        "src": "2180:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 483,
                    "nodeType": "ExpressionStatement",
                    "src": "2180:11:1"
                  },
                  {
                    "expression": {
                      "id": 490,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 484,
                        "name": "players",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 258,
                        "src": "2204:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 488,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2228:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 487,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "2214:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                            "typeString": "function (uint256) pure returns (address[] memory)"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 485,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2218:7:1",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 486,
                            "nodeType": "ArrayTypeName",
                            "src": "2218:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                              "typeString": "address[]"
                            }
                          }
                        },
                        "id": 489,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2214:16:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "src": "2204:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "id": 491,
                    "nodeType": "ExpressionStatement",
                    "src": "2204:26:1"
                  }
                ]
              },
              "functionSelector": "5d495aea",
              "id": 493,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "pickWinner",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 398,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1547:2:1"
              },
              "returnParameters": {
                "id": 399,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1557:0:1"
              },
              "scope": 503,
              "src": "1528:756:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 501,
                "nodeType": "Block",
                "src": "2353:33:1",
                "statements": [
                  {
                    "expression": {
                      "id": 499,
                      "name": "players",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 258,
                      "src": "2371:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "functionReturnParameters": 498,
                    "id": 500,
                    "nodeType": "Return",
                    "src": "2364:14:1"
                  }
                ]
              },
              "functionSelector": "8b5b9ccc",
              "id": 502,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getPlayers",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 494,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2311:2:1"
              },
              "returnParameters": {
                "id": 498,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 497,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 502,
                    "src": "2335:16:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 495,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2335:7:1",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 496,
                      "nodeType": "ArrayTypeName",
                      "src": "2335:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                        "typeString": "address[]"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2334:18:1"
              },
              "scope": 503,
              "src": "2292:94:1",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 504,
          "src": "60:2329:1"
        }
      ],
      "src": "33:2358:1"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
    },
    "networks": {
      "11155111": {
        "events": {},
        "links": {},
        "address": "0x4F70949eC1544DEeF962E0969dB5364bfcCAbEe7",
        "transactionHash": "0x9400a1add1a1ba141c06ee2d280d89d6add4cf6f80929ff78433f7ce17eda2bd"
      }
    },
    "schemaVersion": "3.4.16",
    "updatedAt": "2023-12-19T07:10:14.822Z",
    "networkType": "ethereum",
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }


let web3;
let accounts;
let contract;

async function initApp() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            if (typeof web3 !== "undefined") {
                web3 = new Web3(window.ethereum);
            } else {
                web3 = new Web3(window.ethereum);
            }
            accounts = await web3.eth.getAccounts();
            contract = new web3.eth.Contract(abi, contractAddress);

            document.getElementById('enterLottery').disabled = false;
            document.getElementById('pickWinner').disabled = false;

            console.log("Wallet connected");
            console.log("First 5 characters:", accounts[0].slice(0, 5));
            console.log("Last 5 characters:", accounts[0].slice(-5));
        } catch (error) {
            console.error("Error connecting to web3:", error);
        }
    } else {
        console.error("Web3 not available. Please install MetaMask or another Ethereum provider.");
    }
}

async function connect() {
    await initApp();
    if (accounts && accounts.length > 0) {
        const truncatedAddress = `${accounts[0].slice(0, 5)}...${accounts[0].slice(-5)}`;
        document.getElementById("connectWallet").innerText = `Connected (${truncatedAddress})`;
        document.getElementById("connectWallet").disabled = true;
    }
}

async function enterLottery() {
    await initApp();
    if (web3 && accounts && accounts.length > 0) {
        try {
            await contract.methods.enter().send({ from: accounts[0], value: web3.utils.toWei("0.01", "ether") });
            console.log("Entered the lottery!");
            updatePlayersList();
        } catch (error) {
            console.error("Error entering the lottery:", error.message);
        }
    } else {
        console.error("Web3 not available. or accounts not initialized.");
    }
}

async function pickWinner() {
    if (web3 && accounts && accounts.length > 0) {
        try {
            await contract.methods.pickWinner().send({ from: accounts[0] });
            console.log("Winner picked!");
            displayWinner();
            updatePlayersList();
        } catch (error) {
            console.error("Error picking the winner:", error.message);
        }
    } else {
        console.error("Web3 not available. Please connect your wallet.");
    }
}

function updatePlayersList() {
    contract.methods.getPlayers().call()
        .then(displayPlayers)
        .catch(error => console.error("Error updating players list:", error.message));
}

function displayPlayers() {
    contract.methods.getPlayersCount().call()
        .then(count => {
            const playersElement = document.getElementById('players');
            playersElement.innerHTML = "<p>Players:</p>";

            for (let i = 0; i < count; i++) {
                contract.methods.getPlayerByIndex(i).call()
                    .then(player => {
                        playersElement.innerHTML += `<p>${player}</p>`;
                    })
                    .catch(error => console.error("Error displaying players:", error.message));
            }
        })
        .catch(error => console.error("Error getting player count:", error.message));
}

function displayLatestWinner() {
    contract.methods.getLatestWinner().call()
        .then(winner => {
            const winnerElement = document.getElementById('latestWinner');
            winnerElement.innerHTML = `<p>Latest Winner: ${winner}</p>`;
        })
        .catch(error => console.error("Error displaying latest winner:", error.message));
}

function displayLatestWinnerInfo() {
    contract.methods.getLatestWinnerInfo().call()
        .then(result => {
            const winnerAddress = result[0];
            const winnings = result[1];

            const winnerInfoElement = document.getElementById('latestWinnerInfo');
            winnerInfoElement.innerHTML = `<p>Latest Winner: ${winnerAddress}</p><p>Winnings: ${winnings} wei</p>`;
        })
        .catch(error => console.error("Error displaying latest winner info:", error.message));
}


initApp();
