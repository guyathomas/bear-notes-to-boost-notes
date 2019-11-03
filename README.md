# Description
Tiny node script for migrating exported `.txt` files from [Bear](https://bear.app/) to `.cson` files ready for [Boost Note](https://boostnote.io/).

# Steps to migrate
1. Open the Bear app and [export all your notes](https://bear.app/faq/Import%20&%20export/Export%20your%20notes/) as `.txt` files to the `bear-notes` directory of this repo
1. Run `git clone https://github.com/guyathomas/bear-notes-to-boost-notes.git && cd bear-notes-to-boost-notes`
1. Run `node index.js`
1. `cp boost-notes/* <notes directory on your local filesystem>` (For me it's `~/Dropbox/Apps/BoostedNote/notes`)
