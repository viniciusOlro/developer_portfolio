<template>
  <div id="projects-container">
    <AsideMenu title="projects" id="projects-aside-menu">
      <template v-slot:content>
        <ul id="projects-aside">
          <li v-for="(skill, skillIndex) in skillsFilter" :key="skillIndex">
            <input type="checkbox" v-model="skill.isSelected" />
            <i :class="skill.icon"></i>
            <span>{{ skill.name }}</span>
          </li>
        </ul>
      </template>
    </AsideMenu>
    <section>
      <ul id="projects-list">
        <li v-for="(project, projectIndex) in projects" :key="project.id">
          <h3>
            <span>Project {{ projectIndex + 1 }}</span>
            <span> // {{ project.name }}</span>
          </h3>
          <div>
            <img :src="project.homepage" />
            <p>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit ullam corporis.</span>
              <button>view-project</button>
            </p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import AsideMenu from '~/components/AsideMenu.vue';
import { useSkillsStore } from '#imports';
import { getReposLength, getAllProjects } from '~/services/project';

export default {
  name: "Projects",
  components: {
    AsideMenu
  },
  data() {
    return {
      skillsStore: useSkillsStore(),
      skillsFilter: [],
      projectsPagination: {
        page: 1,
        perPage: 5,
        totalCount: 0
      },
      projects: []
    };
  },
  methods: {
    initSkillsFilter() {
      this.skillsFilter = [
        ...this.skillsStore.languages.map(skill => ({
          ...skill,
          isSelected: false
        })),
        ...this.skillsStore.frontend.map(skill => ({
          ...skill,
          isSelected: false
        })),
        ...this.skillsStore.backend.map(skill => ({
          ...skill,
          isSelected: false
        }))
      ];
    },
    async initProjects() {
      this.projectsPagination.totalCount = await getReposLength();
      this.projects = await getAllProjects(this.projectsPagination.page, this.projectsPagination.perPage);
    }
  },
  mounted() {
    this.initSkillsFilter();
    this.initProjects();
  }
};
</script>

<style lang="scss" scoped>
#projects-container {
  display: flex;
  width: 100%;
  height: 100%;

  #projects-aside-menu {
    max-width: 30rem;
  }

  section {
    overflow-y: auto;
    overflow-x: hidden;
    padding: 3.2rem;
    width: 100%;

    #projects-list {
      width: 100%;
      display: flex;
      align-items: last baseline;
      flex-wrap: wrap;
      gap: 4rem;

      li {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        width: 40rem;

        h3 {
          span {
            font-size: 1.6rem;
            line-height: 2.4rem;
            font-weight: 700;

            &:first-child {
              color: var(--info-color);
            }

            &:last-child {
              color: var(--comment-light-color);
            }
          }
        }

        div {
          border: 1px solid #1D293D;
          border-radius: 1.6rem;
          height: 32rem;
          display: flex;
          flex-direction: column;

          img {
            width: 100%;
            height: 50%;
            object-fit: cover;
            border-radius: 1.6rem 1.6rem 0 0;
          }

          p {
            background-color: #020618;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            padding: 3.2rem;
            border-radius: 0 0 1.6rem 1.6rem;

            button {
              all: unset;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              background-color: #45556C;
              color: var(--text-light-color);
              height: 4rem;
              width: 12.5rem;
              border-radius: .8rem;
              font-size: 1.4rem;
              line-height: 1.96rem;
            }
          }
        }
      }
    }
  }

  #projects-aside {
    padding: 1.2rem 2.4rem;
    display: flex;
    flex-direction: column;
    gap: .8rem;

    li {
      display: flex;
      align-items: center;
      gap: .8rem;

      i {
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

@media (max-width: 915px) {
  #projects-container {
    flex-direction: column;

    #projects-aside-menu {
      height: 21.5rem;
      max-width: 100%;
      border-bottom: .1rem solid var(--secondary-color);
    }
  }  
}
</style>
