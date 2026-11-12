// Shared animation settings, so every animation on the site feels the same.

// A smooth "ease out": starts fast, settles gently. (A cubic-bezier curve.)
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

// How long a reveal takes, in seconds.
export const REVEAL_DURATION = 0.6;

// How far (in pixels) content travels upward as it fades in.
export const REVEAL_DISTANCE = 24;

// The gap between each item when a group reveals one after another, in seconds.
export const STAGGER_GAP = 0.08;