/**
 * Copyright(c) Microsoft Corporation.All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * Logger class for the Tests
 */
class TestLogger {
    constructor() {
        this._message = new Array();
        this._error = new Array();
        this._success = new Array();
        this._warning = new Array();
        this._command = new Array();
        this._isError = false;
        this._isVerbose = false;
    }
    error(message) {
        this._error.push(message);
        this._isError = true;
    }
    message(message) {
        this._message.push(message);
    }
    success(message) {
        this._success.push(message);
    }
    warning(message) {
        this._warning.push(message);
    }
    command(message, command) {
        if (this.isVerbose) {
            this._command.push(command);
        }
        else {
            this.message(message);
        }
    }
    get isVerbose() { return this._isVerbose; }
    set isVerbose(value) { this._isVerbose = value || false; }
    isError() { return this._isError; }
    getMessage() { return this._message; }
    getError() { return this._error; }
    getSuccess() { return this._success; }
    getWarning() { return this._warning; }
    getCommand() { return this._command; }
}

exports.TestLogger = TestLogger;
