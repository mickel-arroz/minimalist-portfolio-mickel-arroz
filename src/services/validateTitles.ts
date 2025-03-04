
export function validateTitle(title: string): string {
  switch (title) {
    case "Sobre mi":
      return "About";
    case "Experiencia Laboral":
      return "Experience";
    case "Proyectos":
      return "Projects"; 
    case "Educación":
      return "Education";  
    case "Certificados":
      return "Certificate";  
    case "Habilidades":
      return "Skills";  
    case "Idiomas":
      return "Languages";   
    case "Voluntariado":
      return "Volunteer";
    case "Publicaciones":
      return "Publication";
    case "Referencias":
      return "Reference";
    case "Intereses":
      return "Interest";
    case "Award":
      return "Reconocimientos";

    default:
      return title;
  }
}
