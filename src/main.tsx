import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Development-only helpers to reduce noisy console output and fix non-passive wheel listeners
if (import.meta.env.DEV) {
	// 1) Filter known noisy console messages coming from Vite, React, and libraries
	const origConsole = {
		log: console.log.bind(console),
		info: console.info.bind(console),
		warn: console.warn.bind(console),
		error: console.error.bind(console),
	};

	const suppressPatterns: Array<string | RegExp> = [
		"[vite] connecting",
		"[vite] connected.",
		/Download the React DevTools/i,
		/React Router Future Flag Warning/i,
		/Relative route resolution within Splat routes is changing/i,
	];

	function shouldSuppress(args: any[]) {
		try {
			const text = args.map((a) => (typeof a === "string" ? a : JSON.stringify(a))).join(" ");
			return suppressPatterns.some((p) => (p instanceof RegExp ? p.test(text) : text.includes(p)));
		} catch (e) {
			return false;
		}
	}

	console.log = (...args: any[]) => {
		if (shouldSuppress(args)) return;
		origConsole.log(...args);
	};
	console.info = (...args: any[]) => {
		if (shouldSuppress(args)) return;
		origConsole.info(...args);
	};
	console.warn = (...args: any[]) => {
		if (shouldSuppress(args)) return;
		origConsole.warn(...args);
	};

	// 2) Ensure wheel listeners are added as passive to avoid browser violation warnings
	// Save original and wrap EventTarget.prototype.addEventListener so libraries (e.g., OrbitControls)
	// that add wheel listeners without passive option don't trigger the browser warning.
	const ET = (EventTarget as any).prototype;
	const _addEventListener = ET.addEventListener;
	ET.addEventListener = function (type: string, listener: any, options?: any) {
		try {
			if (type === "wheel") {
				if (options === undefined) options = { passive: true };
				else if (typeof options === "boolean") options = { capture: options, passive: true };
				else if (typeof options === "object") options = { ...options, passive: true };
			}
		} catch (e) {
			// swallow and continue with original options
		}
		return _addEventListener.call(this, type, listener, options);
	};
}

createRoot(document.getElementById("root")!).render(<App />);
