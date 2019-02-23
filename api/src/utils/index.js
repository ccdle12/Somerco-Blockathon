// Helper functions used throughout the project.

// CONSTANTS.
const INVOICE_PAID = "INVOICE_PAID";

/**
 * objToJSON will parse an object and return it
 * in JSON Format.
 *
 * @param   {obj} an object to parse as JSON.
 * @returns {JSON} the object in JSON format.
 */
function objToJSON(obj) {
    resultStr = JSON.stringify(obj);
    resultJSON = JSON.parse(resultStr);

    return resultJSON;
}

module.exports = { objToJSON, INVOICE_PAID };
