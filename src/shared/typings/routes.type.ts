import type { ROUTES } from '@/shared/constants/routes'

type RouteKeys = keyof typeof ROUTES

export type RouteNames = (typeof ROUTES)[RouteKeys]['name']
export type RoutePaths = (typeof ROUTES)[RouteKeys]['path']
