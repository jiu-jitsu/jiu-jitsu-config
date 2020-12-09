
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
