"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const cors = require("cors");
const express = require("express");
const fs = require("fs");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const SWAGGER = require("./../assets/openapi.json");
/**
 * API Server
 */
class Api {
    constructor() {
        /**
         * API Server
         */
        this._server = express();
    }
    /**
     * 測試用 API
     *
     * @method private
     * @param req 請求
     * @param res 會應
     */
    ping(req, res) {
        res.send('Ping success');
    }
    /**
     * 取得所有日誌檔案名稱
     *
     * @method private
     * @param req 請求
     * @param res 會應
     */
    getLogsFilename(req, res) {
        var _a;
        const root = path.dirname(((_a = require.main) === null || _a === void 0 ? void 0 : _a.filename) || '');
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
    getLog(req, res) {
        var _a;
        const filename = req.query.filename;
        const root = path.dirname(((_a = require.main) === null || _a === void 0 ? void 0 : _a.filename) || '');
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
    run(port = 3001) {
        var _a;
        // 日誌管理頁面
        const root = path.dirname(((_a = require.main) === null || _a === void 0 ? void 0 : _a.filename) || '');
        this._server.use(express.static(path.join(root, '../public')));
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
exports.Api = Api;
