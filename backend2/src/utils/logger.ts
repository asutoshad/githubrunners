import { createLogger, format, transports } from "winston";
import path from "path";
import fs from "fs";

const { combine, timestamp, printf, errors } = format;

const logDir = path.join(__dirname, "../logs");


if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    errors({ stack: true }),
    logFormat
  ),
  transports: [
    new transports.File({
      filename: path.join(logDir, "error.log"),
      level: "error",
      options: { flags: 'a' },
    }),
    new transports.File({
      filename: path.join(logDir, "combined.log"),
      options: { flags: 'a' },
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(new transports.Console({ format: format.simple() }));
}

export default logger;
