# VISHCODE STUDIO

Android-first, offline-ready mobile coding workspace built with Ionic React, Vite, TypeScript and CodeMirror.

## What is implemented in this starter

- Dark VISHCODE STUDIO workspace UI
- Project creation templates (HTML/CSS/JS, React + Vite, Ionic React starter)
- Local project persistence using IndexedDB
- Project list, open and delete
- File creation, editing and deletion
- CodeMirror editor with HTML, CSS, JS/TS/JSX and JSON language modes
- Local ZIP import and ZIP export (node_modules and .git are skipped on import)
- Static HTML/CSS/JS preview in a sandboxed iframe
- Built-in workspace console commands: `help`, `pwd`, `ls`, `tree`, `cat <file>`, `project`, `date`, `clear`
- APK build readiness panel that reports missing native components honestly
- Capacitor Android configuration

## Important current limitations

This first source release is a working IDE workspace foundation, not yet a complete Android execution environment.

The browser console is deliberately limited to workspace inspection commands. It does **not** execute arbitrary shell commands, Node.js, npm, Ionic CLI, Gradle or Android SDK commands. Those require a native Android execution service or a separately configured Termux bridge.

The live preview currently renders static HTML/CSS/JS projects. React and Ionic projects require a local Vite or Angular dev server to be integrated with the Android runtime.

APK compilation is not implemented in this web layer. It requires a compatible JDK, Android SDK, Gradle and all project dependencies to be installed locally. The APK Builder screen reports this rather than displaying a fake success state.

IndexedDB stores project content inside the app's WebView/browser origin. For production Android packaging, add a native persistent filesystem adapter and explicit Android storage permissions/SAF support before relying on it for large projects.

## Requirements

- Node.js 20 LTS recommended
- npm
- Android build: JDK compatible with the selected Android Gradle Plugin, Android SDK and Gradle dependencies

## Run in development

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## Build web assets

```bash
npm run build
```

## Add Android shell

```bash
npx cap add android
npx cap sync android
```

Then open the Android project in Android Studio on a computer, or configure the Android toolchain in your chosen Android environment.

## Offline use

After dependencies have been installed and the project has been built once, the web assets can be served locally. npm package installation, React/Ionic execution and APK compilation still require their respective package/runtime/build dependencies to have been cached locally before disconnecting.

## Next native milestones

1. Replace the IndexedDB-only project adapter with Capacitor Filesystem + Android Storage Access Framework.
2. Add a native Node.js execution runtime.
3. Add a permission-controlled Termux bridge.
4. Start/stop Vite and Angular development servers from the native service.
5. Connect preview to the local development server.
6. Integrate local Git.
7. Add Android SDK/JDK/Gradle detection and APK build orchestration.
8. Add keystore management using Android Keystore.

## Branding

VISHCODE STUDIO — Code • Edit • Run • Preview • Build
