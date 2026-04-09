<script setup>
const props = defineProps({
  columns: { type: Array, required: true },
  rows: { type: Array, required: true },
})
</script>

<template>
  <div class="w-full overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th v-for="c in props.columns" :key="c.key" :class="c.class">
            {{ c.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="r in props.rows" :key="r.campaignId">
          <tr class="row-hover">
            <template v-for="c in props.columns" :key="c.key">
              <slot :name="`${c.key}`" :value="`${r[c.key]}`" :row="r">
                <td>{{ r[c.key] }}</td>
              </slot>
            </template>
          </tr>
          <tr>
            <slot name="hiddenArea" :row="r"></slot>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
