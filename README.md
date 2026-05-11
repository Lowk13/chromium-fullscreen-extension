# chromium-fullscreen-extension
# Fullscreen Fix (F11 Alternative)

A simple extension that toggles fullscreen mode (like pressing F11) **without triggering the infamous window-shrinking bug**. 

### 🐛 The Problem
If you've ever tried to use a fullscreen extension in Chrome/Brave, you've probably noticed a highly annoying Chromium bug: if your browser window is maximized (filling the screen) and you enter fullscreen via an extension, exiting fullscreen causes Chrome to "forget" its maximized state. It shrinks your browser into a smaller, unmaximized window. 

### 💡 The Solution
Instead of relying on the buggy `chrome.windows` API to resize the browser window, this extension injects the native HTML5 Web API (`requestFullscreen()`) directly into the active tab. This is the exact same method YouTube uses for its videos. 
The result? When you exit fullscreen, your window remains perfectly maximized, exactly as you left it.

### ⚙️ How to Install
Since this is an unpacked developer extension, you need to load it manually:
1. Download this repository as a `.zip` file (Click the green **Code** button > **Download ZIP**) and extract it to a folder.
2. Open Google Chrome/Brave and go to `chrome://extensions/` / `brave://extensions/`.
3. Enable **Developer mode** (toggle switch in the top right corner).
4. Click the **Load unpacked** button in the top left.
5. Select the folder where you extracted the files.
6. Pin the extension to your toolbar for easy one-click fullscreen access!

*(Note: Due to Google's security restrictions, this extension will not work on internal `chrome://`// `brave://` pages or the empty New Tab page. It works flawlessly? on any standard website).*

---
**Disclaimer:** This project, including the code and the debugging process to bypass the Chromium window bug, was created with the assistance of AI (Google Gemini). Published by a human who just wanted to fix an annoying issue and share the solution with the community! 🤖🤝👨‍💻
