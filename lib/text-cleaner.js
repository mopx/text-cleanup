/**
 * Text Cleaning Library
 * Extracted from the web version for reuse in CLI and other contexts
 */

class TextCleaner {
    /**
     * Main cleaning function that applies all cleaning methods
     * @param {string} text - Input text to clean
     * @returns {string} - Cleaned text
     */
    cleanText(text) {
        if (!text || typeof text !== 'string') {
            return '';
        }

        if (!text.trim()) {
            return '';
        }

        let cleaned = text;

        // Remove various types of hidden and special characters
        cleaned = this.removeHiddenCharacters(cleaned);
        cleaned = this.normalizeWhitespace(cleaned);
        cleaned = this.removeFormatting(cleaned);
        cleaned = this.cleanSpecialCharacters(cleaned);

        return cleaned;
    }

    /**
     * Remove hidden and zero-width characters
     * @param {string} text - Input text
     * @returns {string} - Text with hidden characters removed
     */
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

    /**
     * Normalize whitespace and special characters
     * @param {string} text - Input text
     * @returns {string} - Text with normalized whitespace
     */
    normalizeWhitespace(text) {
        return text
            // Convert various dash types to regular dash
            .replace(/[–—−]/g, '-')
            // Convert smart quotes to regular quotes
            .replace(/[""]/g, '"')
            .replace(/['']/g, "'")
            // Normalize multiple spaces to single space (but preserve newlines)
            .replace(/[ \t]+/g, ' ')
            // Remove trailing spaces from lines
            .replace(/[ \t]+$/gm, '')
            // Remove leading spaces from lines (optional)
            .replace(/^[ \t]+/gm, '');
    }

    /**
     * Remove formatting artifacts like markdown
     * @param {string} text - Input text
     * @returns {string} - Text with formatting removed
     */
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

    /**
     * Clean special characters that might cause issues
     * @param {string} text - Input text
     * @returns {string} - Text with special characters cleaned
     */
    cleanSpecialCharacters(text) {
        return text
            // Remove or replace problematic characters
            .replace(/[^\x00-\x7F\u00A0-\u024F\u0400-\u04FF\u1E00-\u1EFF\u2000-\u206F\u20A0-\u20CF\u2100-\u214F\u2190-\u21FF]/g, '')
            // Clean up any remaining multiple spaces (but preserve newlines)
            .replace(/[ \t]+/g, ' ')
            // Trim spaces from beginning and end of each line
            .replace(/^[ \t]+|[ \t]+$/gm, '');
    }
}

module.exports = TextCleaner;