// Enumeraciones para tipos usados en el CV.

export enum CertificateType {
  Language = 'language',
  Primary = 'primary',
  Secondary = 'secondary',
  Knowledge = 'knowledge',
}

export enum ProjectType {
  Primary = 'primary',
  Practice = 'practice',
}

export const ALL_CERTIFICATE_TYPES: CertificateType[] = [
  CertificateType.Language,
  CertificateType.Primary,
  CertificateType.Secondary,
  CertificateType.Knowledge,
];

export const ALL_PROJECT_TYPES: ProjectType[] = [
  ProjectType.Primary,
  ProjectType.Practice,
];
