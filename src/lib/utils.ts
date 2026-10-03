/**
 * Fusionne conditionnellement des classes Tailwind.
 * Volontairement minimal (pas de dépendance clsx/tailwind-merge)
 * conformément au choix de ne pas ajouter de bibliothèques superflues.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
