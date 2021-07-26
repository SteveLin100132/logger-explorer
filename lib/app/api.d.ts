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
/**
 * API Server
 */
export declare class Api {
    /**
     * API Server
     */
    private readonly _server;
    /**
     * API
     */
    private _api?;
    /**
     * 測試用 API
     *
     * @method private
     * @param req 請求
     * @param res 會應
     */
    private ping;
    /**
     * 取得所有日誌檔案名稱
     *
     * @method private
     * @param req 請求
     * @param res 會應
     */
    private getLogsFilename;
    /**
     * 取得特定日誌內容
     *
     * @method private
     * @param req 請求
     * @param res 會應
     */
    private getLog;
    /**
     * 啟動API Server
     *
     * @method public
     * @param port 端口
     * @return 回傳物件本身
     */
    run(port?: number): void;
}
