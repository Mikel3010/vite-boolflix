<script>

export default{
    name:'AppCard',
    props:{
        info: Object
    },
}
</script>
<template>
    <div>
        <h3>{{ info.title}}</h3>
        <h4>{{ info.original_title }}</h4>
        <div>{{ info.original_language }}</div>
        <div>{{ info.vote_average }}</div>
    </div>
</template>
<style lang="scss" scoped></style>