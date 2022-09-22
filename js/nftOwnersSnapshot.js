
/*==================== CREATED BY STOP-IT.IO ==================== */
/*================== GIVEN TO HEDERA COMMUNITY ================== */


function getNftOwners(url, results) {

    const tokenId = "" //CONFIG YOUR NFT COLLECTION TOKEN ID

    if (tokenId == "") {
        console.log("ERROR: Please provide your tokenId in js/nftOwnersSnapshot.js")
    }

    if (!results) {
        var results = [];
    }

    var urlPart = (!url) ? '/api/v1/tokens/' + tokenId + '/nfts?limit=10000' : url;

    const fetchPromise = fetch('https://mainnet-public.mirrornode.hedera.com' + urlPart);

    fetchPromise.then((response) => {
        const jsonPromise = response.json();
        jsonPromise.then((data) => {
            results = results.concat(data.nfts);
            if (!!data.links && !!data.links.next) {
                console.log("fetching: " + data.links.next);
                getNftOwners(data.links.next, results);
            } else {
                saveData(results);
            }
        });
    });
}

function saveData(results) {

    for (var b = 0; b < results.length; b++) {
        results[b] = stripData(results[b]);
    }

    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([convertToCsvFormat(results)], {
        type: "text/plain"
    }));

    a.setAttribute("download", "data.txt");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function stripData(object) {
    var result = {
        ownerAccountId: object.account_id,
        nftSerialNumber: object.serial_number
    }
    return result;
}

function convertToCsvFormat(json) {
    var fields = Object.keys(json[0])
    var replacer = function (key, value) { return value === null ? '' : value }
    var csv = json.map(function (row) {
        return fields.map(function (fieldName) {
            return JSON.stringify(row[fieldName], replacer);
        }).join(',')
    })
    csv.unshift(fields.join(','));
    csv = csv.join('\r\n');
    return csv;
}


