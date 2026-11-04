import React from "react";
import { FiCamera } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="w-full border-t border-[#E2E8F0] bg-white px-[5%] py-7 text-center text-sm text-[#64748B] sm:py-9">
            <p>
                <FiCamera
                    className="mr-1 inline-block align-[-3px] text-[#0066FF]"
                    aria-hidden="true"
                    focusable="false"
                />
                <strong className="text-[#121826]">NextCode</strong> -
                Câmera Acadêmica Inteligente | Parceria JOVI &amp; FIAP 2026
            </p>
            <a
                className="mt-3 inline-block font-semibold text-[#0044B3] underline underline-offset-4 hover:text-[#0066FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF]"
                href="https://smartystudy.vercel.app/"
                target="_blank"
                rel="noreferrer"
            >
                Acessar o protótipo publicado na Vercel
            </a>
        </footer>
    );
};

export default Footer;
