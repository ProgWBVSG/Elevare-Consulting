import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("https://claude.ai/public/artifacts/39705991-df84-4339-9388-d04c1c1cdf7a")
        
        await page.wait_for_selector("iframe")
        iframe_element = await page.query_selector("iframe")
        frame = await iframe_element.content_frame()
        
        await frame.wait_for_load_state('networkidle')
        
        html = await frame.content()
        with open("artifact_content.html", "w", encoding="utf-8") as f:
            f.write(html)
        await browser.close()

asyncio.run(main())
