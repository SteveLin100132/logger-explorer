/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌查詢工具程式進入點
 * @CREATE Saturday, 24th July 2021 11:20:33 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Api } from './app';

const api = new Api();
api.run(3001);

export * from './app';
