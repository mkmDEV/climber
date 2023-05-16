<script lang="ts" setup>
import { computed, ref } from 'vue'
import {
  CheckBadgeIcon,
  CheckIcon,
  XCircleIcon,
  NoSymbolIcon,
} from '@heroicons/vue/24/solid'
import BottomNavigation from './components/organism/BottomNavigation.vue'
type Grade = {
  level: 4 | 5 | 6 | 7 | 8 | 9
  grade: 'A' | 'B' | 'C'
}

type Route = {
  name: Grade
  method: methods
  succeed: boolean
}

const enum methods {
  topRope = 'top rope',
  leadClimb = 'lead climb',
}

const enum distances {
  short = 'short',
  long = 'long',
}

const grades = computed<Grade[]>(() => {
  const numberList: Grade['level'][] = [4, 5, 6, 7, 8, 9]
  const typeList: Grade['grade'][] = ['A', 'B', 'C']

  return numberList.flatMap((level) =>
    typeList.map((grade) => ({ level, grade }))
  )
})

const routes = computed<Route[]>(() => {
  return grades.value.map(({ level, grade }) => ({
    name: { level, grade },
    method: methods.topRope,
    succeed: false,
  }))
})

const selectedRoute = ref<Route | null>(null)

const onClick = (selectedItem: Route) => {
  selectedRoute.value = selectedItem
}

const routeName = computed(() => {
  return ({ grade, level }) => `${level}${grade}`
})
</script>

<template>
  <div
    class="container w-screen h-screen max-w-full bg-black-500 mb-15 flex-col"
  >
    <ul
      class="grid place-items-center w-full h-full p-3 pb-12 gap-3 grid-cols-3"
    >
      <li
        v-for="(route, i) in routes"
        :key="i"
        class="p-5 w-full h-full rounded-xl bg-opacity-50 backdrop-blur-xl shadow-2xl text-center text-yellow-50 hover:bg-cinnamon-500 bg-russet-500 hover:text-yellow-500 hover:font-bold border-2 border-black-500"
        @click="onClick(route)"
      >
        <label class="" for="modal">
          <BaseTitle
            :title="routeName(route.name)"
            classes="flex justify-center items-center h-full text-5xl"
          />
        </label>
      </li>
    </ul>
    <BottomNavigation />
  </div>

  <BaseDialog content-class="teszt-2">
    <template #title v-if="selectedRoute">
      <h1 class="text-center text-9xl">
        {{ routeName(selectedRoute.name) }}
      </h1>
    </template>
    <template #default>
      <div class="flex flex-col my-5 text-3xl">
        <label class="swap place-items-center">
          <input type="checkbox" />
          <span class="swap-on">{{ methods.topRope }}</span>
          <span class="swap-off">{{ methods.leadClimb }}</span>
        </label>

        <label class="swap place-items-center">
          <input type="checkbox" />
          <span class="swap-on">{{ distances.short }}</span>
          <span class="swap-off">{{ distances.long }}</span>
        </label>

        <label class="swap swap-flip text-3xl">
          <input type="checkbox" />

          <CheckBadgeIcon class="swap-on text-success w-16 h-16" />
          <XCircleIcon class="swap-off text-error w-16 h-16" />
        </label>
      </div>
    </template>
    <template #actions>
      <div class="btn-group btn-group-horizontal">
        <button
          class="btn glass"
          title="Save"
          aria-label="submit"
          type="submit"
        >
          <CheckIcon class="w-6 h-6" />
        </button>
        <button
          class="btn glass"
          title="Cancel"
          aria-label="cancel"
          type="button"
        >
          <NoSymbolIcon class="w-6 h-6" />
        </button>
      </div>
    </template>
  </BaseDialog>
</template>
