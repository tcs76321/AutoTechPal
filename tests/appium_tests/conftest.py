from appium import webdriver
import os

sauce_username = os.environ['SAUCE_USERNAME']
sauce_access_key = os.environ['SAUCE_ACCESS_KEY']

desired_caps = {
    'platformName': 'Android',  # or 'iOS'
    'deviceName': 'Android Emulator',  # or an iOS device
    'app': 'http://path-to-your-app',  # URL to your app on Sauce Storage or a public URL
    'browserName': '',
    'name': 'Sample Test',
    'build': 'Python Android',
    'appiumVersion': '1.20.2',  # Specify Appium version
}

# Connect to Sauce Labs
driver = webdriver.Remote(
    command_executor=f'https://{sauce_username}:{sauce_access_key}@ondemand.saucelabs.com/wd/hub',
    desired_capabilities=desired_caps
)

@pytest.fixture
def ios_rdc_driver(request, data_center):

    caps = {
        'username': username_cap,
        'accessKey': access_key_cap,
        'deviceName': 'iPhone.*',
        'platformName': 'iOS',
        'build': 'RDC-iOS-Python-Best-Practice',
        'name': request.node.name,
        'app': 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.7.1/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa'
    }

    if data_center and data_center.lower() == 'eu':
        sauce_url = "http://ondemand.eu-central-1.saucelabs.com/wd/hub"
    else:
        sauce_url = "http://ondemand.us-west-1.saucelabs.com/wd/hub"

    driver = appiumdriver.Remote(sauce_url, desired_capabilities=caps)
    yield driver
    sauce_result = "failed" if request.node.rep_call.failed else "passed"
    driver.execute_script("sauce:job-result={}".format(sauce_result))
    driver.quit()


@pytest.fixture
def android_rdc_driver(request, data_center):

    username_cap = environ['SAUCE_USERNAME']
    access_key_cap = environ['SAUCE_ACCESS_KEY']

    caps = {
        'username': username_cap,
        'accessKey': access_key_cap,
        'deviceName': 'Google.*',
        'platformName': 'Android',
        'build': 'RDC-Android-Python-Best-Practice',
        'name': request.node.name,
        'app': "https://github.com/saucelabs/sample-app-mobile/releases/download/2.7.1/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk"
    }

    if data_center and data_center.lower() == 'eu':
        sauce_url = 'http://ondemand.eu-central-1.saucelabs.com/wd/hub'
    else:
        sauce_url = 'http://ondemand.us-west-1.saucelabs.com/wd/hub'

    driver = appiumdriver.Remote(sauce_url, desired_capabilities=caps)
    yield driver
    sauce_result = "failed" if request.node.rep_call.failed else "passed"
    driver.execute_script("sauce:job-result={}".format(sauce_result))
    driver.quit()
