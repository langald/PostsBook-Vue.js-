/* import Vue from 'vue' */
import apiCall from '@/store/api-mock'

export default {
  namespaced: true,
  state: {
    items: [],
    commentsInfo: [],
    loading: false,
    error: ''
  },
  getters: {
    items (state) {
      return state.items
    },
    commentsInfo (state) {
      return state.commentsInfo
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  },
  mutations: {
    loadItems (state, data) {
      state.items = JSON.parse(JSON.stringify(data))
      data.forEach(post => {
        state.commentsInfo.push({
          postId: post.id,
          isShownAllComments: false,
          userComment: ''
        })
      })
    },
    loadingOn (state) {
      state.loading = true
    },
    loadingOff (state) {
      state.loading = false
    },
    setError (state, data) {
      state.error = data
    },
    loadAllComments (state, data) {
      state.items.forEach(item => {
        if (item.id === data.id) {
          item.comments = JSON.parse(JSON.stringify(data.comments))
        }
      })
      state.commentsInfo.forEach(item => {
        if (item.postId === data.id) {
          item.isShownAllComments = true
        }
      })
    },
    changeUserComment (state, data) {
      state.commentsInfo.forEach(item => {
        if (item.postId === data.postId) {
          item.userComment = data.userComment
        }
      })
    },
    resetUserComment (state, postId) {
      state.commentsInfo.forEach(item => {
        if (item.postId === postId) {
          item.userComment = ''
        }
      })
    }
  },
  actions: {
    loadItems (store, payload) {
      store.commit('loadingOn')
      return new Promise((resolve, reject) => {
        apiCall(payload)
          .then(resp => {
            store.commit('loadItems', resp)
            store.commit('loadingOff')
            resolve(resp)
          })
          .catch(err => {
            store.commit('setError', err)
            store.commit('loadingOff')
            reject(err)
          })
      })
    },
    loadAllComments (store, payload) {
      store.commit('loadingOn')
      return new Promise((resolve, reject) => {
        apiCall(payload)
          .then(resp => {
            store.commit('loadAllComments', resp)
            store.commit('loadingOff')
            resolve(resp)
          })
          .catch(err => {
            store.commit('setError', err)
            store.commit('loadingOff')
            reject(err)
          })
      })
    },
    changeUserComment (store, payload) {
      store.commit('changeUserComment', payload)
    },
    addUserComment (store, postId) {
      let userCommentInfo = store.state.commentsInfo.filter(item => {
        return item.postId === postId
      })

      if (!userCommentInfo[0].userComment) {
        return
      }

      let payload = {
        method: 'POST',
        postId: postId,
        isShownAllComments: userCommentInfo[0].isShownAllComments,
        userComment: userCommentInfo[0].userComment
      }

      store.commit('loadingOn')
      return new Promise((resolve, reject) => {
        apiCall(payload)
          .then(resp => {
            if (payload.isShownAllComments) {
              store.commit('loadAllComments', resp)
            }
            store.commit('loadingOff')
            store.commit('resetUserComment', postId)
            resolve(resp)
          })
          .catch(err => {
            store.commit('setError', err)
            store.commit('loadingOff')
            reject(err)
          })
      })
    }
  }
}
