// Safe mobile haptic feedback utility using Navigator.vibrate API
// Completely safe fallback when vibrate API is unsupported or blocked

export type HapticPattern = 'light' | 'medium' | 'heavy' | 'success' | 'warning';

export function hapticFeedback(pattern: HapticPattern = 'light'): void {
  try {
    if (
      typeof window !== 'undefined' &&
      'navigator' in window &&
      'vibrate' in navigator &&
      typeof navigator.vibrate === 'function'
    ) {
      const msMap: Record<HapticPattern, number | number[]> = {
        light: 12,
        medium: 22,
        heavy: 35,
        success: [15, 40, 15],
        warning: [30, 50, 30],
      };
      navigator.vibrate(msMap[pattern]);
    }
  } catch {
    // Fail silently without disrupting UI thread or throwing errors
  }
}
