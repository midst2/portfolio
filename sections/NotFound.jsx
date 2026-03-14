import { useState, useEffect } from "react";

export default function NotFound() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

return (
    <div className="font-body min-h-screen bg-white flex flex-col items-center justify-center px-6">
        <div
            className={`transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
            {/* Big 404 */}
            <div className="relative select-none mb-2">
                <span
                    className="font-body text-[10rem] font-black leading-none tracking-tighter text-black"
                >
                    404
                </span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-black mb-6" />

            {/* Message */}
            <p className="font-body text-sm text-gray-500 uppercase tracking-widest mb-1">
                Page not found
            </p>
            <p className="font-body text-xs text-gray-400 mb-10">
                The page you're looking for doesn't exist or was moved.
            </p>

            {/* CTA */}
            <a
                href="/"
                className="font-body inline-flex items-center gap-2 text-xs uppercase tracking-widest border border-black px-5 py-3 text-black hover:bg-black hover:text-white transition-colors duration-200"
            >
                <span>←</span>
                <span>Go home</span>
            </a>
        </div>

        {/* Bottom stamp */}
        <div
            className={`font-body absolute bottom-8 text-[10px] text-gray-300 tracking-widest uppercase transition-all duration-1000 delay-500 ${
                visible ? "opacity-100" : "opacity-0"
            }`}
        >
            Error · 404 · Not Found
        </div>
    </div>
);
}
