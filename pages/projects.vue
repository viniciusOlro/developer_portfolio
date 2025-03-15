<template>
  <div id="projects-container">
    <AsideMenu title="projects">
      <template v-slot:content>
        <ul>
          <li v-for="(skill, skillIndex) in skillsFilter" :key="skillIndex">
            <input type="checkbox" v-model="skill.isSelected" />
            <component :is="skill.icon" />
            <span>{{ skill.name }}</span>
          </li>
        </ul>
      </template>
    </AsideMenu>
    <section>
      projects
    </section>
  </div>
</template>

<script>
import AsideMenu from '~/components/AsideMenu.vue';
import { useSkillsStore } from '#imports';
import { RiJavascriptFill, RiCodeLine, RiPhpFill, RiJavaFill, RiVuejsFill, RiCss3Fill, RiReactjsFill, RiDatabase2Fill } from "vue-remix-icons";

export default {
  name: "Projects",
  components: {
    AsideMenu,
    RiJavascriptFill,
    RiCodeLine,
    RiPhpFill,
    RiJavaFill,
    RiVuejsFill,
    RiCss3Fill,
    RiReactjsFill,
    RiDatabase2Fill
  },
  data() {
    return {
      skillsStore: useSkillsStore(),
      skillsFilter: [],
      iconMap: {
        RiJavascriptFill,
        RiCodeLine,
        RiPhpFill,
        RiJavaFill,
        RiVuejsFill,
        RiCss3Fill,
        RiReactjsFill,
        RiDatabase2Fill
      }
    };
  },
  mounted() {
    this.skillsFilter = [
      ...this.skillsStore.languages.map(skill => ({
        ...skill,
        isSelected: false,
        iconComponent: this.iconMap[skill.icon] || null // Mapeia string para componente real
      })),
      ...this.skillsStore.frontend.map(skill => ({
        ...skill,
        isSelected: false,
        iconComponent: this.iconMap[skill.icon] || null
      })),
      ...this.skillsStore.backend.map(skill => ({
        ...skill,
        isSelected: false,
        iconComponent: this.iconMap[skill.icon] || null
      }))
    ];
  }
};

</script>

<style lang="scss" scoped>
#projects-container {
  display: flex;
  width: 100%;
  height: 100%;

  ul {
    padding: 1.2rem 2.4rem;
    display: flex;
    flex-direction: column;
    gap: .8rem;

    li {
      display: flex;
      align-items: center;
      gap: .8rem;

      svg {
        min-width: 2.1rem;
        width: 2.1rem;
        min-height: 2rem;
        height: 2rem;
        color: var(--icon-color);
      }

      span {
        font-size: 1.6rem;
        line-height: 2.4rem;
        font-weight: 450;
      }
    }
  }
}
</style>
