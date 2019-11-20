/**
 * Logger class. Can be used as superclass or Mixin class
 * */
exports = module.exports = class Logger {

    constructor(ctx, name = this.constructor.name) {
        this._logSrcName = name;
        if (ctx) {
            // mixin
            ctx.log = this.log;
            ctx._logSrcName = this._logSrcName;
        }
    }

    log(...data) {
        const args = [];
        data.forEach(arg => {
            if (typeof arg === 'string' || arg instanceof String) args.push(arg.green);
            else args.push(arg);
        });
        console.log(`[${this._logSrcName}]`.yellow.bold, ...args);
    }

    error(...data) {
        const args = [];
        data.forEach(arg => {
            if (typeof arg === 'string' || arg instanceof String) args.push(arg.red.bold);
            else args.push(arg);
        });
        console.log(`[${this._logSrcName}]`.yellow.bold, ...args);
    }
};
