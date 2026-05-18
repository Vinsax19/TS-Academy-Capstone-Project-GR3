/**
 * utils.js
 * Helper utilities for managing Tailwind CSS classes.
 * cn() combines classes and merges Tailwind conflicts.
 */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
