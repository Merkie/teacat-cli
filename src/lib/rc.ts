import fs from "fs";
import os from "os";
import path from "path";

export const RC_PATH = path.join(os.homedir(), ".teacatrc");

export interface TeacatRC {
  token?: string;
  [key: string]: any;
}

export function loadRC(): TeacatRC {
  try {
    const raw = fs.readFileSync(RC_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function saveRC(data: TeacatRC): void {
  fs.writeFileSync(RC_PATH, JSON.stringify(data, null, 2));
}
