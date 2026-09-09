export const readerPreferences = {
  theme: { key: 'iis-theme', fallback: 'sepia', values: ['white', 'sepia', 'dark'] },
  font: { key: 'iis-font', fallback: 'spectral', values: ['spectral', 'georgia', 'archivo'] },
  spacing: { key: 'iis-spacing', fallback: 'balanced', values: ['compact', 'balanced', 'relaxed'] },
  width: { key: 'iis-width', fallback: 'standard', values: ['narrow', 'standard', 'wide'] },
};

export type Preference = keyof typeof readerPreferences;

export function validPreference(name: Preference, value: string | null): string {
  const preference = readerPreferences[name];
  return value && preference.values.includes(value) ? value : preference.fallback;
}
