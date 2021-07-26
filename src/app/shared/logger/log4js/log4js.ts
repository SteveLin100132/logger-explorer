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

import { Configuration, configure, getLogger, Logger } from 'log4js';
import { LoggerAdapter } from './../../../core';
import { LOG4JS_CONFIG } from './log4js.config';

/**
 * Log4js 日誌轉接器
 */
export class Log4js implements LoggerAdapter {
  /**
   * Log4js 日誌
   */
  private logger: Logger;

  /**
   * @param type   日誌類別
   * @param config 日誌設定
   */
  constructor(type: string, config: Configuration = LOG4JS_CONFIG) {
    configure(config);
    this.logger = getLogger(type);
  }

  /**
   * 一般日誌
   *
   * @method public
   * @param args 日誌參數
   */
  public log(...args: any[]): void {
    this.logger.log(...args);
  }

  /**
   * TRACE級別日誌
   *
   * @method public
   * @param message 日誌內文
   * @param args    日誌參數
   */
  public trace(message: any, ...args: any[]): void {
    this.logger.trace(message, ...args);
  }

  /**
   * DEBUG級別日誌
   *
   * @method public
   * @param message 日誌內文
   * @param args    日誌參數
   */
  public debug(message: any, ...args: any[]): void {
    this.logger.debug(message, ...args);
  }

  /**
   * INFO級別日誌
   *
   * @method public
   * @param message 日誌內文
   * @param args    日誌參數
   */
  public info(message: any, ...args: any[]): void {
    this.logger.info(message, ...args);
  }

  /**
   * WARN級別日誌
   *
   * @method public
   * @param message 日誌內文
   * @param args    日誌參數
   */
  public warn(message: any, ...args: any[]): void {
    this.logger.warn(message, ...args);
  }

  /**
   * ERROR級別日誌
   *
   * @method public
   * @param message 日誌內文
   * @param args    日誌參數
   */
  public error(message: any, ...args: any[]): void {
    this.logger.error(message, ...args);
  }

  /**
   * FATAL級別日誌
   *
   * @method public
   * @param message 日誌內文
   * @param args    日誌參數
   */
  public fatal(message: any, ...args: any[]): void {
    this.logger.fatal(message, ...args);
  }

  /**
   * MARK級別日誌
   *
   * @method public
   * @param message 日誌內文
   * @param args    日誌參數
   */
  public mark(message: any, ...args: any[]): void {
    this.logger.mark(message, ...args);
  }
}
