<template>
  <nav class="sidebar-nav">
    <ul class="sidebar-nav__list">
      <li class="sidebar-nav__item">
        <a href="index.html" class="sidebar-nav__link">
          <Icon iconName="home" />
          Main
        </a>
      </li>
      <li class="sidebar-nav__item">
        <a href="ingredients.html" class="sidebar-nav__link">
          <Icon
            class="sidebar-nav__icon"
            iconName="leaf"
          />
          Ingredients
        </a>
      </li>
      <li class="sidebar-nav__item">
        <a href="process.html" class="sidebar-nav__link">
          <Icon
            class="sidebar-nav__icon"
            iconName="rocket"
          />
          Process
        </a>
      </li>
      <li class="sidebar-nav__item">
        <a href="result.html" class="sidebar-nav__link">
          <Icon
            class="sidebar-nav__icon"
            iconName="diamond"
          />
          Result
        </a>
      </li>
    </ul>

  </nav>
</template>

<script>
import Icon from './Icon';
export default {
  name: 'Sidebar',

  components: {
    Icon,
  }
}
</script>

<style lang="scss">
@import '@style';

.sidebar-nav {
  width: 350px;
  height: 100%;
  margin-right: 5%;
  background-color: $sidebar-bg-color;
}

.sidebar-nav__list {
  list-style-type: none;
}

.sidebar-nav__item {
  margin: 25px 0;

  &:first-child {
    margin: 50px 0;
  }
}

.sidebar-nav__link {
  color: $sidebar-font-color;
  text-decoration: none;
  text-transform: uppercase;
  transition: color .3s;

  &:hover {
    color: $sidebar-hover-color;
  }
}

.sidebar-nav__icon {
  position: relative;
  top: 4px;
}
</style>
