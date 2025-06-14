import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { create } from 'zustand';

interface Crumb {
  label: string;
  id: string;
  href: string;
}

const useBreadcrumbsStore = create<{ crumbs: Crumb[] }>(() => ({
  crumbs: [],
}));

export function useBreadcrumbs() {
  return useBreadcrumbsStore(state => state.crumbs);
}

export function useBreadcrumb(crumb: Crumb | Omit<Crumb, 'href'>) {
  const location = useLocation();
  const hasAddedRef = useRef(false);

  // Add breadcrumb immediately when hook is called (in render order)
  const currentCrumbs = useBreadcrumbsStore.getState().crumbs;
  const existingCrumb = currentCrumbs.find(x => x.id === crumb.id);
  
  if (!existingCrumb || !hasAddedRef.current) {
    const newCrumb: Crumb = {
      href: location.pathname,
      ...crumb,
    };

    useBreadcrumbsStore.setState(state => ({
      ...state,
      crumbs: [
        ...state.crumbs.filter(x => x.id !== crumb.id),
        newCrumb,
      ],
    }));
    
    hasAddedRef.current = true;
  }

  // Only use useEffect for cleanup
  useEffect(() => {
    return () => {
      useBreadcrumbsStore.setState(state => ({
        ...state,
        crumbs: state.crumbs.filter(x => x.id !== crumb.id),
      }));
    };
  }, [crumb.id]);
}
