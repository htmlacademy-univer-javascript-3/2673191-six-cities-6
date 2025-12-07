import { useEffect, type DependencyList } from 'react';

export default function useAsyncEffect(effect: (signal: AbortSignal) => unknown, deps?: DependencyList) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const abortController = new AbortController();
    effect(abortController.signal);
    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
