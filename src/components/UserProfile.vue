<template>
    <div>
        <div>
            <slot name="username"></slot>
        </div>
        <div>
            <slot name="time"></slot>
        </div>
        <div>
            <slot name="karma"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    },
    // computed: {
    //     userInfo() {
    //         return this.$store.state.user;
    //     }
    // },
}
</script>

<style></style>