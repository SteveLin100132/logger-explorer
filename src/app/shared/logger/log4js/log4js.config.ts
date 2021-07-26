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

import { Configuration } from 'log4js';

/**
 * Log4js 日誌初始設定
 */
export const LOG4JS_CONFIG: Configuration = {
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
