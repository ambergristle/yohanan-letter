import { useLayoutEffect } from "react";
import create from "zustand";
import createContext from "zustand/context";
import { persist } from "zustand/middleware";

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
  search: "lol",
  filter: [],
};

// initialize store access
export const { Provider, useStore } = createContext(initialState);

// initialize store methods
export const initializeStore = (preloadedState = {}) =>
  create(
    persist(
      (set, get) => ({
        ...initialState,
        ...preloadedState,
        logIn: () => {
          // on admin login
          set({ loggedIn: true });
        },
        logOut: () => {
          // on admin logout
          set({ loggedIn: false });
        },
        setSearch: (searchTerm) => {
          // on user search
          set({ search: searchTerm });
        },
        clearSearch: () => {
          // on user clear
          set({ search: initialState.search });
        },
        getTags: async () => {
          // on load
          // set({ tags: await tryGetTags() });
        },
        addFilter: (tag) => {
          // on user select
          set({ tags: get().filter.push(tag) });
        },
        popFilter: (tag) => {
          // on user deselect
          set({ tags: get().filter.pop(tag) });
        },
      }),
      {
        name: "global-store",
        getStorage: () => sessionStorage,
      }
    )
  );

// manage csr v ssr alignment
export const useHydrate = (initialState) => {
  const _store = store ?? initializeStore(initialState);

  // use new store for ssr, reuse store for csr
  if (typeof window !== "undefined") {
    if (!store) store = _store;

    // if initialState changes, merge states, keeping client/server in sync
    // ignore esling as code runs in same order in each environment
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
