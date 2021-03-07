import { pathToRegexp } from 'path-to-regexp'
import { routes } from '..'

export default function getRouteFromUrl(url: string): string | undefined {
  for (const route of routes.entries()) {
    if (pathToRegexp(route[1]).test(url)) return route[0]
  }
}
