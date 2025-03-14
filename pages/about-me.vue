<template>
  <div id="about-container">
    <AsideMenu title="personal-info">
      <template v-slot:content>
        <div id="about-container-content">
          <ul>
            <li v-for="item in asideMenu" :key="item.id" :class="{ 'selected': item.id === selectedMenuId }"
              @click="onSelectMenuOption(item.id)">
              <div class="menu-item-chevron">
                <RiArrowRightSLine />
              </div>
              <component :is="item.icon" class="menu-item-icon" :style="`color: ${item.iconColor}`" />
              <span>{{ item.label }}</span>
            </li>
          </ul>
        </div>
      </template>
    </AsideMenu>
    <!-- <aside>
      <header>
        <RiArrowDownSFill />
        <h2>personal-info</h2>
      </header>
      <div id="about-container-content">
        <ul>
          <li v-for="item in asideMenu" :key="item.id" :class="{ 'selected': item.id === selectedMenuId }" @click="onSelectMenuOption(item.id)">
            <div class="menu-item-chevron">
              <RiArrowRightSLine />
            </div>
            <component :is="item.icon" class="menu-item-icon" :style="`color: ${item.iconColor}`" />
            <span>{{ item.label }}</span>
          </li>
        </ul>
      </div>
    </aside> -->
    <main>
      <transition name="fade" mode="out-in">
        <component :is="getMenuComponent" />
      </transition>
    </main>
    <section>
      <Skills />
    </section>
  </div>
</template>

<script>
import { RiArrowDownSFill, RiArrowRightSLine, RiFolder3Fill } from 'vue-remix-icons'
import AsideMenu from '~/components/AsideMenu.vue'
import Bio from '~/components/about/Bio.vue'
import Education from '~/components/about/Education.vue'
import Interests from '~/components/about/Interests.vue'
import Skills from '~/components/Skills.vue'

export default {
  name: "AboutMe",
  components: {
    RiArrowDownSFill,
    RiArrowRightSLine,
    RiFolder3Fill,
    AsideMenu,
    Bio,
    Education,
    Interests,
    Skills
  },
  data() {
    return {
      selectedMenuId: 0
    }
  },
  computed: {
    asideMenu() {
      return [
        {
          id: 0,
          label: 'bio',
          icon: RiFolder3Fill,
          iconColor: '#FF637E',
          component: Bio
        },
        {
          id: 1,
          label: 'interests',
          icon: RiFolder3Fill,
          iconColor: '#00D5BE',
          component: Interests
        },
        {
          id: 2,
          label: 'education',
          icon: RiFolder3Fill,
          iconColor: '#615FFF',
          component: Education
        },
      ]
    },
    getMenuComponent() {
      return this.asideMenu.find(menu => menu.id === this.selectedMenuId).component;
    }
  },
  methods: {
    onSelectMenuOption(itemId) {
      this.selectedMenuId = itemId;
    }
  }
}
</script>

<style lang="scss" scoped>
#about-container {
  display: flex;
  height: 100%;

  #about-container-content {
    padding: 1.2rem 2.4rem;

    ul {
      display: flex;
      flex-direction: column;
      gap: .8rem;

      li {
        display: flex;
        align-items: center;
        cursor: pointer;

        &.selected {

          .menu-item-chevron,
          span {
            color: var(--text-light-color);
          }
        }

        .menu-item-chevron {
          display: flex;
          align-items: center;
          color: #62748E;
        }

        .menu-item-icon {
          margin-left: 1.2rem;
          margin-right: .8rem;
        }

        span {
          color: var(--comment-light-color);
        }
      }
    }

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  main {
    border-right: .1rem solid var(--secondary-color);
    padding: 1.2rem 4rem;
  }

  main,
  section {
    flex-grow: 1;
    width: 71.6rem;
    overflow-y: auto;
  }

  section {
    background-color: #020618;
  }

  @media (max-width: 915px) {
    flex-direction: column;

    aside,
    main {
      border-right: none;
      border-bottom: .1rem solid var(--secondary-color);
    }

    aside {
      width: 100%;
      max-width: 100%;
    }

    main,
    section {
      flex-grow: 1;
      height: 100%;
      padding: 0;
      width: 100%;
    }
  }
}
</style>