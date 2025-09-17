FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (if any) - use npm install since no package-lock exists
RUN npm install --only=production

# Copy source code
COPY lib/ ./lib/
COPY bin/ ./bin/

# Make CLI executable
RUN chmod +x bin/text-cleanup

# Create a non-root user
RUN addgroup -g 1001 -S textcleanup && \
    adduser -S textcleanup -u 1001

# Change to non-root user
USER textcleanup

# Set entrypoint to the CLI
ENTRYPOINT ["node", "bin/text-cleanup"]

# No default CMD, so it can process stdin by default