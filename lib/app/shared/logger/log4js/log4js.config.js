"use strict";
/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： Log4js 日誌初始設定
 * @CREATE Saturday, 24th July 2021 11:27:09 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOG4JS_CONFIG = void 0;
/**
 * Log4js 日誌初始設定
 */
exports.LOG4JS_CONFIG = {
    appenders: {
        std: {
            type: 'stdout',
        },
        file: {
            type: 'dateFile',
            filename: 'logs/app.log',
            pattern: '.yyyy-MM-dd',
            backups: 14,
            keepFileExt: true,
        },
    },
    categories: {
        default: {
            appenders: ['std', 'file'],
            level: 'all',
        },
    },
};
