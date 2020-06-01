import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			primaryLight: string;
			white: string;
			text: {
				dark: string;
				darker: string;
				placeholder: string;
			};
		};
		fonts: {
			family: string;
			sizes: {
				normal: string;
				xs: string;
				md: string;
				lg: string;
				xl: string;
			};
		};
		line: {
			dark: string;
			light: string;
		};
		defaults: {
			transition: string;
		};
	}
}
