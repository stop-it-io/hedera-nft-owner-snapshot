# Hedera Token Owners Snapshot Tool
Custom made tool for taking snapshot of token holders. This tool leverages <a href="https://docs.hedera.com/guides/core-concepts/mirror-nodes">Hedera Mirror Node</a> to fetch data containing all NFTs serial numbers and their respective owners (Hedera accounts) for given token ID.

# Configuration options
tokenId (string): Set you token ID ("0.0.12345")

# Usage
This can run locally. Simply download all files, open index.html in your browser (tested on Google Chrome) and press the button. In browser console you can watch all calls being logged. Response is paginated (depending on number of serials minted for specified token ID). After calls are finished output file should be downloaded automatically.

# Limitations
This tool only supports Tokens built on Hedera network

Only tokens with 10.000 or less serial numbers are supported

# Output
Output file is in .*txt format. To show data in table view, follow these steps:

1. Copy all data from *.txt file
2. Paste them into MS excel and select them
3. In MS Excel go to: "Data" --> "Text to Columns" --> "Delimited" --> Set only "Comma" as delimiter --> "Finish"
4. You should now have your data in tabular format where first column displays Hedera accounts and second column displays token serial number owned by that account

*Please note one account may be present on multiple lines while token serial numbers are unique as there might be account holding more than one token serial number

## Disclaimer
Use absolutely only at your own risk. We strive to provide Hedera community with tools we develop, however everything we provide is "AS-IS".

There are inherent dangers in the use of any software available for download on the Internet, and we caution you to make sure that you completely understand the potential risks before downloading any of the software.

The Software and code samples available on this website are provided "**AS-IS**" without warranty of any kind, either express or implied. Use at your own risk.

The use of the software and scripts downloaded on this site is done at your own discretion and risk and with agreement that you will be solely responsible for any damage to your computer system or loss of data that results from such activities. You are solely responsible for adequate protection and backup of the data and equipment used in connection with any of the software, and we will not be liable for any damages that you may suffer in connection with using, modifying or distributing any of this software. No advice or information, whether oral or written, obtained by you from us or from this website shall create any warranty for the software.

We make no warranty that:
- The software will meet your requirements.
- The software will be uninterrupted, timely, secure or error-free.
- The results that may be obtained from the use of the software will be effective, accurate or reliable.
- The quality of the software will meet your expectations.
- Any errors in the software obtained from us will be corrected.
