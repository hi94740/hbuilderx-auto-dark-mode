const {exec} = require("child_process")
const hx = require("hbuilderx")
const dm = require("dark-mode-listener")

function updateTheme(mode) {
  switch (process.platform) {
		case "darwin" :
			exec(
			  [
			    "osascript -e '",
			    'tell application "System Events"',
			    'tell menu item "' +
			      hx.workspace.getConfiguration("autoDarkMode").get(mode + "Theme") +
			      '" of menu "主题" of menu item "主题" of menu "工具" of menu bar item "工具" of menu bar 1 of process "HBuilderX" to click',
			    "end tell",
			    "'"
			  ].join("\n")
			)
			break
		case "win32" :
			hx.window.showWarningMessage('Auto Dark Mode 尚未支持 Windows 平台，详情参见<a href="https://github.com/hi94740/hbuilderx-auto-dark-mode">项目 GitHub<a/>')
			break
		default :
			hx.window.showErrorMessage('Auto Dark Mode 不支持的平台')
	}
}

//该方法将在插件激活的时候调用
function activate(context) {
  dm.on("change", updateTheme)
}
//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {}
module.exports = {
  activate,
  deactivate
}
