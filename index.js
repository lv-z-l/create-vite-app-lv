#!/usr/bin/env node
// 进度
const ora = require('ora')
// 字体
const chalk = require('chalk')
// // 文件操作
// const rm = require('rimraf')
// // 路径处理
// const path = require('path')
// // 命令
const { Command } = require('commander')
// // 交互
// const inquirer = require('inquirer')
let process = 0

const { download } = require('./io')
const { log } = console
const program = new Command()
let start = 0
let end = 0
program
  .name('create-vite-app')
  .description('create-vite-app to do sth')
  .version('1.0.0', '-v, --version')
  .arguments('<project-directory>') 
  .description('clone a repository into a newly created directory')
  .action(directory => {
    start = Date.now()
    log(chalk.red.bold(`Welcome to create-vite-app`))
    log(`Wait a mininute, ${chalk.green.bold('vite-vue3-ts app template')} will be installed to ${chalk.green.bold(directory)}`)
    // const filePathArray = genFilePathArray('./resource')
    // writeFiles(filePathArray, 'src')
    const spinner = ora(chalk.hex('#DEADED').bold("👻 I'm trying......")).start()
    spinner.color = 'green'
    download('https://gitee.com/lvzhenglei/vue3-demo-admin.git', directory).then(() => {
      end = Date.now()
      spinner.stop()
      log(chalk.green.bold(`success in ${(end - start) / 1000} s`))
      log(`
then, you can do like this:
1. cd ${directory}
2. yarn / npm i
3. yarn dev / npm run dev
      `)
    }).catch(err => {
      log(chalk.red.bold('fail'))
      log(err)
      spinner.stop()
    })
  })
// .option('-p, --peppers', 'Add peppers')
// .option('-c, --cheese <type>', 'Add the specified type of cheese', 'marble')
// .option('-C, --no-cheese', 'You do not want any cheese');

program.parse()

// const options = program.opts();
// log('you ordered a pizza with:');
// if (options.peppers) log('  - peppers');
// const cheese = !options.cheese ? 'no' : options.cheese;
// log('  - %s cheese', cheese);

// const interval = setInterval(()=>{
//   process += 10
//   spinner.text = process + '%'
// }, 1000)

// setTimeout(()=>{
//   clearInterval(interval)
//   spinner.stop()
//   log(chalk.green.bold('Success'))
// }, 11000)
