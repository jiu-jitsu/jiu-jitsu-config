
/**
 *
 */

const fs = require("fs")

/**
 *
 */

const SPLITS = __dirname.split("/")

/**
 *
 */

function get () {
	while (SPLITS[1]) {
		try {
			const fileAsString = fs.readFileSync(`${SPLITS.join("/")}/config.json`, "utf8")
			const fileAsObject = JSON.parse(fileAsString)
			fileAsObject.FILE_DIR = "./files"
			fileAsObject.FILE_COUNT = 1
			return fileAsObject
		} catch (error) {
			SPLITS.pop()
		}
	}
}

/**
 *
 */

module.exports = get()
