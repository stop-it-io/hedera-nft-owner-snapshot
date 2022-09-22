# Hedera Token Owners Snapshot Tool
Custom made tool for taking snapshot of token holders. This tool leverages <a href="https://docs.hedera.com/guides/core-concepts/mirror-nodes">Hedera Mirror Node</a> to fetch data containing all NFTs serial numbers and their respective owners (Hedera accounts) for given token ID.

# Configuration options
tokenId (string): Set you token ID ("0.0.12345")

# Usage
This can run locally. Simly download all files, open index.html in your browser (tested on Google Chrome) a press the button. In browser console you can watch all calls beeing logged as response is paginated (depending on number of serials minted for specified token ID). After calls are finished output file should be downloaded automatically.

# Limitations
This tool only support Tokens built on Hedera network<br/>
Only tokens with 10.000 or less serial numbers are supported

# Output
Output file is in .*txt format. To show data in table view, follow these steps:

1. Copy all data from *.txt file
2. Paste them into MS excel and select them
3. In MS Excel go to: "Data" --> "Text to Columns" --> "Delimited" --> Set only "Comma" as delimiter --> "Finish"
4. You should now have your data in tabular format where first column displays Hedera accounts and second column displays token serial number owned by that account

*Please note one account may be present on multiple lines while token serial numbers are unique as there might be account holding more than one token serial number
