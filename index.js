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

const { genFilePathArray, writeFiles, download } = require('./io')

const program = new Command()

program
  .name('create-vite-app')
  .description('create-vite-app to do sth')
  .version('1.0.0', '-v, --version')
  .arguments('<project-directory>') 
  .description('clone a repository into a newly created directory')
  .action(directory => {
    console.log(chalk.red.bold('❤️ Welcome to create-vite-app ❤️'))
    console.log(`Wait a mininute, ${chalk.green.bold('vite app template')} will be installed to ${chalk.green.bold(directory)}`)
    // const filePathArray = genFilePathArray('./resource')
    // writeFiles(filePathArray, 'src')
    const spinner = ora(chalk.hex('#DEADED').bold("👻 I'm trying......")).start()
    spinner.color = 'green'
    download('https://gitee.com/lvzhenglei/vue3-demo-admin.git', directory).then(() => {
      spinner.stop()
      console.log(chalk.green.bold('success'))
      console.log(`
cd ${directory}
yarn or npm i
yarn dev or npm run dev
      `)
    }).catch(err => {
      console.log(chalk.red.bold('fail'))
      spinner.stop()
    })
  })
// .option('-p, --peppers', 'Add peppers')
// .option('-c, --cheese <type>', 'Add the specified type of cheese', 'marble')
// .option('-C, --no-cheese', 'You do not want any cheese');

program.parse()

// const options = program.opts();
// console.log('you ordered a pizza with:');
// if (options.peppers) console.log('  - peppers');
// const cheese = !options.cheese ? 'no' : options.cheese;
// console.log('  - %s cheese', cheese);

// const interval = setInterval(()=>{
//   process += 10
//   spinner.text = process + '%'
// }, 1000)

// setTimeout(()=>{
//   clearInterval(interval)
//   spinner.stop()
//   console.log(chalk.green.bold('Success'))
// }, 11000)
