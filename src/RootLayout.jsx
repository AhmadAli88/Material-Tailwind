import { ThemeProvider } from "@material-tailwind/react";

export default function RootLayout({ children }) {
  const theme = {
    button: {
      defaultProps: {
        variant: "filled",
        size: "md",
        color: "blue",
      },
      styles: {
        base: {
          initial: {
            textTransform: "uppercase",
          },
        },
      },
    },
  };
  return <ThemeProvider value={theme}>{children}</ThemeProvider>;
}
