# text-cleanup

A simple, privacy-focused application for cleaning text from unwanted formatting, special characters, and hidden artifacts commonly found when copying from AI tools, PDFs, websites, and documents.

Available as both a **web application** and a **command-line tool**.

## About

This tool helps you quickly clean up messy text by removing:
- 🧹 Hidden and zero-width characters
- 📝 Smart quotes and special punctuation
- 🎨 Markdown formatting artifacts
- 👻 Invisible Unicode characters
- 📄 Copy-paste formatting remnants
- 🤖 AI-generated text artifacts

**Privacy-focused**: All processing happens locally - no data is sent to any servers.

## Web Application

The web version is available at [your-deployment-url] and provides an easy-to-use interface for cleaning text in your browser.

### Web Development

#### Prerequisites
- Node.js (for development server)
- npm or Yarn package manager

#### Setup
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

#### Running in Development Mode

##### Primary Method: Using the dev script
```bash
# Using npm
npm run dev

# Using Yarn
yarn dev
```

This starts a Node.js http-server on `http://localhost:3000` and automatically opens your browser.

##### Alternative: Using Vercel Dev (if not in Vercel environment)
```bash
# Using npm
npm run dev:vercel

# Using Yarn
yarn dev:vercel
```

Note: If you get a "recursive invocation" error, it means you're already in a Vercel environment. Use the primary method above instead.

## Command Line Tool

### Installation

#### Global Installation
```bash
npm install -g text-cleanup
```

#### Local Installation
```bash
npm install text-cleanup
npx text-cleanup --help
```

#### From Source
```bash
git clone https://github.com/mopx/text-cleanup.git
cd text-cleanup
npm install
npm link  # For global access
```

### CLI Usage

```bash
text-cleanup [options] [input-file] [output-file]
```

#### Options

- `-h, --help` - Show help message
- `-v, --version` - Show version information
- `-i, --input` - Input file path (default: stdin)
- `-o, --output` - Output file path (default: stdout)
- `--in-place` - Modify the input file in place

#### Examples

```bash
# Clean text from stdin to stdout
echo "This is **bold** text with 'smart quotes'." | text-cleanup

# Clean a file and output to another file
text-cleanup messy-file.txt clean-file.txt

# Clean a file in place
text-cleanup --in-place document.txt

# Clean using explicit options
text-cleanup -i input.txt -o cleaned.txt

# Use in a pipeline
curl -s https://example.com/api/text | text-cleanup | less
```

## Docker Usage

The CLI tool is also available as a Docker container for easy deployment and usage without Node.js installation.

### Pull from Docker Hub (when available)
```bash
docker pull text-cleanup/cli
```

### Build from Source
```bash
git clone https://github.com/mopx/text-cleanup.git
cd text-cleanup
docker build -t text-cleanup-cli .
```

### Docker Examples

```bash
# Clean text from stdin
echo "Messy **formatted** text" | docker run --rm -i text-cleanup-cli

# Clean a file (mount current directory)
docker run --rm -v $(pwd):/data text-cleanup-cli /data/input.txt /data/output.txt

# Show help
docker run --rm text-cleanup-cli --help

# Show version
docker run --rm text-cleanup-cli --version

# Use as part of a pipeline
curl -s https://api.example.com/text | docker run --rm -i text-cleanup-cli | jq .
```

### Docker Compose

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  text-cleanup:
    image: text-cleanup-cli
    volumes:
      - ./data:/data
    command: ["/data/input.txt", "/data/output.txt"]
```

Run with:
```bash
docker-compose run --rm text-cleanup
```

## Production Deployment

### Web Application Deployment

#### Deploy to Vercel (Recommended)

##### Method 1: Using Vercel CLI
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

##### Method 2: Using Git Integration
1. Connect your repository to Vercel at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically build and deploy your app
4. Any pushes to the main branch will trigger automatic redeployments

#### Deploy to Other Platforms

##### Netlify
1. Connect your repository to Netlify at [netlify.com](https://netlify.com)
2. Set build settings:
   - Build command: (leave empty or use `echo 'No build required'`)
   - Publish directory: `/` (root directory)

##### GitHub Pages
1. Go to your repository settings on GitHub
2. Navigate to Pages section
3. Select source branch (usually `main`)
4. Your app will be available at `https://username.github.io/text-cleanup`

##### Manual Deployment
Since this is a static site, you can deploy it to any web server:
1. Upload `index.html`, `script.js`, `styles.css`, and any other assets to your web server
2. Ensure the server can serve static files
3. Access your domain to view the app

### CLI Distribution

The CLI tool can be distributed via:

- **npm**: Publish to npm registry for easy installation
- **Docker Hub**: Container images for cross-platform deployment
- **GitHub Releases**: Binary distributions for different platforms
- **Package Managers**: Submit to platform-specific package managers

## Project Structure
```
text-cleanup/
├── bin/
│   └── text-cleanup        # CLI executable
├── lib/
│   └── text-cleaner.js     # Shared text cleaning logic
├── test-files/             # Test files for development
├── index.html              # Web app main HTML
├── script.js              # Web app JavaScript
├── styles.css             # Web app styles
├── package.json           # Node.js project configuration
├── Dockerfile             # Docker container definition
├── .dockerignore          # Docker build exclusions
├── vercel.json            # Vercel deployment config
└── README.md              # This file
```

## API Reference

### TextCleaner Class

The core text cleaning functionality is available as a Node.js module:

```javascript
const TextCleaner = require('text-cleanup/lib/text-cleaner');

const cleaner = new TextCleaner();
const cleaned = cleaner.cleanText('**Bold** text with 'smart quotes'.');
console.log(cleaned); // "Bold text with 'smart quotes'."
```

#### Methods

- `cleanText(text)` - Main cleaning function that applies all cleaning methods
- `removeHiddenCharacters(text)` - Remove zero-width and invisible characters
- `normalizeWhitespace(text)` - Normalize spaces, quotes, and dashes
- `removeFormatting(text)` - Remove markdown and formatting artifacts
- `cleanSpecialCharacters(text)` - Clean problematic Unicode characters

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
- ✨ New features (web app, CLI, or Docker improvements)
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations
- 🧪 Tests
- 📦 Package management and distribution

### Development Guidelines
- Keep the code simple and readable
- Test your changes thoroughly (both web and CLI versions)
- Follow existing code style and conventions
- Update documentation as needed
- Ensure Docker containers build and run correctly

Feel free to open an issue if you have ideas, questions, or found a bug!

## Author

Created by **[@mopx](https://github.com/mopx)**

- GitHub: [github.com/mopx](https://github.com/mopx)
- Repository: [github.com/mopx/text-cleanup](https://github.com/mopx/text-cleanup)

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