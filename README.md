# text-cleanup

A simple, privacy-focused web application for cleaning text from unwanted formatting, special characters, and hidden artifacts commonly found when copying from AI tools, PDFs, websites, and documents.

## About

This tool helps you quickly clean up messy text by removing:
- 🧹 Hidden and zero-width characters
- 📝 Smart quotes and special punctuation
- 🎨 Markdown formatting artifacts
- 👻 Invisible Unicode characters
- 📄 Copy-paste formatting remnants
- 🤖 AI-generated text artifacts

**Privacy-focused**: All processing happens locally in your browser - no data is sent to any servers.

## Author

Created by **[@mopx](https://github.com/mopx)**

- GitHub: [github.com/mopx](https://github.com/mopx)
- Repository: [github.com/mopx/text-cleanup](https://github.com/mopx/text-cleanup)

## Development

### Prerequisites
- Node.js (for development server)
- npm or Yarn package manager

### Setup
1. Clone the repository:
```bash
git clone https://github.com/mopx/text-cleanup.git
cd text-cleanup
```

2. Install dependencies:
```bash
# Using npm
npm install

# Using Yarn
yarn install
```

### Running in Development Mode

#### Primary Method: Using the dev script
```bash
# Using npm
npm run dev

# Using Yarn
yarn dev
```

This starts a Node.js http-server on `http://localhost:3000` and automatically opens your browser.

#### Alternative: Using Vercel Dev (if not in Vercel environment)
```bash
# Using npm
npm run dev:vercel

# Using Yarn
yarn dev:vercel
```

Note: If you get a "recursive invocation" error, it means you're already in a Vercel environment. Use the primary method above instead.

#### Manual Server Options

#### Recommended: Node.js http-server
```bash
# Install globally first
# With npm: npm install -g http-server
# With Yarn: yarn global add http-server

# Run the server
http-server -p 8000
```

#### VS Code Live Server (Recommended for VS Code users)
```bash
# Install the Live Server extension in VS Code
# Right-click on index.html and select "Open with Live Server"
```

#### Alternative: Python (optional)
```bash
# Using Python 3 (if available)
python3 -m http.server 8000

# Using Python 2 (if available)
python -m SimpleHTTPServer 8000
```

## Production Deployment

### Deploy to Vercel (Recommended)

#### Method 1: Using Vercel CLI
1. Install Vercel CLI:
```bash
# Using npm
npm install -g vercel

# Using Yarn
yarn global add vercel
```

2. Deploy:
```bash
vercel
```

Follow the prompts to configure your deployment.

#### Method 2: Using Git Integration
1. Connect your repository to Vercel at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically build and deploy your app
4. Any pushes to the main branch will trigger automatic redeployments

### Deploy to Other Platforms

#### Netlify
1. Connect your repository to Netlify at [netlify.com](https://netlify.com)
2. Set build settings:
   - Build command: (leave empty or use `echo 'No build required'`)
   - Publish directory: `/` (root directory)

#### GitHub Pages
1. Go to your repository settings on GitHub
2. Navigate to Pages section
3. Select source branch (usually `main`)
4. Your app will be available at `https://username.github.io/text-cleanup`

#### Manual Deployment
Since this is a static site, you can deploy it to any web server:
1. Upload `index.html`, `script.js`, `styles.css`, and any other assets to your web server
2. Ensure the server can serve static files
3. Access your domain to view the app

## Project Structure
```
text-cleanup/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── styles.css          # CSS styles
├── package.json        # Project configuration
├── vercel.json         # Vercel deployment config
└── README.md           # This file
```

## Contributing

We welcome contributions to the text-cleanup project! Here's how you can help:

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Types of Contributions
- 🐛 Bug fixes
- ✨ New features
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations
- 🧪 Tests

### Development Guidelines
- Keep the code simple and readable
- Test your changes thoroughly
- Follow existing code style and conventions
- Update documentation as needed

Feel free to open an issue if you have ideas, questions, or found a bug!

## License

This project is licensed under the MIT License - see the details below:

```
MIT License

Copyright (c) 2025 text-cleanup

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

**Made with ❤️ by the open source community. Contributions are always welcome!**
