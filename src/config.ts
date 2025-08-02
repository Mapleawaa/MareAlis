import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "沧澜之息",
	subtitle: "一个苦逼运维的生活笔记，分享网络技术、服务器部署、静态网站搭建、CDN优化、数据库管理、DevOps等技术教程与实践经验的个人分享内容博客，专注于云原生应用的开发、部署和运维。",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th', 'vi'
	themeColor: {
		hue: 335, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345, blue: 210 Pink:335
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/banner-sukura.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Banner by MareAlis", // Credit text to be displayed
			url: "https://github.com/MareAlis", // (Optional) URL link to the original artwork or artist's page
		},
	},
	background: {
		enable: true, // 是否启用全局背景图
		src: "assets/images/background.jpg", // 背景图路径，相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
		position: "center", // 背景图位置，支持 'top'、'center'、'bottom'，默认为 'center'
		opacity: 15, // 背景图透明度，0-100，默认为 15
		fixed: true, // 背景图是否固定，默认为 true（固定背景，不随页面滚动）
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		{
			src: "/src/assets/images/favicon.ico",
			theme: "light",
			// sizes: "32x32",
		},
		{
			src: "/src/assets/images/favicon.ico",
			theme: "dark",
			// sizes: "32x32",
		},
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "友情链接",
			url: "/friends/", // Internal links should not include the base path, as it is automatically added
			external: false,
		},
		{
			name: "UPTime",
			url: "https://uptime.mcyre.cc", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		{
			name: "Bilibili",
			url: "https://space.bilibili.com/333647072",
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=3304345026&spec=5", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Maple",
	bio: "运维工程师，专注于云原生应用、服务器环境的开发、部署和运维。",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/Mapleawaa",
		},
		{
			name: "哔哩哔哩",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/333647072",
		},
		{
			name: "Telegram",
			icon: "fa6-brands:telegram",
			url: "https://t.me/yun_1_bot",
		},
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:Mapleawa07@outlook.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
