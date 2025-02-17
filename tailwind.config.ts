import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        serif: ["var(--font-playfair)", ...fontFamily.serif],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "custom-right": "0 120px 0 0",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(-15%)" },
          "50%": { transform: "translateY(15%)" },
        },
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "25%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        'float-1': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0.5deg)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-0.5deg)' },
        },
        'float-3': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(0.25deg)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-slow": "bounce-slow 2.5s ease-in-out infinite",
        "scroll-bounce": "scroll-bounce 1.5s cubic-bezier(0.64, 0, 0.78, 0) infinite",
        "fade-in": "fade-in 1s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in-up": "fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in-up-delay-1": "fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) 300ms both",
        "fade-in-up-delay-2": "fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) 600ms both",
        "fade-in-up-delay-3": "fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) 900ms both",
        "fade-in-up-delay-4": "fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) 1200ms both",
        "fade-in-up-delay-5": "fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) 1500ms both",
        "fade-in-up-delay-6": "fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) 1800ms both",
        "fade-in-up-delay-7": "fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) 2100ms both",
        "fade-in-up-delay-8": "fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) 2400ms both",
        "fade-in-right": "fade-in-right 1s cubic-bezier(0.16, 1, 0.3, 1) 200ms both",
        "fade-in-left": "fade-in-right 1s cubic-bezier(0.16, 1, 0.3, 1) 2000ms both",
        shine: "shine 3s ease-out infinite",
        'float-1': 'float-1 4s ease-in-out infinite',
        'float-2': 'float-2 5s ease-in-out infinite',
        'float-3': 'float-3 4.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@butterfail/tailwindcss-inverted-radius"),
  ],
} satisfies Config;
