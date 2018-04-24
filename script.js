const webdriver = require('selenium-webdriver'),
     proxy = require('selenium-webdriver/lib/proxy');
async function asycall(){
	var driver = await new webdriver.Builder()
	.withCapabilities(webdriver.Capabilities.chrome())
	.setProxy(proxy.manual({
		ftp:'87.98.174.157:3128',
		http: '87.98.174.157:3128',
		https:'87.98.174.157:3128',
	}))
	.build()
	await driver.get("http://www.sustainablesites.org/").catch((err)=>{
		console.log(err);
	})
	await driver.sleep(100000)
	await driver.quit()
}
asycall();