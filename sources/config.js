
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
			const fileDir = SPLITS.join("/")
			const fileAsString = fs.readFileSync(`${fileDir}/config.json`, "utf8")
			const fileAsObject = JSON.parse(fileAsString)
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
