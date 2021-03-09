// libs
import axios from 'axios';

// helpers
import loadMore from '@/assets/js/loadMore.js';

export default {
    state: {
        messages: [],
        messagesMain: [],
        loading: false,
        error: null,
    },
    mutations: {
        setNotify(state, payload) {
            state.messages = payload;
        },
        setNotifyMain(state, payload) {
            state.messagesMain = payload;
        },
        loadNotify(state, payload) {
            state.messagesMain = [...state.messagesMain, ...payload];
        },
        editLoading(state) {
            state.loading = !state.loading;
        },
        editError(state, payload ) {
            state.error = payload;
        }
    },
    actions: {
        setNotifyMain({commit}, payload) {
            commit('setNotifyMain', payload)
        },
        loadNotify( { commit, getters } ) {
            let res = getters.getMessageFilter;
            commit('loadNotify', loadMore(res));
        },
        editLoading({commit}) {
            commit('editLoading');
        },
        editError({commit}, payload) {
            commit('editError', payload);
        },
        setNotify(  { commit } ) {
            this.editLoading
            axios
                .get('http://nikita.std-937.ist.mospolytech.ru/')
                    .then(response => {
                        let res = response.data.notify,
                            notify = [],
                            notifyMain = [];

                        // filter 
                        for ( let i = 0; i < res.length; i++ ) {
                            if (res[i].main) {
                                notifyMain.push(res[i])
                            }
                            else notify.push(res[i])
                        }

                        commit('setNotify', notify)
                        commit('setNotifyMain', notifyMain)
                    })
                .catch(error => {
                    this.dispatch('editError', error)
                })
                .finally(() => {
                    this.editLoading
                })
        }
    }, 
    getters: {
        getNotify(state) {
            return state.messages;
        },
        getNotifyMain(state) {
            return state.messagesMain;
        }, 
        getMessageFilter (state) {
            return state.messages.filter(mes => {
                return mes.main === false;
            })
        },
        getLoading (state) {
            return state.loading
        },
        getError (state) {
            return state.error
        }
    }
}