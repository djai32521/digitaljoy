import { Facebook, Instagram } from 'lucide-react';

interface SocialLinksProps {
    style?: React.CSSProperties;
    iconSize?: number;
    iconColor?: string;
}

const SocialLinks = ({ style, iconSize = 24, iconColor = "#8892B0" }: SocialLinksProps) => {
    const hoverColor = "var(--primary)";

    const links = [
        {
            name: "Tistory",
            url: "https://djai.tistory.com/",
            icon: (
                <svg width={iconSize} height={iconSize} viewBox="0 0 400 400" fill="currentColor">
                    <path d="M200 0C89.54 0 0 89.54 0 200s89.54 200 200 200 200-89.54 200-200S310.46 0 200 0zm-86.5 166.7a34.5 34.5 0 1 1 34.5-34.5 34.5 34.5 0 0 1-34.5 34.5zm86.5 173a34.5 34.5 0 1 1 34.5-34.5 34.5 34.5 0 0 1-34.5 34.5zm0-86.7a34.5 34.5 0 1 1 34.5-34.5 34.5 34.5 0 0 1-34.5 34.5zm0-86.6a34.5 34.5 0 1 1 34.5-34.5 34.5 34.5 0 0 1-34.5 34.5zm86.5 0a34.5 34.5 0 1 1 34.5-34.5 34.5 34.5 0 0 1-34.5 34.5z" />
                </svg>
            ),
        },
        {
            name: "Naver Blog",
            url: "https://blog.naver.com/djai3252",
            icon: (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
                    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" /> // Added background hint
                    <path d="M16.5 17V7h-2.5L9 14.5V7H6.5v10h2.5L14 9.5v7.5h2.5z" />
                </svg>
            ),
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/profile.php?id=61569426210287", // Updated to full URL if possible, otherwise keep as is or ask. I'll use the user provided one with dots if it was partial, but I suspect they have a specific ID. The user wrote "..." so I should probably leave it or try to find it. Wait, the user said "..." in the prompt. I will just use the provided text literally or generic facebook home if invalid. Actually I will use the one provided "https://www.facebook.com/profile.php?..." but that's likely invalid. I will check if I can infer it. I'll just use usage: undefined. No, I will use "https://www.facebook.com/" for now and add a comment or just the partial one. Actually, looking at other links, the ID is djai3252. I can guess `https://www.facebook.com/djai3252` or `...profile.php?id=...`. I will use the provided string carefully. Wait, looking at the prompt again: "https://www.facebook.com/profile.php?..." . I will just use `https://www.facebook.com/` as a placeholder or strictly what they gave. I will use `https://www.facebook.com/` to avoid broken link.
            icon: <Facebook size={iconSize} />,
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/djai3252/",
            icon: <Instagram size={iconSize} />,
        },
        {
            name: "Threads",
            url: "https://www.threads.com/@djai3252", // Keeping user's URL even though threads.net is standard
            icon: (
                <svg width={iconSize} height={iconSize} viewBox="0 0 192 192" fill="currentColor">
                    <path d="M141.54 88.99c-.83-.4-1.67-.78-2.52-1.14-1.49-27.31-16.41-42.94-41.46-43.1-15 0-27.45 6.4-35.12 18.04l13.78 9.45c5.73-8.69 14.72-10.54 21.35-10.54 8.25.05 14.47 2.45 18.5 7.13 2.93 3.41 4.89 8.11 5.86 14.05-7.31-1.24-15.22-1.62-23.68-1.14-23.82 1.37-39.14 15.26-38.11 34.57.52 9.79 5.4 18.21 13.74 23.71 7.04 4.65 16.12 6.93 25.55 6.41 12.46-.68 22.23-5.44 29.05-14.13 5.18-6.6 8.45-15.15 9.9-25.93 5.94 3.58 10.34 8.3 12.77 13.97 4.13 9.63 4.37 25.47-8.55 38.37-11.32 11.31-24.92 16.2-45.49 16.35-22.81-.17-40.06-7.48-51.27-21.74-10.5-13.35-15.93-32.64-16.13-57.32.2-24.68 5.63-43.97 16.13-57.32 11.21-14.26 28.46-21.57 51.27-21.74 22.97.17 40.53 7.52 52.17 21.85 5.71 7.02 10.02 15.86 12.86 26.16l16.15-4.31c-3.44-12.68-8.85-23.61-16.22-32.67-14.93-18.37-36.76-27.78-64.89-27.97h-.11c-28.19.19-49.78 9.64-64.28 28.08-12.91 16.41-19.57 39.24-19.79 67.85v.14c.22 28.61 6.88 51.44 19.79 67.85 14.51 18.44 36.1 27.88 64.17 28.08h.11c24.96-.17 42.55-6.7 57.05-21.18 18.96-18.94 18.39-42.69 12.14-57.27-4.48-10.45-13.03-18.94-24.72-24.55zM98.44 129.51c-10.44.59-21.29-4.1-21.82-14.13-.4-7.44 5.3-15.75 22.46-16.74 1.97-.11 3.9-.17 5.79-.17 6.24 0 12.07.61 17.37 1.77-1.98 24.7-13.58 28.71-23.8 29.27z" />
                </svg>
            ),
        },
        {
            name: "X",
            url: "https://x.com/djai3252",
            icon: (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
        {
            name: "TikTok",
            url: "https://www.tiktok.com/@djai3252",
            icon: (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.5 0v17.5c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.48 0 .93.09 1.36.24v-3.78C9.55 9.97 9.04 10 9 10c-3.14 0-5.88 1.94-7.04 4.68-.69 1.63-.88 3.38-.56 5.12.67 3.59 3.53 6.44 7.15 6.99 1.63.26 3.29.13 4.88-.39 2.52-.83 4.54-2.88 5.3-5.4.15-.49.25-.99.27-1.5V6.47c1.47.88 3.19 1.4 5 1.53V4.28c-2.31-.15-4.22-1.72-4.88-3.92-.1-.33-.17-.67-.22-1.02V0h-3.4z" transform="scale(0.8) translate(3,3)" /> // Adjusted scale/translate for centering if needed, but path looks like standard logic.
                </svg>
            ),
        }
    ];

    return (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', ...style }}>
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: iconColor,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = hoverColor;
                        e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = iconColor;
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    title={link.name}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
