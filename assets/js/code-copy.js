// Smart Code Copy Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Prevent multiple executions
    if (window.codeCopyInitialized) return;
    window.codeCopyInitialized = true;
    
    // Add a small delay to ensure all other scripts have run
    setTimeout(function() {
        // First, remove any existing copy buttons to prevent duplicates
        document.querySelectorAll('.copy-btn').forEach(btn => btn.remove());
        
        // Target the inner pre elements inside .highlighter-rouge containers
        const codeBlocks = document.querySelectorAll('.highlighter-rouge .highlight pre');
        
        console.log('Found', codeBlocks.length, 'code blocks to process');
        
        codeBlocks.forEach(function(codeBlock, index) {
            // Skip if already has a copy button
            if (codeBlock.querySelector('.copy-btn')) {
                console.log('Skipping block', index, '- already has copy button');
                return;
            }
            
            // Create copy button
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.setAttribute('aria-label', 'Copy code');
            copyBtn.innerHTML = 'Copy';
            
            // Add click handler
            copyBtn.addEventListener('click', function() {
                copySmartCode(codeBlock, copyBtn);
            });
            
            // Add button to the pre element (inner container)
            codeBlock.style.position = 'relative';
            codeBlock.appendChild(copyBtn);
            
            console.log('Added copy button to inner pre block', index);
        });
    }, 100); // 100ms delay
});

function copySmartCode(codeBlock, button) {
    let codeText = '';
    
    // Handle Rouge table format first
    const rougeTable = codeBlock.querySelector('table.rouge-table');
    if (rougeTable) {
        const codeLines = rougeTable.querySelectorAll('.rouge-code pre');
        codeLines.forEach(line => {
            codeText += line.textContent + '\n';
        });
    } else {
        // Get the actual code content
        const codeElement = codeBlock.querySelector('code') || codeBlock.querySelector('pre') || codeBlock;
        codeText = codeElement.textContent || codeElement.innerText;
    }
    
    // Smart filtering: remove shell prompts and comments
    const lines = codeText.split('\n');
    const filteredLines = lines
        .map(line => line.trim())
        .filter(line => line.length > 0) // Remove empty lines
        .map(line => {
            // Remove shell prompts ($ or #)
            if (line.startsWith('$ ')) {
                return line.substring(2);
            }
            if (line.startsWith('# ') && !line.startsWith('#!/')) {
                // Skip comment lines but keep shebangs
                return null;
            }
            if (line.startsWith('#') && line.includes('Password:') || line.includes('Connection failed')) {
                // Skip comment lines with passwords or error messages
                return null;
            }
            return line;
        })
        .filter(line => line !== null); // Remove null entries (comments)
    
    const finalCode = filteredLines.join('\n');
    
    // Copy to clipboard
    if (navigator.clipboard) {
        navigator.clipboard.writeText(finalCode).then(function() {
            showCopySuccess(button);
        }).catch(function() {
            fallbackCopy(finalCode, button);
        });
    } else {
        fallbackCopy(finalCode, button);
    }
}

function fallbackCopy(text, button) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess(button);
    } catch (err) {
        console.error('Copy failed:', err);
        button.innerHTML = 'Copy Failed';
        setTimeout(() => {
            button.innerHTML = 'Copy';
        }, 2000);
    }
    
    document.body.removeChild(textArea);
}

function showCopySuccess(button) {
    const originalText = button.innerHTML;
    button.classList.add('copied');
    button.innerHTML = 'Copied!';
    
    setTimeout(function() {
        button.classList.remove('copied');
        button.innerHTML = originalText;
    }, 2000);
}
