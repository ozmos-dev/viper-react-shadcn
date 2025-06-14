import { route as routeFn } from 'ziggy-js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { reactRouterLoader } from "@ozmos/viper-react";

export const router = createBrowserRouter([

  {
  children: [
    {
      lazy: async () => {
        return {
            Component: (await import("./_layout")).default,
            loader: reactRouterLoader,
        };
      },
      children: [
        
          {
  index: true,
  lazy: async () => {
    return {
        Component: (await import("./index")).default,
        loader: reactRouterLoader,
    };
  },
},

        
          {
  children: [
    {
      lazy: async () => {
        return {
            Component: (await import("./(app)/_layout")).default,
            loader: reactRouterLoader,
        };
      },
      children: [
        
          {
  path: "home",
  lazy: async () => {
    return {
        Component: (await import("./(app)/home")).default,
        loader: reactRouterLoader,
    };
  },
},

        
          {
  path: "profile",
  children: [
    {
      lazy: async () => {
        return {
            Component: (await import("./(app)/profile/_layout")).default,
            loader: reactRouterLoader,
        };
      },
      children: [
        
          {
  index: true,
  lazy: async () => {
    return {
        Component: (await import("./(app)/profile/index")).default,
        loader: reactRouterLoader,
    };
  },
},

        
          {
  path: "password",
  lazy: async () => {
    return {
        Component: (await import("./(app)/profile/password")).default,
        loader: reactRouterLoader,
    };
  },
},

        
          {
  path: "appearance",
  lazy: async () => {
    return {
        Component: (await import("./(app)/profile/appearance")).default,
        loader: reactRouterLoader,
    };
  },
},

              ]
    }
  ],
},

              ]
    }
  ],
},

        
          {
  children: [
    {
      lazy: async () => {
        return {
            Component: (await import("./(auth)/_layout")).default,
            loader: reactRouterLoader,
        };
      },
      children: [
        
          {
  path: "login",
  lazy: async () => {
    return {
        Component: (await import("./(auth)/login")).default,
        loader: reactRouterLoader,
    };
  },
},

        
          {
  path: "register",
  lazy: async () => {
    return {
        Component: (await import("./(auth)/register")).default,
        loader: reactRouterLoader,
    };
  },
},

        
          {
  path: "forgot-password",
  lazy: async () => {
    return {
        Component: (await import("./(auth)/forgot-password")).default,
        loader: reactRouterLoader,
    };
  },
},

        
          {
  path: "reset-password/:token",
  lazy: async () => {
    return {
        Component: (await import("./(auth)/reset-password/[token]")).default,
        loader: reactRouterLoader,
    };
  },
},

              ]
    }
  ],
},

              ]
    }
  ],
},

]);

export const route: typeof routeFn = ((...args: Parameters<typeof routeFn>) => {
  args[2] = false;
  return routeFn(...args);
}) as typeof routeFn;
