export interface Navigation {
    sidebarExpand: boolean;
}

export default {
    namespaced: true,
    state: {
        sidebarExpand: true,
    },
    mutations: {
        TOGGLE_SIDEBAR(state: Navigation, sidebarState: boolean) {
            state.sidebarExpand = sidebarState;
        },
    },
    actions: {
        toggleSidebar({ commit }, sidebarState: boolean) {
            commit('TOGGLE_SIDEBAR', sidebarState);
        },
    },
};
