const { createLogger, format, config, transports } = require('winston');
const { combine, timestamp, printf } = format;

const consoleOutFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}] ${message}`;
});

const logger = createLogger({
    levels: config.syslog.levels,
    format: combine(format.colorize(), timestamp(), consoleOutFormat),
    transports: [new transports.Console()],
});

// disable logging in testing mode
if (process.env.NODE_ENV === 'test') {
    logger.transports.forEach((t) => (t.silent = true));
}

module.exports = logger;
