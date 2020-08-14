$(document).ready(function () {
	const productRegistryContractAddress = '0x6cbcde961be679a7bae8c3dcb1b8963dd6dd3338';
	const productRegistryContractABI = [
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
			"constant": false,
			"inputs": [],
			"name": "killContract",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
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
		}
	]

	$('#linkHome').click(function () { showView("viewHome") });
	$('#linkSubmitDocument').click(function () { showView("viewSubmitDocument") });
	$('#linkVerifyDocument').click(function () { showView("viewVerifyDocument") });
	$('#itemUploadButton').click(itemUploadButton);
	$('#documentVerifyButton').click(verifyDocument);

	$('#contractLink').text(productRegistryContractAddress);
	$('#contractLink').attr('href', 'https://ropsten.etherscan.io/address/' + productRegistryContractAddress);

	// Attach AJAX "loading" event listener
	$(document).on({
		ajaxStart: function () { $("#loadingBox").show() },
		ajaxStop: function () { $("#loadingBox").hide() }
	});

	function showView(viewName) {
		// Hide all views and show the selected view only
		$('main > section').hide();
		$('#' + viewName).show();
	}

	function showInfo(message) {
		$('#infoBox>p').html(message);
		$('#infoBox').show();
		$('#infoBox>header').click(function () { $('#infoBox').hide(); });
	}

	function showError(errorMsg) {
		$('#errorBox>p').html("Error: " + errorMsg);
		$('#errorBox').show();
		$('#errorBox>header').click(function () { $('#errorBox').hide(); });
	}

	async function itemUploadButton() {
		// if ($('#documentForUpload')[0].files.length == 0)
		// return showError("Please select a file to upload.");
		if (window.ethereum)
			try {
				await window.ethereum.enable();
			} catch (err) {
				return showError("Access to your Ethereum account rejected.");
			}
		if (typeof web3 === 'undefined')
			return showError("Please install MetaMask to access the Ethereum Web3 injected API from your Web browser.");

		let account = web3.eth.accounts[0];
		console.log("my account ", account);

		let age = $("#age").val();
		console.log("age ", age);
		let addr = $("#address").val();
		console.log("address ", addr);

		var lon, lat;
		var area;
		const op = {
			query: addr
		}
		naver.maps.Service.geocode(op, function (status, response) {
			if (status !== naver.maps.Service.Status.OK) {
				return alert('Something wrong!');
			}

			var result = response.v2, // 검색 결과의 컨테이너
				items = result.addresses; // 검색 결과의 배열

			// do Something
			area = items[0].roadAddress.substr(0, 2);
			//console.log(area);
			//console.log(result);
			console.log(items[0].x, items[0].y);
			lon = items[0].x;
			lat = items[0].y;

			console.log(age, addr, items[0].y, items[0].x, account, area);
			let contract = web3.eth.contract(productRegistryContractABI).at(productRegistryContractAddress);
			contract.addProStru(age, addr, items[0].y, items[0].x, account, area, function (err, result) {
				if (err)
					return showError("Smart contract call failed: " + err);
				showInfo(`Document ${result} <b>successfully added</b> to the registry.`);
			});

		});
		//function addProStru ( string _age, string _addr, string _lati, string _longti, string _purse_addr, string _location)




		// let fileReader = new FileReader();
		// fileReader.onload = function() {
		// let documentHash = sha256(fileReader.result);
		// if (typeof web3 === 'undefined')
		// return showError("Please install MetaMask to access the Ethereum Web3 injected API from your Web browser.");
		// let account = web3.eth.accounts[0];
		// console.log("my account " , account);
		// let contract = web3.eth.contract(documentRegistryContractABI).at(documentRegistryContractAddress);
		// contract.add(documentHash, function(err, result) {
		// if (err)
		// return showError("Smart contract call failed: " + err);
		// showInfo(`Document ${documentHash} <b>successfully added</b> to the registry.`);
		// });            
		// }
		// fileReader.readAsBinaryString($('#documentForUpload')[0].files[0]);
	}

	function verifyDocument() {


		if (typeof web3 === 'undefined')
			return showError("Please install MetaMask to access the Ethereum Web3 injected API from your Web browser.");

		let account = web3.eth.accounts[0];
		console.log("my account ", account);
		var table = document.getElementById("table1");
		let contract = web3.eth.contract(productRegistryContractABI).at(productRegistryContractAddress);
		contract.getNumOfProducts(function (err, result) {
			if (!err) {
				for (var i = 1; i < result; i++) {
					contract.getProductStruct(i, function (err, product) {
						console.log(product);
						var toString = product.toString();
						// console.log("product: " + toString);
						var strArray = toString.split(",");

						var timestamp = new Date(strArray[6] * 1000);
						console.log("timestamp: " + timestamp);
						console.log("timestamp: " + strArray[6] * 1000);

						// var row = table.insertRow();
						// var cell1 = row.insertCell(0);
						// var cell2 = row.insertCell(1);
						// var cell3 = row.insertCell(2);
						// var cell4 = row.insertCell(3);
						// var cell5 = row.insertCell(4);
						// var cell6 = row.insertCell(5);
						// cell1.innerHTML = strArray[1];
						// cell2.innerHTML = strArray[2];
						// cell3.innerHTML = strArray[3];
						// cell4.innerHTML = strArray[4];
						// cell5.innerHTML = strArray[5];

						// locationarr.push(strArray);
						// cell6.style.width = "60%";
						// cell6.innerHTML = timestamp;

						var image = "/images/corona.png";
						marker = new google.maps.Marker({
							position: new google.maps.LatLng(
								strArray[2]*1, strArray[3]*1),
							map: map,
							icon:image
						});
						attachSecretMessage(marker, strArray[1]);


					})
				}
			}
			// let filter = web3.eth.filter({fr
		})

	}
});
