import pytest
from appium import webdriver
from sauce_config import get_sauce_capabilities, sauce_username, sauce_access_key
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@pytest.fixture(scope='function')
def driver(request):
    sauce_url = f'https://{sauce_username}:{sauce_access_key}@ondemand.saucelabs.com/wd/hub'
    driver = webdriver.Remote(sauce_url, desired_capabilities=get_sauce_capabilities())

    yield driver
    driver.quit()

def test_vin_lookup(driver):
    wait = WebDriverWait(driver, 30)

    # Wait for the title and assert it's correct
    title = wait.until(EC.presence_of_element_located((By.XPATH, "xpath_of_title")))
    assert title.text == 'AutoTechPal', "Title does not match"

    # Click the VIN button
    vin_button = driver.find_element_by_accessibility_id("VIN Lookup")
    vin_button.click()

    # Enter VIN
    vin_input = wait.until(EC.presence_of_element_located((By.XPATH, "xpath_of_vin_input")))
    vin_input.send_keys("YourCarVinHere")

    # Assert correct info is being shown
    # Add assertions based on the expected vehicle info

    # Click back button
    back_button = driver.find_element
