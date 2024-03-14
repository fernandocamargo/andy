const puppeteer = require('puppeteer');

(async () => {
    // Launch a new browser session.
    const browser = await puppeteer.launch({ defaultViewport: null });
    const page = await browser.newPage();

    // Go to your HTML page
    await page.goto('http://192.168.0.120:8080/', {
        waitUntil: 'networkidle0' // Wait for all network connections to finish
    });

    // Create a PDF from the page content
    // Specify custom dimensions if needed to "widen" the layout.
    await page.pdf({
        path: 'mediakit.pdf', // Output file path
        printBackground: true, // Print background graphics,
        width: '1123px',
        height: '794px',
    });

    await browser.close();
})();
