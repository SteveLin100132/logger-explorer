"use strict";
/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： Log4js 日誌轉接器
 * @CREATE Saturday, 24th July 2021 11:28:55 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log4js = void 0;
const log4js_1 = require("log4js");
const log4js_config_1 = require("./log4js.config");
/**
 * Log4js 日誌轉接器
 */
class Log4js {
    /**
     * @param type   日誌類別
     * @param config 日誌設定
     */
    constructor(type, config = log4js_config_1.LOG4JS_CONFIG) {
        log4js_1.configure(config);
        this.logger = log4js_1.getLogger(type);
    }
    /**
     * 一般日誌
     *
     * @method public
     * @param args 日誌參數
     */
    log(...args) {
        this.logger.log(...args);
    }
    /**
     * TRACE級別日誌
     *
     * @method public
     * @param message 日誌內文
     * @param args    日誌參數
     */
    trace(message, ...args) {
        this.logger.trace(message, ...args);
    }
    /**
     * DEBUG級別日誌
     *
     * @method public
     * @param message 日誌內文
     * @param args    日誌參數
     */
    debug(message, ...args) {
        this.logger.debug(message, ...args);
    }
    /**
     * INFO級別日誌
     *
     * @method public
     * @param message 日誌內文
     * @param args    日誌參數
     */
    info(message, ...args) {
        this.logger.info(message, ...args);
    }
    /**
     * WARN級別日誌
     *
     * @method public
     * @param message 日誌內文
     * @param args    日誌參數
     */
    warn(message, ...args) {
        this.logger.warn(message, ...args);
    }
    /**
     * ERROR級別日誌
     *
     * @method public
     * @param message 日誌內文
     * @param args    日誌參數
     */
    error(message, ...args) {
        this.logger.error(message, ...args);
    }
    /**
     * FATAL級別日誌
     *
     * @method public
     * @param message 日誌內文
     * @param args    日誌參數
     */
    fatal(message, ...args) {
        this.logger.fatal(message, ...args);
    }
    /**
     * MARK級別日誌
     *
     * @method public
     * @param message 日誌內文
     * @param args    日誌參數
     */
    mark(message, ...args) {
        this.logger.mark(message, ...args);
    }
}
exports.Log4js = Log4js;
