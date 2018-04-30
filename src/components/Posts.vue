<template>
  <div class="container container-narrow">
    <div class="row post margin-bottom-40" v-for="(item, index) in items" :key="item.id">
      <div class="col-xs-12">

        <div class="post__author margin-bottom-10">
          <img class="post__avatar" :src="item.avatar" />
          {{item.author}}
        </div>

        <div class="image-container">
          <img :src="item.imgsrc" />
        </div>

        <div class="margin-top-20 margin-bottom-30">
          <div class="post__comment" v-for="comment in item.comments" :key="comment.id">
            <span class="post__author">{{comment.author}}:</span>
            {{comment.text}}
          </div>

          <div class="post__all-comments-btn margin-top-10 margin-bottom-10 text-center"
                @click="showAllComments(item.id)"
                v-show="!commentsInfo[index].isShownAllComments"
          >
            Show all comments
          </div>
          <div v-show="loading" class="loading"></div>
        </div>
      </div>

      <div class="col-sm-10 col-xs-7">
         <app-input :value="commentsInfo[index].userComment"
                    placeholder="Add yours comment"
                    @onUpdateValue="updateCommentValue(item.id, $event)"
          ></app-input>
      </div>

      <div class="col-sm-2 col-xs-5">
        <app-button title="Publish"
                    @btnClick="addUserComment(item.id)"
        ></app-button>
      </div>

    </div>
  </div>
</template>

<script>
import Input from '@/components/Input'
import Button from '@/components/Button'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Posts',
  components: {
    'app-input': Input,
    'app-button': Button
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('posts', [
      'items',
      'commentsInfo',
      'loading',
      'error'
    ])
  },
  methods: {
    ...mapActions('posts', [
      'loadItems',
      'loadAllComments',
      'changeUserComment',
      'addUserComment'
    ]),
    showAllComments (postId) {
      this.loadAllComments({
        method: 'GET',
        postId: postId
      })
    },
    updateCommentValue (postId, commentValue) {
      this.changeUserComment({
        postId: postId,
        userComment: commentValue
      })
    }
  },
  created () {
    this.loadItems({
      method: 'GET',
      count: 5
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.container-narrow {
  max-width: 600px;
}

.post__author {
  font-weight: bold;
}
.post__avatar {
  display: inline-block;
  width: 40px;
}
.post__comment {
  font-size: 12px;
  padding-top: 5px;
}
.post__all-comments-btn {
  color: $gray-color;
  cursor: pointer;
  font-size: 14px;
}

.loading {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 50px;
  background: url('../assets/loader.gif') center no-repeat;
  background-size: contain;
}

</style>
