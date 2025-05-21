// custom logger with different log levels
enum LogLevel {
  DEBUG = 1,
  INFO,
  WARN,
  ERROR,
}

class Logger {
  private currentLevel: LogLevel;

  constructor(level: LogLevel = LogLevel.INFO) {
    console.log(level)
    this.currentLevel = level;
  }

  private log(level: LogLevel, levelName: string, message: string): void {
    if (level >= this.currentLevel) {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] [${levelName}] ${message}`);
    }
  }

  debug(message: string): void {
    this.log(LogLevel.DEBUG, "DEBUG", message);
  }
  info(message: string): void {
    this.log(LogLevel.INFO, "INFO", message);
  }
  warn(message: string): void {
    this.log(LogLevel.WARN, 'WARN', message);
  }

  error(message: string): void {
    this.log(LogLevel.ERROR, 'ERROR', message);
  }
  setLevel(level: LogLevel): void {
    this.currentLevel = level;
  }
}


const logger = new Logger(LogLevel.INFO)

logger.debug("Debugging app...");
logger.info("App started");
logger.warn("Low memory");
logger.error("App crashed");

// Change level to WARN — DEBUG and INFO will be ignored
logger.setLevel(LogLevel.WARN);
logger.info("This won't show");
logger.error("This will show");