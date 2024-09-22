import { InjectionToken } from '@angular/core';
import { NgHeroiconsModuleConfig } from './types';

export * as OUTLINE_ICONS from './components/outline';
export * as SOLID_ICONS from './components/solid';

export const DEFAULT_CONFIG: NgHeroiconsModuleConfig = { stroke: 1, default: 'outline' };
export const MODULE_CONFIG = new InjectionToken<NgHeroiconsModuleConfig>('config');