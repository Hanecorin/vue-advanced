<template>
  <div>
    <section>
        <!-- 질문 상세정보 -->
        <user-profile :info="fetchedItem">
            <router-link slot="username" :to="`/user/${fetchedItem.user}`">
                {{ 'ID : ' + fetchedItem.user }}
            </router-link>
            <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
        </user-profile>
    </section>
    <section>
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
import UserProfile from '@/components/UserProfile.vue';
export default {

    components: {
        UserProfile
    },
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