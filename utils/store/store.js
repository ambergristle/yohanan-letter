import { useLayoutEffect } from "react";
import create from "zustand";
import createContext from "zustand/context";
import { persist, devtools } from "zustand/middleware";

// declare global store
let store;

// set initial state values for archive (principally used in header)
// loggedIn: login/out button state
// tags: filters and tag options
// search: current search term
// filter: tag ids
const initialState = {
  loggedIn: false,
  tags: [],
  search: "",
  filter: [],
};

// initialize store access
export const { Provider, useStore } = createContext(initialState);

// initialize store methods
export const initializeStore = (preloadedState = {}) =>
  create(
    devtools(
      persist(
        (set, get) => ({
          ...initialState,
          ...preloadedState,
          toggleLoggedIn: () =>
            set(({ loggedIn }) => ({ loggedIn: !loggedIn })),
          setSearch: (searchTerm) => set({ search: searchTerm }),
          clearSearch: () => set({ search: initialState.search }),
          addFilter: (tag) =>
            set(({ filter }) => ({ filter: filter.push(tag) })),
          popFilter: (tag) =>
            set(({ filter }) => ({ filter: filter.pop(tag) })),
        }),
        {
          name: "global-store",
          getStorage: () => sessionStorage,
        }
      )
    )
  );

// memoize selectors
export const getTagsSelector = (state) => state.tags;
export const toggleLoggedInSelector = (state) => state.toggleLoggedIn;
export const loggedInSelectors = (state) => [
  state.loggedIn,
  state.toggleLoggedIn,
];

// manage csr v ssr alignment
export const useHydrate = (initialState) => {
  const _store = store ?? initializeStore(initialState);

  // use new store for ssr, reuse store for csr
  if (typeof window !== "undefined") {
    if (!store) store = _store;

    // if initialState changes, merge states, keeping client/server in sync
    // ignore eslint as code runs in same order in each environment
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => {
      if (initialState && store) {
        store.setState({
          ...store.getState(),
          ...initialState,
        });
      }
    }, [initialState]);
  }

  return _store;
};
