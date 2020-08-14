var abi = 
[
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getProductStruct",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "killContract",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "productes",
		"outputs": [
			{
				"name": "age",
				"type": "string"
			},
			{
				"name": "addr",
				"type": "string"
			},
			{
				"name": "lati",
				"type": "string"
			},
			{
				"name": "longti",
				"type": "string"
			},
			{
				"name": "purse_addr",
				"type": "string"
			},
			{
				"name": "location",
				"type": "string"
			},
			{
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNumOfProducts",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_age",
				"type": "string"
			},
			{
				"name": "_addr",
				"type": "string"
			},
			{
				"name": "_lati",
				"type": "string"
			},
			{
				"name": "_longti",
				"type": "string"
			},
			{
				"name": "_purse_addr",
				"type": "string"
			},
			{
				"name": "_location",
				"type": "string"
			}
		],
		"name": "addProStru",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllproducts",
		"outputs": [
			{
				"components": [
					{
						"name": "age",
						"type": "string"
					},
					{
						"name": "addr",
						"type": "string"
					},
					{
						"name": "lati",
						"type": "string"
					},
					{
						"name": "longti",
						"type": "string"
					},
					{
						"name": "purse_addr",
						"type": "string"
					},
					{
						"name": "location",
						"type": "string"
					},
					{
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]