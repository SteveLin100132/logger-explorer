/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： API Server
 * @CREATE Saturday, 24th July 2021 11:42:25 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import * as cors from 'cors';
import * as express from 'express';
import * as fs from 'fs';
import * as http from 'http';
import * as path from 'path';
import * as swaggerUi from 'swagger-ui-express';
import * as SWAGGER from './../assets/openapi.json';

/**
 * API Server
 */
export class Api {
  /**
   * API Server
   */
  private readonly _server = express();
  /**
   * API
   */
  private _api?: http.Server;

  /**
   * 測試用 API
   *
   * @method private
   * @param req 請求
   * @param res 會應
   */
  private ping(req: express.Request, res: express.Response): void {
    res.send('Ping success');
  }

  /**
   * 取得所有日誌檔案名稱
   *
   * @method private
   * @param req 請求
   * @param res 會應
   */
  private getLogsFilename(req: express.Request, res: express.Response): void {
    const root = path.dirname(require.main?.filename || '');
    const list = fs.readdirSync(path.join(root, '../logs'));
    res.send(list);
  }

  /**
   * 取得特定日誌內容
   *
   * @method private
   * @param req 請求
   * @param res 會應
   */
  private getLog(req: express.Request, res: express.Response): void {
    const filename = req.query.filename;
    const root = path.dirname(require.main?.filename || '');
    const file = path.join(root, `../logs/${filename}`);
    const content = fs.readFileSync(file, { encoding: 'utf8' });
    res.send(content);
  }

  /**
   * 啟動API Server
   *
   * @method public
   * @param port 端口
   * @return 回傳物件本身
   */
  public run(port: number = 3001): void {
    // 日誌管理頁面
    // const root = path.dirname(require.main?.filename || '');
    // if (fs.existsSync(path.join(root, '../public'))) {
    //   this._server.use(express.static(path.join(root, '../public')));
    // }
    this._server.use(
      express.static(
        path.join(process.cwd(), '/node_modules/logger-explorer/public'),
      ),
    );

    // 啟用 API
    this._server.use(express.json());
    this._server.use(cors({ origin: '*' }));
    this._server.post('/ping', this.ping.bind(this));
    this._server.get('/logs/filename', this.getLogsFilename.bind(this));
    this._server.get('/logs/content', this.getLog.bind(this));

    // 套入 Swagger UI
    this._server.use('/swagger', swaggerUi.serve, swaggerUi.setup(SWAGGER));

    // 監聽端口
    this._api = this._server.listen(port);
  }
}
