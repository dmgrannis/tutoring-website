const QRCode = require('qrcode');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateFlyer() {
  // Generate QR code as data URL
  const qrCodeDataUrl = await QRCode.toDataURL('https://dillontutors.com', {
    width: 300,
    margin: 2,
  });

  // Create HTML template
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: white;
      color: #1e3a8a;
      padding: 0;
      line-height: 1.6;
    }
    .navbar {
      background: linear-gradient(to bottom, #1e40af, #1e3a8a);
      padding: 15px 40px;
      margin-bottom: 30px;
    }
    .navbar h2 {
      color: white;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 1px;
    }
    .container {
      max-width: 8.5in;
      margin: 0 auto;
      padding: 0 40px 40px;
    }
    h1 {
      font-size: 48px;
      font-weight: 600;
      text-align: center;
      color: #1e3a8a;
      margin-bottom: 30px;
      letter-spacing: -0.5px;
    }
    .image-container {
      width: 100%;
      margin-bottom: 20px;
      border-radius: 20px;
      overflow: hidden;
    }
    .image-container img {
      width: 100%;
      height: auto;
      display: block;
    }
    .tagline {
      font-size: 20px;
      text-align: center;
      color: #4b5563;
      margin-bottom: 40px;
      padding: 0 20px;
    }
    .qualifications {
      margin-bottom: 40px;
    }
    .qualifications h2 {
      font-size: 32px;
      font-weight: 600;
      text-align: center;
      color: #1e3a8a;
      margin-bottom: 30px;
      border-bottom: 2px solid #1e3a8a;
      padding-bottom: 10px;
    }
    .uni-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 30px;
    }
    .uni-card {
      background: #eff6ff;
      border-radius: 15px;
      padding: 20px;
    }
    .uni-card h3 {
      font-size: 22px;
      font-weight: 600;
      color: #1e3a8a;
      margin-bottom: 5px;
    }
    .uni-card .ranking {
      font-size: 14px;
      color: #6b7280;
      margin-bottom: 15px;
    }
    .uni-card ul {
      list-style: none;
      padding: 0;
    }
    .uni-card li {
      font-size: 16px;
      color: #374151;
      margin-bottom: 8px;
      padding-left: 20px;
      position: relative;
    }
    .uni-card li:before {
      content: "•";
      color: #1e3a8a;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
    .qr-section {
      text-align: center;
      margin-top: 40px;
    }
    .qr-section p {
      font-size: 24px;
      font-weight: 500;
      color: #1e3a8a;
      margin-bottom: 20px;
    }
    .qr-code {
      display: inline-block;
      background: white;
      padding: 15px;
      border-radius: 10px;
    }
    .qr-code img {
      width: 250px;
      height: 250px;
      display: block;
    }
    .test-scores {
      background: #eff6ff;
      border-radius: 15px;
      padding: 20px;
      margin-bottom: 30px;
    }
    .test-scores h3 {
      font-size: 20px;
      font-weight: 600;
      color: #1e3a8a;
      text-align: center;
      margin-bottom: 15px;
    }
    .test-badges {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
    .test-badge {
      background: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      color: #374151;
      border: 1px solid #bfdbfe;
    }
    .test-badge strong {
      color: #1e3a8a;
    }
    .testimonials {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 30px;
    }
    .testimonial {
      background: #eff6ff;
      border-radius: 15px;
      padding: 20px;
    }
    .testimonial p {
      font-size: 16px;
      font-style: italic;
      color: #374151;
      margin-bottom: 10px;
      text-align: center;
    }
    .testimonial .author {
      color: #6b7280;
      text-align: center;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="navbar">
    <h2>Dillon Grannis</h2>
  </div>
  <div class="container">
    <h1>Level Up Your Math</h1>
    
    <p class="tagline">
      Math tutoring tailored to your learning style and goals
    </p>
    
    <div class="image-container">
      <img src="file://${path.join(__dirname, 'public/images/littletutoringpic.jpg')}" alt="Tutoring">
    </div>
    
    <p class="tagline">
      Whether struggling or excelling, I can help you take you to the next level of math.
    </p>
    
    <div class="test-scores">
      <h3>High School Test Scores</h3>
      <div class="test-badges">
        <span class="test-badge">AP Calculus BC: <strong>5</strong></span>
        <span class="test-badge">AP Physics 1: <strong>5</strong></span>
        <span class="test-badge">AP Physics C: <strong>5</strong></span>
        <span class="test-badge">AP Microeconomics: <strong>5</strong></span>
        <span class="test-badge">SAT Math: <strong>790</strong></span>
      </div>
    </div>
    
    <div class="qualifications">
      <h2>My Qualifications</h2>
      
      <div class="uni-cards">
        <div class="uni-card">
          <h3>UT Austin</h3>
          <p class="ranking">#13 nationally in math — US News</p>
          <ul>
            <li>I'm a Math PhD student here</li>
            <li>With the Provost's Graduate Excellence Fellowship</li>
          </ul>
        </div>
        
        <div class="uni-card">
          <h3>UChicago</h3>
          <p class="ranking">#6 nationally in math — US News</p>
          <ul>
            <li>BA in Mathematics with Honors (3.9 GPA)</li>
            <li>BA in Economics</li>
            <li>Minor in Computer Science</li>
            <li>Straight As in Honors Physics Sequence</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="testimonials">
      <div class="testimonial">
        <p>"Dillon is the best math teacher I've ever had"</p>
        <p class="author">– Hannah</p>
      </div>
      <div class="testimonial">
        <p>"That's the best that's ever been explained to me"</p>
        <p class="author">– Anthony</p>
      </div>
    </div>
    
    <div class="qr-section">
      <p>More Info Here</p>
      <div class="qr-code">
        <img src="${qrCodeDataUrl}" alt="QR Code">
      </div>
    </div>
  </div>
</body>
</html>
  `;

  // Write HTML to temp file
  const htmlPath = path.join(__dirname, 'flyer-temp.html');
  fs.writeFileSync(htmlPath, html);

  // Generate PDF using Puppeteer
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: 'load', timeout: 60000 });
  await page.pdf({
    path: 'flyer.pdf',
    format: 'Letter',
    printBackground: true,
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in',
    },
  });

  await browser.close();
  
  // Clean up temp HTML file
  fs.unlinkSync(htmlPath);

  console.log('Flyer generated successfully: flyer.pdf');
}

generateFlyer().catch(console.error);

