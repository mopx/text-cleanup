class TextCleanup {
    constructor() {
        this.inputText = document.getElementById('input-text');
        this.outputText = document.getElementById('output-text');
        this.cleanBtn = document.getElementById('clean-btn');
        this.clearBtn = document.getElementById('clear-btn');
        this.copyBtn = document.getElementById('copy-btn');
        
        this.initEventListeners();
    }
    
    initEventListeners() {
        this.cleanBtn.addEventListener('click', () => this.cleanText());
        this.clearBtn.addEventListener('click', () => this.clearAll());
        this.copyBtn.addEventListener('click', () => this.copyToClipboard());
        
        // Enable copy button when there's output text
        this.outputText.addEventListener('input', () => {
            this.copyBtn.disabled = this.outputText.value.trim() === '';
        });
        
        // Real-time cleaning option (uncomment if desired)
        // this.inputText.addEventListener('input', () => this.cleanText());
    }
    
    cleanText() {
        const input = this.inputText.value;
        if (!input.trim()) {
            this.outputText.value = '';
            this.copyBtn.disabled = true;
            return;
        }
        
        let cleaned = input;
        
        // Remove various types of hidden and special characters
        cleaned = this.removeHiddenCharacters(cleaned);
        cleaned = this.normalizeWhitespace(cleaned);
        cleaned = this.removeFormatting(cleaned);
        cleaned = this.cleanSpecialCharacters(cleaned);
        
        this.outputText.value = cleaned;
        this.copyBtn.disabled = false;
    }
    
    removeHiddenCharacters(text) {
        return text
            // Remove zero-width characters
            .replace(/[\u200B-\u200D\uFEFF]/g, '')
            // Remove other invisible characters
            .replace(/[\u00AD\u2060\u2061\u2062\u2063\u2064]/g, '')
            // Remove directional marks
            .replace(/[\u202A-\u202E]/g, '')
            // Remove various spaces that might be problematic
            .replace(/[\u00A0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/g, ' ')
            // Remove control characters (except tab, newline, carriage return)
            .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, '');
    }
    
    normalizeWhitespace(text) {
        return text
            // Convert various dash types to regular dash
            .replace(/[–—−]/g, '-')
            // Convert smart quotes to regular quotes
            .replace(/[""]/g, '"')
            .replace(/['']/g, "'")
            // Normalize multiple spaces to single space
            .replace(/[ ]+/g, ' ')
            // Normalize multiple newlines (keep at most 2 consecutive)
            .replace(/\n{3,}/g, '\n\n')
            // Remove trailing spaces from lines
            .replace(/[ ]+$/gm, '')
            // Remove leading spaces from lines (optional)
            .replace(/^[ ]+/gm, '');
    }
    
    removeFormatting(text) {
        return text
            // Remove common AI/formatting artifacts
            .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markdown
            .replace(/\*(.*?)\*/g, '$1')     // Remove italic markdown
            .replace(/_(.*?)_/g, '$1')       // Remove underline markdown
            .replace(/`(.*?)`/g, '$1')       // Remove code markdown
            .replace(/~~(.*?)~~/g, '$1')     // Remove strikethrough
            // Remove other formatting characters that might be artifacts
            .replace(/[\u2022\u25E6\u2043\u2219]/g, '•') // Normalize bullet points
            .replace(/[\u2013\u2014]/g, '-'); // Normalize dashes
    }
    
    cleanSpecialCharacters(text) {
        return text
            // Remove or replace problematic characters
            .replace(/[^\x00-\x7F\u00A0-\u024F\u0400-\u04FF\u1E00-\u1EFF\u2000-\u206F\u20A0-\u20CF\u2100-\u214F\u2190-\u21FF]/g, '')
            // Clean up any remaining multiple spaces
            .replace(/\s+/g, ' ')
            // Trim the final result
            .trim();
    }
    
    clearAll() {
        this.inputText.value = '';
        this.outputText.value = '';
        this.copyBtn.disabled = true;
        this.inputText.focus();
    }
    
    async copyToClipboard() {
        const text = this.outputText.value;
        
        if (!text) {
            return;
        }
        
        try {
            if (navigator.clipboard && window.isSecureContext) {
                // Use modern clipboard API if available
                await navigator.clipboard.writeText(text);
            } else {
                // Fallback for older browsers or non-secure contexts
                this.fallbackCopyToClipboard(text);
            }
            
            // Visual feedback
            this.showCopyFeedback();
        } catch (err) {
            console.error('Failed to copy text: ', err);
            // Try fallback method
            this.fallbackCopyToClipboard(text);
        }
    }
    
    fallbackCopyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            this.showCopyFeedback();
        } catch (err) {
            console.error('Fallback: Could not copy text: ', err);
        } finally {
            document.body.removeChild(textArea);
        }
    }
    
    showCopyFeedback() {
        const originalText = this.copyBtn.textContent;
        this.copyBtn.textContent = 'Copied!';
        this.copyBtn.classList.add('copied');
        
        setTimeout(() => {
            this.copyBtn.textContent = originalText;
            this.copyBtn.classList.remove('copied');
        }, 2000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TextCleanup();
});