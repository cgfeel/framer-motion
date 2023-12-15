import { FC } from "react";
import Logo from "./Logo";

const Footer: FC<FooterProps> = ({ title, url }) => (
    <footer>
        <a 
            href="https://www.framer.com/motion/" 
            rel="noreferrer"
            target="_blank" 
        >
            <Logo />
        </a>
        <a 
            href={url} 
            rel="noreferrer"
            target="_blank"
        >
            <code>{title}</code>
        </a>
    </footer>
);

export interface FooterProps {
    title: string;
    url: string;
}

export default Footer;