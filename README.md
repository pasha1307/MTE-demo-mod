# MTE-solution-demo
**1. UI:**
- text area with the input text; text area with the output text; editable DIVs with the HTML output text and mapped replacements
- buttons: upload file, export file, insert text, cancel
- search input box

**2. Functionality:**
- Main approach is to replace the Key Terms (words of phrases) in the Input (string) with the XXXX or any other replacement characters or text.
- Steps:
1. Set a RegEx that sets the replacement strategy (words or phrases replaced globally);
2. Set Key Terms set as a map with props to replace and replacement values.
3. Scenario Upload: FileReader to process and transform the text.
4. Scenario Insert or Type.
5. Save As…

**3. Run locally:** ```npm run dev``` # MTE-demo-mod
