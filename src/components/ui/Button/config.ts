export const BUTTON_BASE_STYLE = `Button inline-flex items-center justify-center whitespace-nowrap
rounded-md text-sm font-medium transition-colors focus-visible:outline-none
focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none
disabled:opacity-50 border`;

export const BUTTON_PADDING = {
	sm: 'px-2.5 py-1.5',
	md: 'px-3 py-2',
	lg: 'px-4 py-2.5'
};

export const BUTTON_THEMES = {
	primary: 'border-primary bg-primary text-white hover:bg-primary/90',
	danger: 'bg-red-500 text-white hover:bg-red-500/90',
	secondary: 'border-slate-300 bg-white border text-primary hover:text-primary/80 hover:bg-slate-50',
	warning: 'border-yellow-500 bg-yellow-500 text-black hover:bg-yellow-500/90',
	link: 'text-primary underline-offset-4 hover:underline',
	default: 'border-slate-300 bg-white border text-primary hover:text-primary/80 hover:bg-slate-50'
};
