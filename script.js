const webdriver = require('selenium-webdriver'),
     proxy = require('selenium-webdriver/lib/proxy');
async function asycall(){
	var driver = await new webdriver.Builder()
	.withCapabilities(webdriver.Capabilities.firefox())
	.setProxy(proxy.manual({
		ftp:'87.98.174.157:3128',
		http: '87.98.174.157:3128',
		https:'87.98.174.157:3128',
	}))
	.build()
	await driver.get("https://whatismyipaddress.com/").catch((err)=>{
		console.log(err);
	})
	await driver.sleep(100000)
	await driver.quit()
}
asycall();