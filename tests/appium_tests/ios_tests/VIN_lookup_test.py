import pytest
from conftest import ios_rdc_driver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def test_vin_lookup_rav4(ios_rdc_driver):
    wait = WebDriverWait(ios_rdc_driver, 10)

    # Wait for the title and assert it's correct
    title = wait.until(EC.presence_of_element_located((By.XPATH, "xpath_of_title")))
    assert title.text == 'AutoTechPal', "Title does not match"

    # Click the VIN button
    vin_button = ios_rdc_driver.find_element_by_accessibility_id("VIN Lookup")
    vin_button.click()

    # Enter VIN
    vin_input = wait.until(EC.presence_of_element_located((By.XPATH, "xpath_of_vin_input")))
    vin_input.send_keys("2T3RFREV1FW000000")

    # Assert correct info is being shown
    # TODO:

    # Click back button
    back_button = ios_rdc_driver.find_element

def test_vin_lookup_camry(ios_rdc_driver):
    wait = WebDriverWait(ios_rdc_driver, 10)

    # Wait for the title and assert it's correct
    title = wait.until(EC.presence_of_element_located((By.XPATH, "xpath_of_title")))
    assert title.text == 'AutoTechPal', "Title does not match"

    # Click the VIN button
    vin_button = ios_rdc_driver.find_element_by_accessibility_id("VIN Lookup")
    vin_button.click()

    # Enter VIN
    vin_input = wait.until(EC.presence_of_element_located((By.XPATH, "xpath_of_vin_input")))
    vin_input.send_keys("4T1BF1FK0GU000000")

    # Assert correct info is being shown
    # TODO:

    # Click back button
    back_button = ios_rdc_driver.find_element

    assert title.text == 'AutoTechPal', "Title does not match"
