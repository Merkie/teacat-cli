#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import { loadRC } from "../lib/rc";

const program = new Command();
const rc = loadRC();

program
  .name("teacat")
  .description("🫖 teacat CLI — AI-first prototyping toolkit")
  .version("0.1.0");

program
  .command("help")
  .description("Display help info")
  .action(() => {
    program.outputHelp();
  });

program
  .command("create")
  .description("Launch new project wizard")
  .action(() => {
    console.log(chalk.green("🛠 Launching create wizard..."));
  });

program
  .command("settings [app]")
  .description("Open settings menu")
  .action((app?: string) => {
    console.log(
      chalk.cyan(`⚙️ Opening settings for ${app || "current directory"}...`)
    );
  });

program
  .command("share [app]")
  .alias("deploy")
  .alias("host")
  .description("Deploy the app")
  .action((app?: string) => {
    console.log(chalk.magenta(`📤 Sharing ${app || "current app"}...`));
  });

program
  .command("login")
  .description("Login and save credentials")
  .action(() => {
    console.log(chalk.yellow("🔐 Login flow starting..."));
  });

program
  .command("dash")
  .alias("open")
  .alias("launch")
  .description("Open the dashboard GUI")
  .action(() => {
    console.log(chalk.blueBright("📟 Opening Teacat dashboard..."));
  });

program.parse();
