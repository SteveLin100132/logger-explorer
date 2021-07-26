# Logger Explorer

# Install

```
npm i logger-explorer --save
```

# Table of Contents

- [Quickstart](#quickstart)
- [Feature](#feature)

# Quickstart

```typescript
import { Log4js } from 'logger-explorer';

const logger = new Log4js('APP');

logger.info('this is information');
logger.trace('this is trace log');
logger.log('this is log');
logger.debug('this is debug');
logger.warn('this is warn message');
logger.error('this is error message');
logger.fatal('this is fatal message');
```

> Open browser and input `http://localhost:3001/`.

# Feature

- 提供日誌輸出工具
- 提供日誌查詢頁面
