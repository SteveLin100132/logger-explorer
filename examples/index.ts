/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： Logger Explorer Example
 * @CREATE Monday, 26th July 2021 9:31:18 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Log4js } from './../lib';

const logger = new Log4js('APP');

logger.info('this is information');
logger.trace('this is trace log');
logger.log('this is log');
logger.debug('this is debug');
logger.warn('this is warn message');
logger.error('this is error message');
logger.fatal('this is fatal message');
