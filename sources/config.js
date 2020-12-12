
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
			fileAsObject.FILE_DIR = `${fileDir}/files`
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
