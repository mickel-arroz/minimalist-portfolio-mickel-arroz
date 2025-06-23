export function validateHighlight(highlight: string): string {
  switch (highlight) {
    case "Next.js":
      return "Nextjs";
    case "Astro":
      return "Astrojs";
    case "C/C++":
      return "CPlusPlus";
    case "Adobe XD":
      return "AdobeXD";
    case "Node.js":
      return "Nodejs";
    case "Express.js":
      return "Expressjs";
    case "Alteryx Designer":
      return "Alteryx";
    case "Jest":
      return "Test";
    case "Patrones de Diseño":
      return "designPattern";

    default:
      return highlight;
  }
}
