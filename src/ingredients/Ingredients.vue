<template>
  <Page>
    <h1>
      Ingredients
    </h1>
    <ul class="ingredients__list">
      <li
        class="ingredients__item"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
      >
        <Icon
          class="ingredients__icon icon-hover"
          :fill="hovered ? 'url(#pink-to-grey)' : 'url(#grey-to-pink)'"
          width="40"
          height="45"
          iconName="users"
          :gradients="gradients"
        />
        Invite Friends
      </li>
      <li class="ingredients__item">
        <Icon
          class="ingredients__icon"
          iconName="smile"
        />
        Grab some Good Mood
      </li>
      <li class="ingredients__item">
        <Icon
          class="ingredients__icon"
          fill="#ff8888"
          iconName="music"
        />
        Turn on the Music
      </li>
      <li class="ingredients__item">
        <Icon
          iconName="star"
          fill="#58627B"
          width="30"
          height="50"
          class="ingredients__icon"
        />
        Turn off the Light
      </li>
    </ul>
  </Page>
</template>

<script>
export default {
  name: 'Ingredients',

  data: () => ({
    hovered: false,
    gradients: ['pink-to-grey', 'grey-to-pink'],
  }),
}
</script>

<style lang="scss">
@import '@style';

.ingredients__list {
  list-style-type: none;
  padding-left: 0;
}

.ingredients__item {
  margin: 5px 0;
  display: flex;
  align-items: center;
}

.ingredients__icon {
  margin-right: 15px;
}
</style>
