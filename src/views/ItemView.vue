<template>
  <div>
    <section>
        <!-- 질문 상세정보 -->
        <div>
            <div>
                User
            </div>
            <div>
                <router-link :to="`/user/${fetchedItem.user}`">
                    {{ fetchedItem.user }}
                </router-link>
            </div>
            <div>
                {{ fetchedItem.time_ago}}
            </div>
        </div>
        <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
        <!-- 질문 댓글 -->
        <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    

    computed : {
        ...mapGetters(['fetchedItem']),
        itemInfo(){
            return this.$store.state.item;
        },

    },
    created(){
        const itemId = this.$route.params.id
        this.$store.dispatch('FETCH_ITEM', itemId);
    }
}
</script>

<style>

</style>