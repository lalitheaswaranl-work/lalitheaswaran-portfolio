/**
 * Pure Static Architecture - Database access disabled.
 */

export function hasDatabaseUrl() {
  return false;
}

export function canReadDatabase() {
  return false;
}

export function markDatabaseUnavailable(_error: unknown) {
  // No-op in static mode
}
