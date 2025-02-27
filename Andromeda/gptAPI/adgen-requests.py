import asyncio
from pyppeteer import launch

async def send_message():
    browser = await launch()
    page = await browser.newPage()

    # Set the authorization token as a request header
    await page.setExtraHTTPHeaders({'Authorization': 'API_KEY_HERE'})

    # Navigate to the Discord channel URL
    await page.goto('DISCORD_CHANNEL_MESSAGES_REQUEST')

    # Wait for the text area selector to be visible
    await page.waitForSelector('textarea.slateTextArea-1Mkdgw')

    # Type the desired message in the text area
    await page.type('textarea.slateTextArea-1Mkdgw', '/imagine')

    # Press the Enter key to send the message
    # await page.keyboard.press('Enter')

    # Wait for the message to be sent (optional)
    await asyncio.sleep(2)  # Adjust the sleep time as needed

    await browser.close()

# Run the send_message function
asyncio.get_event_loop().run_until_complete(send_message())
# import requests

# payload = {
#     'content':"/imagine advertisement for a middle aged man wearing shoes with a suitable caption 4k, 8k, 16k, full ultra hd, high resolution and cinematic photography --ar 3:2  --v 5 --upbeta --v 5 --Screen Space Reflections --Diffraction Grading --Chromatic Aberration --GB Displacement --Scan Lines --Ambient Occlusion --Anti-Aliasing FKAA --TXAA --RTX --SSAO --OpenGL-Shader’s --Post Processing --Post-Production --Cell Shading --Tone Mapping --CGI --VFX --SFX --insanely detailed and intricate --hyper maximalist --elegant --dynamic pose --photography --volumetric --ultra-detailed --intricate details --super detailed --ambient –uplight"
# } 
# r=requests.post("DISCORD_POST_REQUEST_HERE",data=payload,headers=header)
import requests
from bs4 import BeautifulSoup

# URL of the website
url = "DISCORD_URL_HERE"  # Replace with the actual website URL

# Send a GET request to the website
response = requests.get(url)

# Parse the HTML content
soup = BeautifulSoup(response.content, "html.parser")

# Find the textbox element
textbox = soup.find("div", {"class": "markup-eYLPri"})  # Replace with the actual class name

# Clear the textbox (optional)
textbox.string = ""

# Type in the desired text
textbox.string = "/imagine"

# Print the modified HTML content
print(soup.prettify())
