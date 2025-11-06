/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        'primary-hover': 'hsl(var(--primary-hover))',
        'primary-light': 'hsl(var(--primary-light))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        'secondary-hover': 'hsl(var(--secondary-hover))',
        'secondary-light': 'hsl(var(--secondary-light))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        'accent-light': 'hsl(var(--accent-light))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        success: 'hsl(var(--success))',
        'success-foreground': 'hsl(var(--success-foreground))',
        'success-light': 'hsl(var(--success-light))',
        warning: 'hsl(var(--warning))',
        'warning-foreground': 'hsl(var(--warning-foreground))',
        'warning-light': 'hsl(var(--warning-light))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        DEFAULT: '0.75rem', // uses your --radius
      },
      boxShadow: {
        sm: '0 1px 2px 0 hsl(158 64% 52% / 0.05)',
        md: '0 4px 6px -1px hsl(158 64% 52% / 0.1), 0 2px 4px -1px hsl(158 64% 52% / 0.06)',
        lg: '0 10px 15px -3px hsl(158 64% 52% / 0.1), 0 4px 6px -2px hsl(158 64% 52% / 0.05)',
        xl: '0 20px 25px -5px hsl(158 64% 52% / 0.1), 0 10px 10px -5px hsl(158 64% 52% / 0.04)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, hsl(158 64% 52%) 0%, hsl(173 80% 40%) 100%)',
        'gradient-secondary': 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(200 100% 50%) 100%)',
        'gradient-hero': 'linear-gradient(135deg, hsl(158 64% 52% / 0.1) 0%, hsl(217 91% 60% / 0.1) 100%)',
      },
    },
  },
  plugins: [],
}
