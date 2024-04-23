
export function validateHighlight(highlight: string): string {
  switch (highlight) {
    case "Next.js":
      return "Next";
    case "Astro":
      return "Astrojs";
    case "C/C++":
      return "CPlusPlus";  

    default:
      return highlight;
  }
}
