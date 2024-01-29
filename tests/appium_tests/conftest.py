from appium import webdriver
import os
import pytest

sauce_username = os.environ['SAUCE_USERNAME']
sauce_access_key = os.environ['SAUCE_ACCESS_KEY']


@pytest.fixture
def ios_rdc_driver(request, data_center):
    caps = {
        'username': sauce_username,
        'accessKey': sauce_access_key,
        'deviceName': 'iPhone.*',
        'platformName': 'iOS',
        'build': 'AutoTechPal-iOS',
        'name': request.node.name,
        'app': '', # Add the app URL here
    }

    if data_center and data_center.lower() == 'eu':
        sauce_url = "http://ondemand.eu-central-1.saucelabs.com/wd/hub"
    else:
        sauce_url = "http://ondemand.us-west-1.saucelabs.com/wd/hub"

    driver = webdriver.Remote(sauce_url, desired_capabilities=caps)
    yield driver
    sauce_result = "failed" if request.node.rep_call.failed else "passed"
    driver.execute_script("sauce:job-result={}".format(sauce_result))
    driver.quit()


@pytest.fixture
def android_rdc_driver(request, data_center):
    caps = {
        'username': sauce_username,
        'accessKey': sauce_access_key,
        'deviceName': 'Google.*',
        'platformName': 'Android',
        'build': 'AutoTechPal-Android',
        'name': request.node.name,
        'app': '',  # Add the app URL here
    }

    if data_center and data_center.lower() == 'eu':
        sauce_url = 'http://ondemand.eu-central-1.saucelabs.com/wd/hub'
    else:
        sauce_url = 'http://ondemand.us-west-1.saucelabs.com/wd/hub'

    driver = webdriver.Remote(sauce_url, desired_capabilities=caps)
    yield driver
    sauce_result = "failed" if request.node.rep_call.failed else "passed"
    driver.execute_script("sauce:job-result={}".format(sauce_result))
    driver.quit()
