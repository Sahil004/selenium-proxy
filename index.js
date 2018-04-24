const express = require('express');
const webdriver = require('selenium-webdriver'),
     proxy = require('selenium-webdriver/lib/proxy');

const app = express()
app.get('/', (req, res) => {
	res.send("hello")
	async function asycall(){
		var driver = await new webdriver.Builder()
		.withCapabilities(webdriver.Capabilities.firefox())
		.setProxy(proxy.manual({
			ftp:'87.98.174.157:3128',
			http: '87.98.174.157:3128',
			https:'87.98.174.157:3128',
		}))
		.build()
		await driver.get("http://www.sustainablesites.org/").catch((err)=>{
			console.log(err)
		})
		await driver.sleep(100000)
		await driver.quit()
	}
	asycall();
})
	


app.listen(3000, () => console.log('Example app listening on port 3000!'))
