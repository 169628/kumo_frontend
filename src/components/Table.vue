<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
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
          <!-- <th class="xl:hidden"></th>
          <th>ENABLED</th>
          <th>NO.</th>
          <th>BRAND</th>
          <th>MODEL</th>
          <th class="hidden md:table-cell">SV</th>
          <th class="hidden lg:table-cell">TV</th>
          <th class="hidden lg:table-cell">SIZE</th>
          <th class="hidden xl:table-cell">UPDATE AT</th>
          <th class="hidden xl:table-cell">ACTIONS</th> -->
        </tr>
      </thead>
      <tbody>
        <template v-for="r in props.rows" :key="r.campaign_id">
          <tr class="row-hover">
            <template v-for="c in props.columns" :key="c.key">
              <slot :name="`${c.key}`" :value="`${r[c.key]}`">
                <td>{{ r[c.key] }}</td>
              </slot>
            </template>
            <!--             
            <td class="xl:hidden">
              <span class="icon-[tabler--chevron-right] size-5"></span>
              <span class="icon-[tabler--chevron-down] size-5"></span>
            </td>
            <td>
              <input type="checkbox" class="switch switch-success" id="switchSuccess1" checked />
            </td>
            <td>{{ c.no }}</td>
            <td>{{ c.brand }}</td>
            <td>{{ c.model }}</td>
            <td class="hidden md:table-cell">{{ c.sv }}</td>
            <td class="hidden lg:table-cell">{{ c.tv }}</td>
            <td class="hidden lg:table-cell">{{ c.file_size }}</td>
            <td class="hidden xl:table-cell">{{ c.create_at }}</td>
            <td class="hidden xl:table-cell">{{ c.update_at }}</td>
            <td class="hidden xl:table-cell">
              <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                <span class="icon-[tabler--pencil] size-5"></span>
              </button>
              <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                <span class="icon-[tabler--trash] size-5"></span>
              </button>
            </td> -->
          </tr>
          <tr>
            <slot name="hiddenArea" :row="r"> No Data </slot>
            <!-- <td colspan="4" class="xl:hidden">
              <ul>
                <li class="md:hidden"><span class="font-medium tracking-wider">SV:</span> SV</li>
                <li class="lg:hidden"><span class="font-medium tracking-wider">TV:</span> TV</li>
                <li class="lg:hidden">
                  <span class="font-medium tracking-wider">SIZE:</span> SIZE
                </li>
                <li class="xl:hidden">
                  <span class="font-medium tracking-wider">CREATE AT:</span> CREATE AT
                </li>
                <li class="xl:hidden">
                  <span class="font-medium tracking-wider">UPDATE AT:</span> UPDATE AT
                </li>
                <li class="xl:hidden">
                  <span class="font-medium tracking-wider">ACTIONS:</span>
                  <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                    <span class="icon-[tabler--pencil] size-5"></span>
                  </button>
                  <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                    <span class="icon-[tabler--trash] size-5"></span>
                  </button>
                </li>
              </ul>
            </td> -->
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
