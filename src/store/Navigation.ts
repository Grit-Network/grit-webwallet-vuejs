export interface Navigation {
    sidebarExpand: boolean;
    navbarExpand: boolean;
}

export default {
    namespaced: true,
    state: {
        sidebarExpand: true,
        navbarExpand: true,
    },
    mutations: {
        TOGGLE_SIDEBAR(state: Navigation, sidebarState: boolean) {
            state.sidebarExpand = sidebarState;
        },
        TOGGLE_NAVBAR(state: Navigation, navbarState: boolean) {
            state.navbarExpand = navbarState;
        },
    },
    actions: {
        toggleSidebar({ commit }, sidebarState: boolean) {
            commit('TOGGLE_SIDEBAR', sidebarState);
        },
        toggleNavbar({ commit }, navbarState: boolean) {
            commit('TOGGLE_NAVBAR', navbarState);
        },
    },
};
